import "./BackButton.scss";
import arrowBackIconDefault from "@/assets/arrow-back-secondary-medium.png";
import arrowBackIconHover from "@/assets/arrow-back-secondary-dark.png";

export function BackButton() {
  return (
    <button className="back-button">
      <img className="default-icon" src={arrowBackIconDefault} alt="Back" />
      <img className="hover-icon" src={arrowBackIconHover} alt="Back" />

      <span>Back</span>
    </button>
  );
}
