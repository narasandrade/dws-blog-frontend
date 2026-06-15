import { useState } from "react";
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
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

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

  return (
    <section className="home__content">
      {isMobile ? (
        <div className="home__content__controls">
          <FilterDropdown
            options={categoriesFilterOptions}
            selected={selectedCategories}
            onChange={setSelectedCategories}
            label="Category"
          />
          <FilterDropdown
            options={authorsFilterOptions}
            selected={selectedAuthors}
            onChange={setSelectedAuthors}
            label="Author"
          />
          <SortButton />
        </div>
      ) : (
        <div className="home__content__title-and-sort">
          <h1>DWS blog</h1>

          <div className="sort-container">
            <span>Sort by:</span>

            <SortButton />
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
              setSelectedCategories(categories);
              setSelectedAuthors(authors);
            }}
          />
        )}

        {isPostsLoading && <p>Loading posts...</p>}

        {postsError && <p>Error loading posts: {postsError.message}</p>}

        {!isPostsLoading && !postsError && !filteredPosts?.length && (
          <p>No posts found.</p>
        )}

        {filteredPosts && <Posts posts={filteredPosts} />}
      </div>
    </section>
  );
}
