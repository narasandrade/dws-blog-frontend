import type { FilterOption } from "@/types/filterOption";
import { useAuthors } from "./useAuthors";
import { useCategories } from "./useCategories";
import { usePosts } from "./usePosts";

export function useHomeData() {
  const postsQuery = usePosts();
  const authorsQuery = useAuthors();
  const categoriesQuery = useCategories();

  const loading =
    postsQuery.loading || authorsQuery.loading || categoriesQuery.loading;
  const error = postsQuery.error || authorsQuery.error || categoriesQuery.error;

  const authorsFilterOptions: FilterOption[] = authorsQuery.authors.map(
    (author) => {
      return { label: author.name, value: author.id };
    },
  );

  const categoriesFilterOptions: FilterOption[] =
    categoriesQuery.categories.map((category) => {
      return { label: category.name, value: category.id };
    });

  return {
    posts: postsQuery.posts,
    authorsFilterOptions: authorsFilterOptions,
    categoriesFilterOptions: categoriesFilterOptions,
    loading,
    error,
  };
}
