import { Card } from "@/components/Card";
import type { Post } from "@/types/post";

export function Posts({ posts }: { posts: Post[] }) {

  return (
    <div className="home__content__posts-grid">
      {posts?.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
}
