"use client";

import { useFollowMouse } from "@/hooks/useFollowMove";
import { useEffect, useState } from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { TypeAnimation } from "react-type-animation";

export default function ContactPage() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
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

  const [readyToType, setReadyToType] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReadyToType(true);
    }, 1000);
  }, []);

  useFollowMouse("circle"); // useEffect 공식문서 읽고 커스텀 훅 적용

  const handleIconClick = (url: string) => {
    window.open(url, "_blank");
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000); // 3초 후에 팝업 사라짐
    });
  };

  return (
    <div className="w-[100vw] h-screen overflow-y-scroll no-scrollbar relative">
      <div id="circle" className="circle"></div>
      <div
        id="contact-page"
        className="w-full h-[100vh] flex justify-center items-center bg-black text-white"
      >
        <div className="flex flex-col justify-center items-center text-center">
          <h1 id="contact-title" className="hidden text-4xl mb-10">
            {readyToType ? (
              <TypeAnimation
                sequence={["Contact", 2000]}
                speed={30}
                cursor={true}
                repeat={0}
              />
            ) : null}
          </h1>
          <div className="icons-container">
            <div className="icon-wrapper">
              <FaGithub
                className="icon w-full h-full"
                onClick={() =>
                  handleIconClick("https://github.com/jayjunyoung")
                }
              />
              <span className="icon-text">GitHub</span>
            </div>
            <div className="icon-wrapper">
              <img
                src="https://t1.daumcdn.net/cfile/tistory/9935084A5B9541D014"
                className="icon w-full h-full"
                onClick={() =>
                  handleIconClick("https://no2jfamily.tistory.com/")
                }
              />
              <span className="icon-text">Tistory</span>
            </div>
            <div className="icon-wrapper">
              <FaEnvelope
                className="icon w-full h-full"
                onClick={() => copyToClipboard("no2jfamily@gmail.com")}
              />
              <span className="icon-text">Email</span>
            </div>
            <div className="icon-wrapper">
              <img
                src="./skill-icons_instagram.png"
                className="icon w-full h-full"
                onClick={() =>
                  handleIconClick("https://instagram.com/junzero.e")
                }
              />
              <span className="icon-text">Instagram</span>
            </div>
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
      {showPopup && (
        <div
          role="alert"
          className="fixed left-10 bottom-10 alert alert-success shadow-lg bg-green-500 text-white z-20 rounded-md p-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Email address copied to clipboard</span>
        </div>
      )}
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

        .icon-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 85%;
          height: 85%;
          transition: transform 0.3s;
          cursor: pointer;
        }

        .icon-wrapper:hover .icon {
          transform: scale(1.25);
        }

        .icon-wrapper:hover .icon-text {
          opacity: 1;
        }

        .icon {
          font-size: 50px;
        }

        .icon-text {
          opacity: 0;
          transition: opacity 0.3s;
          margin-top: 25px;
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
