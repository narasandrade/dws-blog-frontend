import "./MobileLayout.scss";
import dentsuLogo from "@/assets/dentsu-world-services.png";
import { SearchButton } from "@/components/Search";
import { FilterDropdownButton } from "@/components/Filter";
import { SortButton } from "@/components/Sort";
import { Home } from "@/pages/home";

export function MobileLayout() {
  return (
    <>
      <header className="layout-top-bar">
        <img src={dentsuLogo} alt="Dentsu world services" />

        <SearchButton />
      </header>
      <main>
        <header>
          <FilterDropdownButton placeholder="Category" />
          <FilterDropdownButton placeholder="Author" />
          <SortButton />
        </header>

        <Home />
      </main>
    </>
  );
}
