"use client";

import Header from "@/components/Header";
import { useEffect } from "react";

export default function MainPage() {
  useEffect(() => {
    const circle = document.getElementById("circle");

    if (circle) {
      const onMouseMove = (e: { clientX: number; clientY: number }) => {
        circle.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      };
      document.addEventListener("mousemove", onMouseMove);

      return () => {
        document.removeEventListener("mousemove", onMouseMove);
      };
    }
  }, []);

  useEffect(() => {
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach((element) => {
      element.classList.add("fade-in-animation");
    });
  }, []);

  return (
    <div className="w-full h-screen bg-black relative flex flex-col text-white fade-in">
      <div className="absolute top-0 left-0 w-full h-full stars"></div>
      <Header />
      <div className="flex justify-center items-center flex-grow relative z-10">
        <div className="flex justify-center items-center w-full h-[250px]">
          <span className="text-2xl">정준영의 포트폴리오</span>
        </div>
      </div>
      <div id="circle" className="circle"></div>
      <div className="absolute top-0 left-0 w-full h-full stars-flipped"></div>
    </div>
  );
}
