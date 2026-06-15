import { usePosts } from "@/hooks/usePosts";
import { Posts } from "@/components/Posts";
import "./LastArticles.scss";

export function LastArticles() {
  const { posts, isLoading, error } = usePosts();
  if (isLoading) {
    return <p>Loading last articles...</p>;
  }

  if (error) {
    return <p>Error loading last articles: {error.message}</p>;
  }

  return (
    <section className="last-articles">
      <h2 className="last-articles__title">Last articles</h2>

      {posts && <Posts posts={posts.slice(0, 3)} />}
    </section>
  );
}
