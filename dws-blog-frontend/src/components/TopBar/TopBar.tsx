import dentsuLogo from "@/assets/dentsu-world-services.png";
import { SearchButton, SearchInput } from "@/components";
import { useIsMobile } from "@/hooks/useIsMobile";
import "./TopBar.scss";

export function TopBar() {
  const isMobile = useIsMobile();

  return (
    <header className="top-bar">
      <img src={dentsuLogo} alt="Dentsu world services" />

      {isMobile ? <SearchButton /> : <SearchInput />}
    </header>
  );
}
