import sortIconDefault from "@/assets/sort-accent-medium.png";
import sortIconHover from "@/assets/sort-neutral-extra-light.png";
import "./SortButton.scss";

type Props = {
  sortOrder: "newest" | "oldest";
  onToggle: () => void;
};

export function SortButton({ sortOrder, onToggle }: Props) {
  return (
    <button className="sort-button" onClick={onToggle}>
      <span>{sortOrder === "newest" ? "Newest first" : "Oldest first"}</span>

      <img className="default-icon" src={sortIconDefault} alt="Sort" />
      <img className="hover-icon" src={sortIconHover} alt="Sort" />
    </button>
  );
}
