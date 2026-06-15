import { useQuery } from "@tanstack/react-query";
import { authorsService } from "@/services/authors.service";

const fetchAuthors = () => authorsService.getAll();

export function useAuthors() {
  const query = useQuery({
    queryFn: fetchAuthors,
    queryKey: ["authors"],
    refetchOnWindowFocus: true,
  });

  return {
    ...query,
    authors: query.data,
  };
}
