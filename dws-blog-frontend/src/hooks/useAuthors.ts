import { useEffect, useState } from "react";
import { type Author } from "@/types/author";
import { authorsService } from "@/services/authors.service";

export function useAuthors() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAuthors() {
      try {
        const data = await authorsService.getAll();

        setAuthors(data);
      } catch (err) {
        console.log("error", err);
        setError("Failed to fetch authors");
      } finally {
        setLoading(false);
      }
    }

    fetchAuthors();
  }, []);

  return {
    authors,
    loading,
    error,
  };
}
