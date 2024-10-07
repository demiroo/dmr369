import BlurFade from "../../../components/magicui/blur-fade";
import { getBlogPosts } from "../../../data/blog";
import Link from "next/link";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const posts = await getBlogPosts();

  return (
    <section className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <BlurFade delay={0.25} inView>
            <h1 className="text-4xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 sm:text-6xl lg:text-7xl">
              {dictionary["BlogPage"].blog}
            </h1>
            <p className="mt-3 text-lg text-gray-400 sm:text-xl">
              Sharing thoughts on software development, life, and more.
            </p>
          </BlurFade>
        </header>

        {/* Blog post list */}
        <section className="space-y-8">
          {posts
            .sort((a, b) =>
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
                ? -1
                : 1
            )
            .map((post, id) => (
              <BlurFade
                delay={BLUR_FADE_DELAY * 2 + id * 0.1}
                key={post.slug}
                className="transform transition duration-500 ease-in-out hover:scale-105 hover:bg-opacity-100 bg-gray-800 bg-opacity-90 hover:shadow-lg hover:shadow-purple-500/50 p-4 rounded-lg overflow-hidden"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="flex items-center justify-between w-full space-x-4">
                    {/* Post Title */}
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-gray-100 tracking-tight mb-1 transition-colors duration-300 hover:text-purple-400">
                        {post.metadata.title}
                      </h2>
                      <p className="text-sm text-gray-400">
                        {new Date(post.metadata.publishedAt).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "long", day: "numeric" }
                        )}
                      </p>
                    </div>

                    {/* Hover effect for more details */}
                    <p className="text-sm text-purple-400 font-medium transition-all duration-300 opacity-0 group-hover:opacity-100">
                      Read more &rarr;
                    </p>
                  </div>
                </Link>
              </BlurFade>
            ))}
        </section>
      </div>
    </section>
  );
}
