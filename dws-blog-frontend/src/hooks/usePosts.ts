import { useEffect, useState } from "react";
import { type Post } from "@/types/post";
import { postsService } from "@/services/posts.service";

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await postsService.getAll();

        setPosts(data);
      } catch (err) {
        console.log("error", err);
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return {
    posts,
    loading,
    error,
  };
}
