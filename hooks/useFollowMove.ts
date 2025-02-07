import { useEffect } from "react";

export function useFollowMouse(elementId: string) {
  useEffect(() => {
    const circle = document.getElementById(elementId);
    if (!circle) return;

    circle.classList.remove("hidden");

    const onMouseMove = (e: MouseEvent) => {
      circle.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

      const trail = document.createElement("div");
      trail.classList.add("circle-trail");

      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;

      document.body.appendChild(trail);

      setTimeout(() => {
        trail.remove();
      }, 500);
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [elementId]);
}
