import { useRef, useState } from "react";
import arrowExpandIcon from "@/assets/arrow-expand-secondary-medium.png";
import { SecondaryButton } from "@/components";
import { useClickOutside } from "@/hooks";
import type { FilterOption } from "@/types/filterOption";
import "./FilterDropdown.scss";

type Props = {
  options: FilterOption[] | undefined;
  selected: string[];
  onChange: (values: string[]) => void;
  label?: string;
};

export function FilterDropdown({
  options,
  selected,
  onChange,
  label = "Filter",
}: Props) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setOpen(false));

  function toggleOption(value: string) {
    if (selected.includes(value)) {
      onChange(selected.filter((currentValue) => currentValue !== value));
    } else {
      onChange([...selected, value]);
    }
  }

  return (
    <div className="filter-dropdown" ref={dropdownRef}>
      <SecondaryButton
        className={
          open ? "filter-dropdown__button--active" : "filter-dropdown__button"
        }
        label={label}
        icon={arrowExpandIcon}
        onClick={() => setOpen(!open)}
      />

      {open && (
        <div className="filter-dropdown__menu">
          <div className="filter-dropdown__menu__options">
            {options?.map((option) => {
              const isSelected = selected.includes(option.value);

              return (
                <button
                  key={option.value}
                  className={`filter-dropdown__item ${
                    isSelected ? "filter-dropdown__item--selected" : ""
                  }`}
                  onClick={() => toggleOption(option.value)}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
