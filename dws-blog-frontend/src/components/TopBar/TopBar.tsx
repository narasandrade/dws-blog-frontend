import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import dentsuLogo from "@/assets/dentsu-world-services.png";
import { SearchButton, SearchInput } from "@/components";
import { useDebounce, useIsMobile } from "@/hooks";
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
