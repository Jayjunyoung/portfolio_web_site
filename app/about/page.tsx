"use client";

import { useFollowMouse } from "@/hooks/useFollowMove";
import {
  certificateInfo,
  educationInfo,
  experienceInfo,
  introductionTexts,
  stacksInfo,
} from "@/mock/aboutInfo";
import { CoordsInfo } from "@/types/coords.types";
import { useEffect, useState } from "react";

export default function AboutPage() {
  //애니메이션 처리되는 스택 구별하기 위한 상태 값
  const [hoveredItem, setHoveredItem] = useState<{
    color: string;
    target: HTMLElement;
  } | null>(null);

  const firstText = introductionTexts[0];
  const highlightKeyword = "사용자 경험 개선에 집중하는";
  const [beforeHighlight, afterHighlight] = firstText.split(highlightKeyword);

  const [showArrow, setShowArrow] = useState<boolean>(false);
  const [cursorPosition, setCursorPosition] = useState<CoordsInfo>({
    x: 0,
    y: 0,
  });
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setCursorPosition({ x: clientX, y: clientY });

    // 특정 위치에 도달했을 때 화살표 표시
    if (clientY > window.innerHeight * 0.7) {
      setShowArrow(true);
      setIsFadingOut(false);
    } else if (showArrow) {
      // 위로 이동 시 fade-out
      setIsFadingOut(true);
      setTimeout(() => setShowArrow(false), 300); // fade-out 시간 후 상태 변경
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowArrow(false);
      setIsFadingOut(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showArrow]);

  const handleMouseEnter = (
    color: string,
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    const target = event.currentTarget;
    setHoveredItem({ color, target });

    // 애니메이션 적용 !
    target.style.setProperty("--wave-color", color);
    target.classList.add("animate-fill-bg");
  };

  const handleMouseLeave = () => {
    if (hoveredItem?.target) {
      const { target } = hoveredItem;
      target.classList.remove("animate-fill-bg");
    }
    setHoveredItem(null);
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((section) => {
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

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

  useFollowMouse("circle");

  useEffect(() => {
    const timer = setTimeout(() => {
      const highlightText = document.getElementById("highlight-text");
      if (highlightText) {
        highlightText.addEventListener("mouseenter", () => {
          highlightText.classList.add("highlight");
        });
        highlightText.addEventListener("mouseleave", () => {
          highlightText.classList.remove("highlight");
        });
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="about-page"
      className="w-[100vw] h-screen bg-black text-white overflow-y-scroll no-scrollbar"
    >
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div id="circle" className="hidden circle"></div>
        {showArrow && (
          <div
            className={`arrow-indicator ${
              isFadingOut ? "fade-out" : "fade-in"
            }`}
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
            }}
          >
            <div className="arrow relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </div>
          </div>
        )}
        <h1 id="intro-text" className="text-3xl sm:text-4xl mb-2">
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
              {beforeHighlight}
              <span className="highlight-text relative">
                {highlightKeyword}
                <img
                  src="/arrow.png"
                  alt="Arrow"
                  className="absolute left-[55px] top-[-25px] w-[20px] transform rotate-45"
                />
              </span>{" "}
              {afterHighlight}
            </span>
            {introductionTexts.slice(1).map((text, index) => (
              <span key={index} className="h-auto text-left mt-5 intro-text">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-auto bg-gray-800 text-white py-10 section">
        <div className="text-center mb-6">
          <h2 className="text-3xl">Tech Stack👨‍🔧</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10">
          {stacksInfo.map((info, index) => (
            <div
              key={index}
              className="bg-gray-700 p-5 rounded-lg shadow-lg w-auto"
            >
              <h3 className="text-2xl text-center mb-2 font-bold">
                {info.category}
              </h3>
              <hr className="w-full mb-3" />
              <ul className="grid grid-cols-2 gap-4">
                {info.stacks.map((stack, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-center bg-gray-600 text-white px-4 py-2 rounded-md shadow-md relative overflow-hidden transition-transform transform hover:scale-105"
                    onMouseEnter={(e) => handleMouseEnter("#4A5568", e)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {stack}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-auto bg-gray-700 text-white py-10 section">
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

      <div className="relative w-full h-[400px] py-10 section">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/tuk.png')",
          }}
        ></div>
        <div className="text-center mb-6">
          <h2 className="text-3xl">Education🎓</h2>
        </div>
        <div className="flex justify-center items-center w-full h-auto px-10 gap-10">
          {educationInfo.map((education, index) => (
            <div
              key={index}
              className="flex flex-col justify-center max-w-[650px] min-h-[180px]"
            >
              <h3 className="text-2xl font-bold">{education.institution}</h3>
              <span className="text-gray-400">{education.period}</span>
              <ul className="list-disc list-inside mt-2">
                {education.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-auto bg-gray-400 text-white py-10 section">
        <div className="text-center mb-6">
          <h2 className="text-3xl">Certificate🪪</h2>
        </div>
        <div className="flex flex-col items-center w-full h-auto px-10 gap-10">
          {certificateInfo.map((certificate, index) => (
            <div
              key={index}
              className="mb-6 min-w-[650px] min-h-[180px] bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl text-center font-bold mb-4">
                {certificate.title}
              </h3>
              <ul className="list-disc list-inside">
                {certificate.details.map((detail, idx) => (
                  <li key={idx} className="text-lg">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }
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

        .section {
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
        .section.show {
          opacity: 1;
        }

        .animate-fill-bg {
          position: relative;
          background: radial-gradient(
            circle,
            var(--wave-color) 0%,
            transparent 80%
          );
          background-size: 300% 300%;
          animation: fill-bg-expand 0.5s ease-out forwards;
        }

        @keyframes fill-bg-expand {
          0% {
            background-size: 0% 0%;
            opacity: 0.5;
          }
          100% {
            background-size: 100% 100%;
            opacity: 1;
          }
        }

        .arrow-indicator {
          position: fixed;
          z-index: 1000;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: white;
          font-size: 14px;
          opacity: 0;
        }

        .arrow svg {
          width: 150px;
          height: 150px;
          position: absolute;
          animation: bounce 1.5s infinite ease-in-out;
        }

        .fade-in {
          animation: ArrowfadeIn 0.3s forwards;
        }

        .fade-out {
          animation: ArrowfadeOut 0.3s forwards;
        }

        @keyframes ArrowfadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes ArrowfadeOut {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
      `}</style>
    </div>
  );
}
