"use client";

import { useFollowMouse } from "@/hooks/useFollowMove";
import {
  certificateInfo,
  educationInfo,
  experienceInfo,
  introductionTexts,
  stacksInfo,
} from "@/mock/aboutInfo";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
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
              안녕하세요,{" "}
              <span id="highlight-text" className="highlight-text relative">
                사용자 경험 개선에 집중하는
                <img
                  src="/arrow.png"
                  alt="Arrow"
                  className="absolute left-[55px] top-[-25px] w-[20px] transform rotate-45"
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

        .section {
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
        .section.show {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
