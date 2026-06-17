import { useSearchParams } from "react-router-dom";
import { FilterDropdown, FiltersPanel, SortButton } from "@/components";
import { useIsMobile } from "@/hooks/useIsMobile";
import { usePosts } from "@/hooks/usePosts";
import { useCategories } from "@/hooks/useCategories";
import { useAuthors } from "@/hooks/useAuthors";
import { Posts } from "@/components/Posts";
import "./Home.scss";

export function Home() {
  const isMobile = useIsMobile();
  const { posts, isLoading: isPostsLoading, error: postsError } = usePosts();
  const { categories } = useCategories();
  const { authors } = useAuthors();

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategories =
    searchParams.get("categories")?.split(",").filter(Boolean) ?? [];
  const selectedAuthors =
    searchParams.get("authors")?.split(",").filter(Boolean) ?? [];
  const sortOrder = (searchParams.get("sort") ?? "newest") as
    | "newest"
    | "oldest";
  const searchQuery = searchParams.get("q")?.trim().toLowerCase() ?? "";

  function updateParams(patch: Record<string, string | null>) {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        Object.entries(patch).forEach(([key, value]) =>
          value ? next.set(key, value) : next.delete(key),
        );
        return next;
      },
      { replace: true },
    );
  }

  const categoriesFilterOptions = categories?.map((category) => ({
    label: category.name,
    value: category.id,
  }));

  const authorsFilterOptions = authors?.map((author) => ({
    label: author.name,
    value: author.id,
  }));

  const filteredPosts = posts?.filter((post) => {
    const authorMatch =
      selectedAuthors.length === 0 || selectedAuthors.includes(post.authorId);

    const categoryMatch =
      selectedCategories.length === 0 ||
      post.categories.some((category) =>
        selectedCategories.includes(category.id),
      );

    return authorMatch && categoryMatch;
  });

  const searchedPosts = filteredPosts?.filter((post) => {
    if (!searchQuery) return true;
    return (
      post.title.toLowerCase().includes(searchQuery) ||
      post.author.name.toLowerCase().includes(searchQuery) ||
      post.categories.some((category) =>
        category.name.toLowerCase().includes(searchQuery),
      )
    );
  });

  const sortedPosts = searchedPosts?.slice().sort((a, b) => {
    const diff =
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    return sortOrder === "newest" ? diff : -diff;
  });

  function toggleSort() {
    updateParams({ sort: sortOrder === "newest" ? "oldest" : "newest" });
  }

  return (
    <section className="home__content">
      {isMobile ? (
        <div className="home__content__controls">
          <FilterDropdown
            options={categoriesFilterOptions}
            selected={selectedCategories}
            onChange={(ids) =>
              updateParams({ categories: ids.join(",") || null })
            }
            label="Category"
          />
          <FilterDropdown
            options={authorsFilterOptions}
            selected={selectedAuthors}
            onChange={(ids) => updateParams({ authors: ids.join(",") || null })}
            label="Author"
          />
          <SortButton sortOrder={sortOrder} onToggle={toggleSort} />
        </div>
      ) : (
        <div className="home__content__title-and-sort">
          <h1>DWS blog</h1>

          <div className="sort-container">
            <span>Sort by:</span>

            <SortButton sortOrder={sortOrder} onToggle={toggleSort} />
          </div>
        </div>
      )}

      <div className="home__content__layout">
        {!isMobile && (
          <FiltersPanel
            categories={categoriesFilterOptions}
            authors={authorsFilterOptions}
            selectedCategories={selectedCategories}
            selectedAuthors={selectedAuthors}
            onApply={({ categories, authors }) => {
              updateParams({
                categories: categories.join(",") || null,
                authors: authors.join(",") || null,
              });
            }}
            onClear={() => updateParams({ categories: null, authors: null })}
          />
        )}

        {isPostsLoading && <p>Loading posts...</p>}

        {postsError && <p>Error loading posts: {postsError.message}</p>}

        {!isPostsLoading && !postsError && !sortedPosts?.length && (
          <p>No posts found.</p>
        )}

        {sortedPosts && <Posts posts={sortedPosts} />}
      </div>
    </section>
  );
}
