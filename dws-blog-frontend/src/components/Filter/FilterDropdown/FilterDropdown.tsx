import { useRef, useState } from "react";
import type { FilterOption } from "@/types/filterOption";
import { useClickOutside } from "@/hooks/useClickOutside";
import { SecondaryButton } from "@/components";
import arrowExpandIcon from "@/assets/arrow-expand-secondary-medium.png";
import clearIcon from "@/assets/x-secondary-medium.png";
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

  const selectedLabels = options
    ?.filter((option) => selected.includes(option.value))
    .map((option) => option.label);

  const showSelectedLabels = selectedLabels && selectedLabels.length > 0;

  return (
    <div className="filter-dropdown" ref={dropdownRef}>
      <div className="filter-dropdown__button">
        <SecondaryButton
          label={label}
          icon={arrowExpandIcon}
          onClick={() => setOpen(!open)}
        />
      </div>

      {open && (
        <div className="filter-dropdown__menu">
          <div className="filter-dropdown__menu__options">
            {options?.map((option) => {
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
        </div>
      )}

      {open && showSelectedLabels && (
        <SecondaryButton
          label={selectedLabels.join(", ")}
          icon={clearIcon}
          onClick={() => onChange([])}
        />
      )}
    </div>
  );
}
