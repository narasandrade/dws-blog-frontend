import { SearchButton } from "@/components/Buttons";
import "./SearchInput.scss";

export function SearchInput() {
  return (
    <div className="search-container">
      <input type="search" placeholder="Search" />

      <SearchButton />
    </div>
  );
}
