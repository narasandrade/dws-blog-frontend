import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import dentsuLogo from "@/assets/dentsu-world-services.png";
import xIcon from "@/assets/x-secondary-medium.png";
import { SearchButton } from "@/components/Buttons";
import { SearchInput } from "@/components/SearchInput";
import { useDebounce } from "@/hooks/useDebounce";
import { useIsMobile } from "@/hooks/useIsMobile";
import "./TopBar.scss";

export function TopBar() {
  const isMobile = useIsMobile();
  const [searchParams, setSearchParams] = useSearchParams();

  const [inputValue, setInputValue] = useState(searchParams.get("q") ?? "");
  const [mobileOpen, setMobileOpen] = useState(false);

  const debouncedValue = useDebounce(inputValue, 300);

  useEffect(() => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (debouncedValue) {
          next.set("q", debouncedValue);
        } else {
          next.delete("q");
        }
        return next;
      },
      { replace: true },
    );
  }, [debouncedValue, setSearchParams]);

  function handleClear() {
    setInputValue("");
    setMobileOpen(false);
  }

  if (isMobile && mobileOpen) {
    return (
      <header className="top-bar top-bar--search-open">
        <SearchInput
          value={inputValue}
          onChange={setInputValue}
          onClear={handleClear}
          autoFocus
        />
        <button
          className="top-bar__close"
          onClick={handleClear}
          aria-label="Close search"
        >
          <img src={xIcon} alt="" aria-hidden="true" />
        </button>
      </header>
    );
  }

  return (
    <header className="top-bar">
      <img src={dentsuLogo} alt="Dentsu world services" />
      {isMobile ? (
        <SearchButton onClick={() => setMobileOpen(true)} />
      ) : (
        <SearchInput
          value={inputValue}
          onChange={setInputValue}
          onClear={handleClear}
        />
      )}
    </header>
  );
}
