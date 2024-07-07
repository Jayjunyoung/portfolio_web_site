"use client";

import { useEffect } from "react";
import {
  introductionTexts,
  experienceInfo,
  stacksInfo,
} from "@/mock/aboutInfo";

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
  }, []);

  useEffect(() => {
    const circle = document.getElementById("circle");

    const timer = setTimeout(() => {
      if (circle) {
        circle.classList.remove("hidden");
        const onMouseMove = (e: MouseEvent) => {
          circle.style.left = `${e.clientX}px`;
          circle.style.top = `${e.clientY + window.scrollY}px`;
        };
        document.addEventListener("mousemove", onMouseMove);

        const highlightText = document.getElementById("highlight-text");
        if (highlightText) {
          highlightText.addEventListener("mouseenter", () => {
            highlightText.classList.add("highlight");
          });
          highlightText.addEventListener("mouseleave", () => {
            highlightText.classList.remove("highlight");
          });
        }

        return () => {
          document.removeEventListener("mousemove", onMouseMove);
        };
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="about-page"
      className="w-[100vw] h-screen bg-black text-white overflow-scroll"
    >
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div id="circle" className="hidden circle"></div>
        <h1 id="intro-text" className="text-4xl mb-2">
          About Me💻
        </h1>
        <div
          id="profile"
          className="hidden flex-row justify-center w-[880px] h-[587px]"
        >
          <img
            src="/profile.jpg"
            alt="Profile Picture"
            className="w-2/4 h-full rounded-lg shadow-lg"
          />
          <div className="flex flex-col w-2/4 h-full justify-center items-start ml-14 text-xl antialiased">
            <span className="h-auto text-left mt-5">
              안녕하세요, 저는{" "}
              <span id="highlight-text" className="highlight-text relative">
                배움이 취미인
                <img
                  src="/arrow.png"
                  alt="Arrow"
                  className="absolute left-[45px] top-[-25px] w-[20px] transform rotate-45"
                />
              </span>{" "}
              프론트엔드 개발자 정준영 입니다.
            </span>
            {introductionTexts.slice(1).map((text, index) => (
              <span key={index} className="h-auto text-left mt-5 intro-text">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-auto bg-gray-800 text-white py-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl">Tech Stack👨‍🔧</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10">
          {stacksInfo.map((info, index) => (
            <div
              key={index}
              className="bg-gray-700 p-5 rounded-lg shadow-lg w-auto"
            >
              <h3 className="text-2xl text-center mb-4 font-bold">
                {info.category}
              </h3>
              <ul className="list-disc list-inside">
                {info.stacks.map((stack, idx) => (
                  <li key={idx} className="text-lg">
                    {stack}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-auto bg-gray-700 text-white py-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl">Experience🎈</h2>
        </div>
        <hr className="w-[80%] my-10 mx-auto border-gray-600" />
        <div className="flex justify-center items-center w-full h-auto px-10 gap-10">
          {experienceInfo.map((experience, index) => (
            <div key={index} className="mb-6 max-w-[450px] min-h-[180px]">
              <h3 className="text-2xl font-bold">{experience.title}</h3>
              <span className="text-gray-400">{experience.period}</span>
              <ul className="list-disc list-inside mt-2">
                {experience.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-auto bg-gray-900 text-white py-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl">Education🎓</h2>
        </div>
      </div>
      <div className="w-full h-auto bg-gray-400 text-white py-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl">Certificate🪪</h2>
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

        .highlight {
          animation: highlight 1s forwards;
        }

        @keyframes highlight {
          0% {
            background-color: transparent;
            background: linear-gradient(
              120deg,
              transparent 0%,
              transparent 50%,
              skyblue 50%,
              skyblue 100%
            );
            background-size: 200% 100%;
            background-position: 100%;
          }
          100% {
            background-color: skyblue;
            background-size: 200% 100%;
            background-position: 0%;
            color: black;
            font-weight: bold;
            padding: 2px;
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
