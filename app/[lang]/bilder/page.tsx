import Image from "next/image";
import { BentoCard, BentoGrid } from "../../../components/magicui/bento-grid";
import { FileTextIcon, GlobeIcon, CalendarIcon, BellIcon } from "lucide-react";
import { InputIcon } from "@radix-ui/react-icons";
import BlurFade from "../../../components/magicui/blur-fade";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";

export default async function BilderPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <section className="mb-3" id="header">
        <BlurFade delay={0.25} inView>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            {dictionary["BilderPage"].bilder}👋
          </h2>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
            {dictionary["BilderPage"].meinerwelt}
          </span>
        </BlurFade>
      </section>

      <BlurFade delay={0.25} inView>
        <BentoGrid className="lg:grid-rows-3">
          <BentoCard
            name="ela"
            className="lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 zoom-card"
            Icon={FileTextIcon}
            description="ela"
            href="/"
            cta="Find out more"
            background={
              <div className="image-container">
                <Image
                  src="https://guezelsoezler.com/20240520_162407.jpg"
                  alt="File Storage"
                  fill
                  className="rounded-t-lg zoom-image custom-cover"
                />
              </div>
            }
          />

          <BentoCard
            name="ela"
            className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
            Icon={InputIcon}
            description="ela"
            href="/"
            cta="Learn more"
            background={
              <div className="image-container">
                <Image
                  src="https://guezelsoezler.com/20231008_151133.jpg"
                  alt="File Search"
                  fill
                  className="rounded-t-lg zoom-image custom-cover"
                />
              </div>
            }
          />

          <BentoCard
            name="ela"
            className="lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
            Icon={GlobeIcon}
            description="ela"
            href="/"
            cta="Learn more"
            background={
              <div className="image-container">
                <Image
                  src="https://guezelsoezler.com/Bildschirmfoto 2024-08-25 um 19.15.18.png"
                  alt="Language Support"
                  fill
                  className="rounded-t-lg zoom-image custom-cover"
                />
              </div>
            }
          />

          <BentoCard
            name="ela"
            className="lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2"
            Icon={CalendarIcon}
            description="ela"
            href="/"
            cta="Explore now"
            background={
              <Image
                src="https://guezelsoezler.com/20231006_075338.jpg"
                alt="Calendar"
                fill
                className="rounded-t-lg zoom-image custom-cover"
              />
            }
          />

          <BentoCard
            name="ela"
            className="h-full lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4"
            Icon={BellIcon}
            description="ela"
            href="/"
            cta="Find out more"
            background={
              <Image
                src="https://guezelsoezler.com/FB_IMG_1691304703520.jpg"
                alt="Notifications"
                fill
                className="rounded-t-lg zoom-image custom-cover"
              />
            }
          />
        </BentoGrid>
      </BlurFade>
      <BlurFade delay={0.25} inView>
        <BentoGrid className="lg:grid-rows-3 mt-5">
          <BentoCard
            name="ela"
            className="lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 zoom-card"
            Icon={FileTextIcon}
            description="ela"
            href="/"
            cta="Find out more"
            background={
              <div className="image-container">
                <Image
                  src="https://guezelsoezler.com/20240520_162407.jpg"
                  alt="File Storage"
                  fill
                  className="rounded-t-lg zoom-image custom-cover"
                />
              </div>
            }
          />

          <BentoCard
            name="ela"
            className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
            Icon={InputIcon}
            description="ela"
            href="/"
            cta="Learn more"
            background={
              <div className="image-container">
                <Image
                  src="https://guezelsoezler.com/20231008_151133.jpg"
                  alt="File Search"
                  fill
                  className="rounded-t-lg zoom-image custom-cover"
                />
              </div>
            }
          />

          <BentoCard
            name="ela"
            className="lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
            Icon={GlobeIcon}
            description="ela"
            href="/"
            cta="Learn more"
            background={
              <div className="image-container">
                <Image
                  src="https://guezelsoezler.com/Bildschirmfoto 2024-08-25 um 19.15.18.png"
                  alt="Language Support"
                  fill
                  className="rounded-t-lg zoom-image custom-cover"
                />
              </div>
            }
          />

          <BentoCard
            name="ela"
            className="lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2"
            Icon={CalendarIcon}
            description="ela"
            href="/"
            cta="Explore now"
            background={
              <Image
                src="https://guezelsoezler.com/20231006_075338.jpg"
                alt="Calendar"
                fill
                className="rounded-t-lg zoom-image custom-cover"
              />
            }
          />

          <BentoCard
            name="ela"
            className="h-full lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4"
            Icon={BellIcon}
            description="ela"
            href="/"
            cta="Find out more"
            background={
              <Image
                src="https://guezelsoezler.com/FB_IMG_1691304703520.jpg"
                alt="Notifications"
                fill
                className="rounded-t-lg zoom-image custom-cover"
              />
            }
          />
        </BentoGrid>
      </BlurFade>
      <BlurFade delay={0.25} inView>
        <BentoGrid className="lg:grid-rows-3 mt-5">
          <BentoCard
            name="ela"
            className="lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 zoom-card"
            Icon={FileTextIcon}
            description="ela"
            href="/"
            cta="Find out more"
            background={
              <div className="image-container">
                <Image
                  src="https://guezelsoezler.com/20240520_162407.jpg"
                  alt="File Storage"
                  fill
                  className="rounded-t-lg zoom-image custom-cover"
                />
              </div>
            }
          />

          <BentoCard
            name="ela"
            className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
            Icon={InputIcon}
            description="ela"
            href="/"
            cta="Learn more"
            background={
              <div className="image-container">
                <Image
                  src="https://guezelsoezler.com/20231008_151133.jpg"
                  alt="File Search"
                  fill
                  className="rounded-t-lg zoom-image custom-cover"
                />
              </div>
            }
          />

          <BentoCard
            name="ela"
            className="lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
            Icon={GlobeIcon}
            description="ela"
            href="/"
            cta="Learn more"
            background={
              <div className="image-container">
                <Image
                  src="https://guezelsoezler.com/Bildschirmfoto 2024-08-25 um 19.15.18.png"
                  alt="Language Support"
                  fill
                  className="rounded-t-lg zoom-image custom-cover"
                />
              </div>
            }
          />

          <BentoCard
            name="ela"
            className="lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2"
            Icon={CalendarIcon}
            description="ela"
            href="/"
            cta="Explore now"
            background={
              <Image
                src="https://guezelsoezler.com/20231006_075338.jpg"
                alt="Calendar"
                fill
                className="rounded-t-lg zoom-image custom-cover"
              />
            }
          />

          <BentoCard
            name="ela"
            className="h-full lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4"
            Icon={BellIcon}
            description="ela"
            href="/"
            cta="Find out more"
            background={
              <Image
                src="https://guezelsoezler.com/FB_IMG_1691304703520.jpg"
                alt="Notifications"
                fill
                className="rounded-t-lg zoom-image custom-cover"
              />
            }
          />
        </BentoGrid>
      </BlurFade>
    </>
  );
}
