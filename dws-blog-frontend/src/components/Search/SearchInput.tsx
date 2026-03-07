import "./SearchInput.scss";
import { SearchButton } from "./SearchButton";

export function SearchInput() {
  return (
    <div className="search-container">
      <input type="search" placeholder="Search" />

      <SearchButton />
    </div>
  );
}
