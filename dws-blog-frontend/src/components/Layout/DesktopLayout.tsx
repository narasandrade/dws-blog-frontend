import "./DesktopLayout.scss";
import dentsuLogo from "@/assets/dentsu-world-services.png";
import { SearchInput } from "@/components/Search";
import { SortButton } from "@/components/Sort";

export function DesktopLayout() {
  return (
    <>
      <header className="layout-top-bar">
        <img src={dentsuLogo} alt="Dentsu world services" />

        <SearchInput />
      </header>

      <main>
        <header>
          <h1>DWS blog</h1>

          <div className="sort-container">
            <span>Sort by:</span>

            <SortButton />
          </div>
        </header>
      </main>
    </>
  );
}
