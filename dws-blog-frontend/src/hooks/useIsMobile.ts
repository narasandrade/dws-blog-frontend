import { useEffect, useState } from "react";
import { BREAKPOINTS } from "../constants/breakpoints";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < BREAKPOINTS.mobile,
  );

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${BREAKPOINTS.mobile - 1}px)`);

    const listener = () => setIsMobile(media.matches);

    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  return isMobile;
}
