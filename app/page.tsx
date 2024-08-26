"use client";

import Header from "@/components/Header";
import { useFollowMouse } from "@/hooks/useFollowMove";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MainPage() {
  const router = useRouter();
  const handleNavClick = (section: string) => {
    const envelope = document.querySelector(".envelope") as HTMLElement | null;
    if (envelope) {
      envelope.classList.add("open-envelope");
    }

    setTimeout(() => {
      router.push(`/${section}`);
    }, 500); // 애니메이션 지속 시간과 일치
  };

  useFollowMouse("circle");

  useEffect(() => {
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach((element) => {
      element.classList.add("fade-in-animation");
    });
  });

  return (
    <div className="w-full h-screen bg-black relative flex flex-col text-white fade-in envelope">
      <div className="absolute top-0 left-0 w-full h-full stars"></div>
      <Header handleNavClick={handleNavClick} />
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
