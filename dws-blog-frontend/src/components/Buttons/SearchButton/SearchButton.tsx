import searchIcon from "@/assets/search.png";
import "./SearchButton.scss";

export function SearchButton() {
  return (
    <button className="search-button">
      <img src={searchIcon} alt="Search" />
    </button>
  );
}
