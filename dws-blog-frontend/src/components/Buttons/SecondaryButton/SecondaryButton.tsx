import "./SecondaryButton.scss";

type Props = {
  label: string;
  icon: string;
  onClick: () => void;
  className?: string;
};

export function SecondaryButton({ label, icon, onClick, className }: Props) {
  return (
    <button className={`secondary-button ${className || ""}`} onClick={onClick}>
      {label}
      <img src={icon} alt="icon" />
    </button>
  );
}
