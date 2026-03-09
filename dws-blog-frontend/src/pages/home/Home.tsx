import "./Home.scss";
import dentsuLogo from "@/assets/dentsu-world-services.png";
import { SearchButton, SearchInput } from "@/components/Search";
import { FilterDropdownButton } from "@/components/Filter";
import { SortButton } from "@/components/Sort";
import { usePosts } from "@/hooks/usePosts";
import { Card } from "@/components/Card";
import { useIsMobile } from "@/hooks/useIsMobile";

export function Home() {
  const isMobile = useIsMobile();
  const { posts, loading, error } = usePosts();

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
            <FilterDropdownButton placeholder="Category" />
            <FilterDropdownButton placeholder="Author" />
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
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
