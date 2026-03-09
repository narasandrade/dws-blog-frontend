import "./Home.scss";
import { usePosts } from "@/hooks/usePosts";
import { Card } from "@/components/Card";

export function Home() {
  const { posts, loading, error } = usePosts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="home__posts-grid">
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </section>
  );
}
