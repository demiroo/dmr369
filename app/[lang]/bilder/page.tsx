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
          <h2 className="text-4xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 sm:text-6xl lg:text-7xl">
            {dictionary["BilderPage"].bilder} 👋
          </h2>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
            {dictionary["BilderPage"].meinerwelt}
          </span>
        </BlurFade>
      </section>

      <BlurFade delay={0.25} inView>
        <>im aufbau</>
      </BlurFade>
    </>
  );
}
