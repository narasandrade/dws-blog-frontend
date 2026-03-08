import { useState } from "react";

import "./FilterDropdownButton.scss";
import arrowExpandIcon from "@/assets/arrow-expand-secondary-medium.png";

/*type Option = {
  label: string;
  value: string;
};*/

type Props = {
  //options: Option[];
  //selected: string[];
  //onChange: (values: string[]) => void;
  placeholder?: string;
};

export function FilterDropdownButton({
  //options,
  //selected,
  //onChange,
  placeholder = "Filter",
}: Props) {
  const [open, setOpen] = useState(false);

  /*function toggleOption(value: string) {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  }

  const selectedLabels = options
    .filter((opt) => selected.includes(opt.value))
    .map((opt) => opt.label);

  const buttonLabel =
    selectedLabels.length > 0 ? selectedLabels.join(", ") : placeholder;*/

  const buttonLabel = placeholder;

  return (
    <div className="filter-dropdown">
      <button
        className="filter-dropdown__button"
        onClick={() => setOpen(!open)}
      >
        {buttonLabel}
        <img src={arrowExpandIcon} alt="FilterDropdown" />
      </button>

      {/*open && (
        <div className="filter-dropdown__menu">
          {options.map((option) => {
            const isSelected = selected.includes(option.value);

            return (
              <div
                key={option.value}
                className={`filter-dropdown__item ${
                  isSelected ? "filter-dropdown__item--selected" : ""
                }`}
                onClick={() => toggleOption(option.value)}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      )*/}
    </div>
  );
}
