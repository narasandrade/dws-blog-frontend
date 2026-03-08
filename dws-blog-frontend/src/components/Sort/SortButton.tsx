import "./SortButton.scss";
import sortIconDefault from "@/assets/sort-accent-medium.png";
import sortIconHover from "@/assets/sort-neutral-extra-light.png";

export function SortButton() {
  return (
    <button className="sort-button">
      <span>Newest first</span>

      <img className="default-icon" src={sortIconDefault} alt="Sort" />
      <img className="hover-icon" src={sortIconHover} alt="Sort" />
    </button>
  );
}
