import "./index.scss";
import { useIsMobile } from "@/hooks/useIsMobile";
import { MobileLayout } from "./MobileLayout";
import { DesktopLayout } from "./DesktopLayout";

export function Layout() {
  const isMobile = useIsMobile();

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
}
