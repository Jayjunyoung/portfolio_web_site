"use client";

import { useEffect } from "react";
import { FaGithub, FaBloggerB, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  useEffect(() => {
    const pageElement = document.getElementById("contact-page");
    const titleElement = document.getElementById("contact-title");
    const iconsContainer = document.querySelector(".icons-container");

    if (pageElement) {
      pageElement.classList.add("page-slide-in");
    }

    const timer1 = setTimeout(() => {
      if (titleElement) {
        titleElement.classList.remove("hidden");
        titleElement.classList.add("text-move-up");
      }
    }, 1000); // 페이지 슬라이드 이후

    const timer2 = setTimeout(() => {
      if (iconsContainer) {
        iconsContainer.classList.add("icons-fade-in");
      }
    }, 2000); // Contact 텍스트 애니메이션 이후

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  });

  const handleIconClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-[100vw] h-screen overflow-auto">
      <div
        id="contact-page"
        className="w-full h-[100vh] flex justify-center items-center bg-black text-white"
      >
        <div className="flex flex-col justify-center items-center text-center">
          <h1 id="contact-title" className="hidden text-4xl mb-10">
            Contact
          </h1>
          <div className="icons-container">
            <FaGithub
              className="icon w-full h-full"
              onClick={() => handleIconClick("https://github.com/jayjunyoung")}
            />
            <img
              src="./simple-icons_tistory.png"
              className="icon w-full h-full"
              onClick={() => handleIconClick("https://no2jfamily.tistory.com/")}
            />
            <FaEnvelope className="icon w-full h-full" />
            <img
              src="./skill-icons_instagram.png"
              className="icon w-full h-full"
              onClick={() => handleIconClick("https://instagram.com/junzero.e")}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[300px] flex justify-center items-center bg-gray-800 text-white">
        <div className="text-center">
          <h2 className="text-3xl mb-4">Get in Touch</h2>
          <p>📞: 010-9085-7377</p>
          <p>✉️: no2jfamily@gmail.com</p>
        </div>
      </div>
      <style jsx>{`
        .page-slide-in {
          animation: slideIn 1s forwards;
        }

        @keyframes slideIn {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
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
            transform: translateY(-70px);
          }
        }

        .icons-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 30px;
          justify-items: center;
          align-items: center;
          width: 350px;
          height: 350px;
          opacity: 0;
          animation: fadeIn 1.5s forwards;
          animation-delay: 2s;
          animation: rotate 5s linear infinite;
        }

        .icons-fade-in {
          opacity: 1;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .icon {
          font-size: 50px;
          transition: transform 0.3s;
          cursor: pointer;
        }

        .icon:hover {
          transform: scale(1.25);
        }

        .icons-container:hover {
          animation-play-state: paused;
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
