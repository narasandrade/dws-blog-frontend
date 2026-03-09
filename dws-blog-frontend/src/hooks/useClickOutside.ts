import { useEffect } from "react";

export function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  handler: () => void,
) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!ref.current) return;

      if (!ref.current.contains(event.target as Node)) {
        handler();
      }
    }

    document.addEventListener("pointerdown", handleClick);

    return () => {
      document.removeEventListener("pointerdown", handleClick);
    };
  }, [ref, handler]);
}
