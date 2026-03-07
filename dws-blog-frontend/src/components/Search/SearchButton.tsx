import "./SearchButton.scss";
import searchIcon from "@/assets/search.png";

export function SearchButton() {
  return (
    <button>
      <img src={searchIcon} alt="Search" />
    </button>
  );
}
