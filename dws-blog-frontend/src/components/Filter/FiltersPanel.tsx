import "./FiltersPanel.scss";
import { useState } from "react";
import filterIcon from "@/assets/filter.png";
import type { FilterOption } from "@/types/filterOption";

type Props = {
  categories: FilterOption[];
  authors: FilterOption[];
  selectedCategories: string[];
  selectedAuthors: string[];
  onApply: (filters: { categories: string[]; authors: string[] }) => void;
};

export function FiltersPanel({
  categories,
  authors,
  selectedCategories,
  selectedAuthors,
  onApply,
}: Props) {
  const [tempCategories, setTempCategories] = useState(selectedCategories);
  const [tempAuthors, setTempAuthors] = useState(selectedAuthors);

  function toggleValue(
    value: string,
    selected: string[],
    setter: (values: string[]) => void,
  ) {
    if (selected.includes(value)) {
      setter(selected.filter((v) => v !== value));
    } else {
      setter([...selected, value]);
    }
  }

  function applyFilters() {
    onApply({
      categories: tempCategories,
      authors: tempAuthors,
    });
  }

  return (
    <aside className="filters-panel">
      <header className="filters-panel__header">
        <img src={filterIcon} alt="icon" />
        <h2>Filters</h2>
      </header>

      <div className="filters-panel__section">
        <h3>Category</h3>

        {categories.map((category) => {
          const selected = tempCategories.includes(category.value);

          return (
            <button
              key={category.value}
              className={`filters-panel__option ${
                selected ? "filters-panel__option--selected" : ""
              }`}
              onClick={() =>
                toggleValue(category.value, tempCategories, setTempCategories)
              }
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="filters-panel__section">
        <h3>Author</h3>

        {authors.map((author) => {
          const selected = tempAuthors.includes(author.value);

          return (
            <button
              key={author.value}
              className={`filters-panel__option ${
                selected ? "filters-panel__option--selected" : ""
              }`}
              onClick={() =>
                toggleValue(author.value, tempAuthors, setTempAuthors)
              }
            >
              {author.label}
            </button>
          );
        })}
      </div>

      <button className="filters-panel__apply-button" onClick={applyFilters}>
        Apply filters
      </button>
    </aside>
  );
}
