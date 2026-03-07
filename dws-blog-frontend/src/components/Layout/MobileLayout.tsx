import dentsuLogo from "@/assets/dentsu-world-services.png";
import { SearchButton } from "@/components/Search";

export function MobileLayout() {
  return (
    <header>
      <img src={dentsuLogo} alt="Dentsu world services" />

      <SearchButton />
    </header>
  );
}
