import "./Tag.scss";

interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps) {
  return <div className="tag">{label}</div>;
}
