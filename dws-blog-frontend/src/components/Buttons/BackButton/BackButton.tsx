import arrowBackIconDefault from "@/assets/arrow-back-secondary-medium.png";
import arrowBackIconHover from "@/assets/arrow-back-secondary-dark.png";
import "./BackButton.scss";

export function BackButton({ onClick }: { onClick?: () => void }) {
  return (
    <button className="back-button" onClick={onClick}>
      <img className="default-icon" src={arrowBackIconDefault} alt="Back" />
      <img className="hover-icon" src={arrowBackIconHover} alt="Back" />

      <span>Back</span>
    </button>
  );
}
