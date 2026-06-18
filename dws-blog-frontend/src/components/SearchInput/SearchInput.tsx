import xIcon from "@/assets/x-secondary-medium.png";
import { SearchButton } from "@/components/Buttons";
import "./SearchInput.scss";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  autoFocus?: boolean;
};

export function SearchInput({ value, onChange, onClear, autoFocus }: Props) {
  return (
    <div className="search-container">
      <input
        type="search"
        placeholder="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoFocus={autoFocus}
      />

      {value && onClear && (
        <button
          className="search-container__clear"
          onClick={onClear}
          aria-label="Clear search"
        >
          <img src={xIcon} alt="" aria-hidden="true" />
        </button>
      )}

      <SearchButton />
    </div>
  );
}
