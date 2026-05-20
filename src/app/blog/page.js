import { posts } from "@/data/posts";
import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <p className="text-notion-muted text-sm mb-6 border-l-2 border-notion-accent pl-3 italic">
        here to practice my "bug-স্বাধীনতা"
      </p>
      <div className="divide-y divide-notion-border">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex items-start gap-3 py-3 group hover:text-notion-accent transition-colors"
          >
            <span className="text-lg leading-snug shrink-0 mt-0.5">📄</span>
            <div>
              <p className="font-medium text-notion-text group-hover:text-notion-accent transition-colors text-sm">
                {post.title}
              </p>
              <p className="text-xs text-notion-muted mt-0.5">{post.genre}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
