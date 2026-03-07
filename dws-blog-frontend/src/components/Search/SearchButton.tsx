import "./SearchButton.scss";
import searchIcon from "@/assets/search.png";

export function SearchButton() {
  return (
    <button className="search-button">
      <img src={searchIcon} alt="Search" />
    </button>
  );
}
