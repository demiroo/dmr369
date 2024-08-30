import { HackathonCard } from "../../components/hackathon-card";
import BlurFade from "../../components/magicui/blur-fade";
import BlurFadeText from "../../components/magicui/blur-fade-text";
import { ProjectCard } from "../..//components/project-card";
import { ResumeCard } from "../../components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { DATA } from "../../data/resume";
import Link from "next/link";
const BLUR_FADE_DELAY = 0.04;
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import LocaleSwitcher from "../../components/locale-switcher";
import ShineBorder from "../../components/magicui/shine-border";


export default async function Page( {
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
            <BlurFadeText
  className="max-w-[600px] md:text-xl"
  delay={BLUR_FADE_DELAY}
  text={dictionary["HomePage"].description}  // Corrected this line
/>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
            <ShineBorder className=" rounded-full object-cover"
  borderRadius={1000} // Ensures the border is round, assuming a circular Avatar
  borderWidth={2} // Adjust as needed
  duration={8} // Adjust the animation duration
  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>


 <Avatar className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full object-cover">
 <AvatarImage
        src="https://guezelsoezler.com/4e514677-765c-40a5-8ef6-c69f579115f7.jpg.png"
        alt="File Storage"
        className="w-full h-full object-cover rounded-full"
      />
      <AvatarFallback>
        {/* You can include fallback content here, e.g., initials or a default image */}
        <span className="text-gray-500">Fallback</span>
      </AvatarFallback>
    </Avatar>
</ShineBorder>

</BlurFade>

          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">{dictionary["HomePage"].title} </h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <h2 className="text-xl font-bold">{dictionary["HomePage"].description} </h2>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold"> {dictionary["HomePage"].berufserfahrungtitle} </h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
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
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">{dictionary["HomePage"].ausbildungtitle} </h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
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
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">{dictionary["HomePage"].faehigkeiten} </h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Meine Projekte
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {dictionary["HomePage"].schauean} 
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {dictionary["HomePage"].ichhabeeinevielzahl} 
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
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
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {dictionary["HomePage"].ichbaue} 
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {dictionary["HomePage"].ichbauegernedinge} 
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
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
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Kontakt
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {dictionary["HomePage"].contact} 
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {dictionary["HomePage"].lustaufeinchat} <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                 {dictionary["HomePage"].twitterdm} 
                </Link>{" "}{dictionary["HomePage"].antworte} 
                
              </p>
            </div>
            <LocaleSwitcher/>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
