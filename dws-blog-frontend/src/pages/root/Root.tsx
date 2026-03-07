import "./Root.scss";
import dentsuLogo from "@/assets/dentsu-world-services.png";
import searchIcon from "@/assets/search.png";

export function Root() {
  return (
    <header>
      <img src={dentsuLogo} alt="Dentsu world services" />
      <div className="search-container">
        <input type="search" placeholder="Search"/>

        <button>
            <img src={searchIcon} alt="Search"/>
        </button>
      </div>
    </header>
  );
}
