import { Card } from "@/components";
import type { Post } from "@/types/post";
import "./Posts.scss";

export function Posts({ posts }: { posts: Post[] }) {
  return (
    <div className="posts-grid">
      {posts?.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
}
