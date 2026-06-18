import searchIcon from "@/assets/search.png";
import "./SearchButton.scss";

type Props = {
  onClick?: () => void;
};

export function SearchButton({ onClick }: Props) {
  return (
    <button className="search-button" onClick={onClick}>
      <img src={searchIcon} alt="Search" />
    </button>
  );
}
