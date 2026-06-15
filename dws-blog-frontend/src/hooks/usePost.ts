import { useQuery } from "@tanstack/react-query";
import { postsService } from "@/services/posts.service";

const fetchPost = (id: string) => postsService.getById(id);

export function usePost(id: string) {
  const query = useQuery({
    queryFn: () => fetchPost(id),
    queryKey: ["post", id],
    refetchOnWindowFocus: true,
  });

  return {
    ...query,
    post: query.data,
  };
}
