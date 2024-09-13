import { posts } from "@/data/posts";

export default function BlogPost({ params }) {
  const { slug } = params;
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </div>
  );
}
