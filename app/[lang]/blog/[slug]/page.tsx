import BlurFade from "../../../../components/magicui/blur-fade";
import { getPost } from "../../../../data/blog";
import { DATA } from "../../../../data/resume";
import { formatDate } from "../../../../lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = await getPost(params.slug);

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? `${DATA.url}${image}`
    : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section id="blog" className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* SEO / Schema Markup */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${DATA.url}${post.metadata.image}`
                : `${DATA.url}/og?title=${post.metadata.title}`,
              url: `${DATA.url}/blog/${post.slug}`,
              author: { "@type": "Person", name: DATA.name },
            }),
          }}
        />

        <BlurFade delay={0.25} inView>
          {/* Blog Title */}
          <h1 className="text-4xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 sm:text-6xl lg:text-7xl">
            {post.metadata.title}
          </h1>

          {/* Publish Date */}
          <div className="flex justify-between items-center mt-4 mb-12 text-sm text-gray-400 max-w-[650px]">
            <Suspense fallback={<p className="h-5" />}>
              <p>{formatDate(post.metadata.publishedAt)}</p>
            </Suspense>
          </div>
        </BlurFade>

        {/* Blog Content */}
        <BlurFade delay={0.35} inView>
          <article
            className="prose dark:prose-invert max-w-[700px] mx-auto transition-opacity duration-300 ease-in-out"
            dangerouslySetInnerHTML={{ __html: post.source }}
          />
        </BlurFade>
      </div>
    </section>
  );
}
