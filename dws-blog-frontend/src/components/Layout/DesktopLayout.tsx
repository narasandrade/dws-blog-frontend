import dentsuLogo from "@/assets/dentsu-world-services.png";
import { SearchInput } from "@/components/Search";

export function DesktopLayout() {
  return (
    <header>
      <img src={dentsuLogo} alt="Dentsu world services" />

      <SearchInput />
    </header>
  );
}
