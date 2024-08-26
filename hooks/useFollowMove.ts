import { useEffect } from "react";

export function useFollowMouse(elementId: string) {
  useEffect(() => {
    const circle = document.getElementById(elementId);

    if (circle) {
      circle.classList.remove("hidden");
      const onMouseMove = (e: MouseEvent) => {
        circle.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      };
      document.addEventListener("mousemove", onMouseMove);

      return () => {
        document.removeEventListener("mousemove", onMouseMove);
      };
    }
  }, []);
}
