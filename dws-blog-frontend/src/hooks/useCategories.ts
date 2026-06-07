import { useQuery } from "@tanstack/react-query";
import { categoriesService } from "@/services/categories.service";

const fetchCategories = () => categoriesService.getAll();

export function useCategories() {
  const query = useQuery({
    queryFn: () => fetchCategories(),
    queryKey: ["categories"],
    refetchOnWindowFocus: true,
  });

  return {
    ...query,
    categories: query.data,
  };
}
