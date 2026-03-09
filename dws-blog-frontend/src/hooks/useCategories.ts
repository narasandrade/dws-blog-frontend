import { useEffect, useState } from "react";
import { type Category } from "@/types/category";
import { categoriesService } from "@/services/categories.service";

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await categoriesService.getAll();

        setCategories(data);
      } catch (err) {
        console.log("error", err);
        setError("Failed to fetch categories");
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return {
    categories,
    loading,
    error,
  };
}
