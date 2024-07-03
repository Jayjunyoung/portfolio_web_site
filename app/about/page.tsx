"use client";

import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    const pageElement = document.getElementById("about-page");
    if (pageElement) {
      pageElement.classList.add("page-fade-in");
    }
    const introText = document.getElementById("intro-text");
    const profile = document.getElementById("profile");

    const timer = setTimeout(() => {
      if (introText) {
        introText.classList.add("text-move-up");
      }
      if (profile) {
        profile.classList.remove("hidden");
        profile.classList.add("profile-fade-in");
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []); // 의존성 배열 추가

  const introductionTexts = [
    "안녕하세요, 저는 배움이 취미인 프론트엔드 개발자 정준영 입니다.",
    "하루에 개발한 내용과 알고리즘 문제 해결 과정을 블로그로 작성 중 입니다.",
    "프론트엔드 개발 직무를 목표로 공부하고 있습니다.",
    "하루에 해야 할 태스크를 일정관리 툴로 작성하여 계획적으로 완료하는 성격을 가지고 있습니다.",
  ];

  return (
    <div
      id="about-page"
      className="w-full h-screen flex flex-col justify-center items-center bg-black text-white overflow-scroll"
    >
      <h1 id="intro-text" className="text-4xl mb-2">
        About Me💻
      </h1>
      <div
        id="profile"
        className="hidden flex-row justify-center w-[880px] h-auto"
      >
        <img
          src="/profile.jpg"
          alt="Profile Picture"
          className="w-2/4 h-full"
        />
        <div className="flex flex-col w-2/4 h-full justify-center items-start ml-14 text-xl">
          {introductionTexts.map((text, index) => (
            <span key={index} className="h-auto text-left mt-5">
              {text}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        .page-fade-in {
          animation: pageFadeIn 1s forwards;
        }

        @keyframes pageFadeIn {
          0% {
            background-color: white;
          }
          100% {
            background-color: black;
            color: white;
          }
        }

        .text-move-up {
          animation: moveUp 1s forwards;
        }

        @keyframes moveUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50px);
          }
        }

        .profile-fade-in {
          opacity: 0;
          display: flex;
          animation: fadeIn 1.5s forwards;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
