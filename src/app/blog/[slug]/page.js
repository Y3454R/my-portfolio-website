import { posts } from "@/data/posts";
import Link from "next/link";

export default function BlogPost({ params }) {
  const { slug } = params;
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="text-notion-muted text-sm">
        😶 Post not found.{" "}
        <Link href="/blog" className="text-notion-accent hover:underline">
          ← Back to blog
        </Link>
      </div>
    );
  }

  return (
    <article>
      <Link
        href="/blog"
        className="text-xs text-notion-muted hover:text-notion-accent transition-colors mb-6 inline-block"
      >
        ← Blog
      </Link>

      <header className="mt-2 mb-8">
        <h1 className="text-2xl font-bold text-notion-text mb-2 leading-snug">
          {post.title}
        </h1>
        <p className="text-xs text-notion-muted">
          {post.genre} · {post.date} · ✍️ {post.author}
        </p>
        {post.image && (
          <div className="mt-6">
            <img
              src={post.image}
              alt={post.title}
              className="rounded-lg w-full object-cover max-h-64"
            />
            {post.caption && (
              <p className="text-xs text-notion-muted text-center mt-2">
                {post.caption}
              </p>
            )}
          </div>
        )}
      </header>

      <section
        className="notion-prose text-sm text-justify"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <footer className="mt-12 pt-6 border-t border-notion-border text-sm text-notion-muted">
        🍩 Thanks for reading!
      </footer>
    </article>
  );
}
