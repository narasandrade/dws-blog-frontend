import { useQuery } from "@tanstack/react-query";
import { postsService } from "@/services/posts.service";

const fetchPosts = () => postsService.getAll();

export function usePosts() {
  const query = useQuery({
    queryFn: () => fetchPosts(),
    queryKey: ["posts"],
    refetchOnWindowFocus: true,
  });

  return {
    ...query,
    posts: query.data,
  };
}
