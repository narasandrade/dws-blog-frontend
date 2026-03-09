import "./Home.scss";
import { useState } from "react";
import dentsuLogo from "@/assets/dentsu-world-services.png";
import { SearchButton, SearchInput } from "@/components/Search";
import { FilterDropdown } from "@/components/Filter";
import { SortButton } from "@/components/Sort";
import { Card } from "@/components/Card";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useHomeData } from "@/hooks/useHomeData";

export function Home() {
  const isMobile = useIsMobile();
  const {
    posts,
    authorsFilterOptions,
    categoriesFilterOptions,
    loading,
    error,
  } = useHomeData();
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filteredPosts = posts.filter((post) => {
    const authorMatch =
      selectedAuthors.length === 0 || selectedAuthors.includes(post.authorId);

    const categoryMatch =
      selectedCategories.length === 0 ||
      post.categories.some((category) =>
        selectedCategories.includes(category.id),
      );

    return authorMatch && categoryMatch;
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <header className="home__top-bar">
        <img src={dentsuLogo} alt="Dentsu world services" />

        {isMobile ? <SearchButton /> : <SearchInput />}
      </header>

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

        <div className="home__content__posts-grid">
          {filteredPosts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
