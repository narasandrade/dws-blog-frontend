import "./SecondaryButton.scss";

type Props = {
  label: string;
  icon: string;
  onClick: () => void;
};

export function SecondaryButton({ label, icon, onClick }: Props) {
  return (
    <button className="secondary-button" onClick={onClick}>
      {label}
      <img src={icon} alt="icon" />
    </button>
  );
}
