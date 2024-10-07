'use client'

import { HackathonCard } from "//components/hackathon-card"
import BlurFade from "//components/magicui/blur-fade"
import BlurFadeText from "//components/magicui/blur-fade-text"
import { ProjectCard } from "//components/project-card"
import { ResumeCard } from "//components/resume-card"
import { Avatar } from "//components/ui/avatar"
import { Badge } from "//components/ui/badge"
import { DATA } from "//data/resume"
import Link from "next/link"
import { getDictionary } from "//get-dictionary"
import { Locale } from "//i18n-config"
import LocaleSwitcher from "//components/locale-switcher"
import ShineBorder from "//components/magicui/shine-border"
import Image from "next/image"
import { Button } from "//components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"

const BLUR_FADE_DELAY = 0.05

export async function PageComponent({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-16 bg-gradient-to-b from-background to-secondary/20">
      <section id="hero" className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-6">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="text-xl text-muted-foreground"
                delay={BLUR_FADE_DELAY}
                text={dictionary["HomePage"].description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="flex space-x-4">
                  <Button>
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">
                    View Resume
                  </Button>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <ShineBorder
                className="rounded-full"
                borderRadius={1000}
                borderWidth={2}
                duration={8}
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              >
                <Avatar className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover zoom-card">
                  <Image
                    src="https://guezelsoezler.com/4e514677-765c-40a5-8ef6-c69f579115f7.jpg.png"
                    alt={DATA.name}
                    layout="fill"
                    className="rounded-full zoom-image custom-cover"
                  />
                </Avatar>
              </ShineBorder>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about" className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-3xl font-bold mb-6">{dictionary["HomePage"].title}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <p className="text-lg text-muted-foreground">{dictionary["HomePage"].description}</p>
          </BlurFade>
        </div>
      </section>

      <section id="work" className="py-16">
        <div className="container mx-auto px-4">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-3xl font-bold mb-8">{dictionary["HomePage"].berufserfahrungtitle}</h2>
          </BlurFade>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DATA.work.map((work, id) => (
              <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                <ResumeCard
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-3xl font-bold mb-8">{dictionary["HomePage"].ausbildungtitle}</h2>
          </BlurFade>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DATA.education.map((education, id) => (
              <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
                <ResumeCard
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-16">
        <div className="container mx-auto px-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-3xl font-bold mb-8">{dictionary["HomePage"].faehigkeiten}</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge variant="secondary" className="text-lg py-2 px-4">{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-primary text-primary-foreground px-4 py-1.5 text-sm font-medium mb-4">
                Meine Projekte
              </div>
              <h2 className="text-4xl font-bold mb-4">{dictionary["HomePage"].schauean}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {dictionary["HomePage"].ichhabeeinevielzahl}
              </p>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DATA.projects.map((project, id) => (
              <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="hackathons" className="py-16">
        <div className="container mx-auto px-4">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-primary text-primary-foreground px-4 py-1.5 text-sm font-medium mb-4">
                Hackathons
              </div>
              <h2 className="text-4xl font-bold mb-4">{dictionary["HomePage"].ichbaue}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {dictionary["HomePage"].ichbauegernedinge}
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="space-y-8">
              {DATA.hackathons.map((project, id) => (
                <BlurFade key={project.title + project.dates} delay={BLUR_FADE_DELAY * 15 + id * 0.05}>
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>

      <section id="contact" className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="max-w-2xl mx-auto">
              <div className="inline-block rounded-lg bg-primary text-primary-foreground px-4 py-1.5 text-sm font-medium mb-4">
                Kontakt
              </div>
              <h2 className="text-4xl font-bold mb-4">{dictionary["HomePage"].contact}</h2>
              <p className="text-xl text-muted-foreground mb-8">
                {dictionary["HomePage"].lustaufeinchat}{" "}
                <Link href={DATA.contact.social.X.url} className="text-primary hover:underline">
                  {dictionary["HomePage"].twitterdm}
                </Link>{" "}
                {dictionary["HomePage"].antworte}
              </p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="mt-8">
              <LocaleSwitcher />
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  )
}