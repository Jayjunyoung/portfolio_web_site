"use client";

import { useFollowMouse } from "@/hooks/useFollowMove";
import useIsMobile from "@/hooks/useIsMobile";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { TypeAnimation } from "react-type-animation";
import ContactForm from "./_components/ContactForm";
import IconWrapper from "./_components/IconWrapper";

export default function ContactPage() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [isOneColumn, setIsOneColumn] = useState<boolean>(true);

  const icons = [
    {
      key: "github",
      component: <FaGithub className="icon w-24 h-24" />,
      action: () => handleIconClick("https://github.com/jayjunyoung"),
      label: "GitHub",
    },
    {
      key: "tistory",
      component: (
        <img
          src="https://t1.daumcdn.net/cfile/tistory/9935084A5B9541D014"
          className="icon w-24 h-24"
          alt="Tistory"
        />
      ),
      action: () => handleIconClick("https://no2jfamily.tistory.com/"),
      label: "Tistory",
    },
    {
      key: "email",
      component: <FaEnvelope className="icon w-24 h-24" />,
      action: () => copyToClipboard("no2jfamily@gmail.com"),
      label: "Email",
    },
    {
      key: "instagram",
      component: (
        <img
          src="./skill-icons_instagram.png"
          className="icon w-24 h-24"
          alt="Instagram"
        />
      ),
      action: () => handleIconClick("https://instagram.com/junzero.e"),
      label: "Instagram",
    },
  ];

  const isMobile = useIsMobile();

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
    }, 1000);

    const timer2 = setTimeout(() => {
      if (iconsContainer) {
        iconsContainer.classList.add("icons-fade-in");
      }
    }, 2000);

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

  useFollowMouse("circle");

  const handleIconClick = (url: string) => {
    window.open(url, "_blank");
  };

  const copyToClipboard = (text: string) => {
    // 클립보드 복사 후 팝업 노출
    navigator.clipboard.writeText(text).then(() => {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    });

    if (isMobile) {
      // 모바일: one-column 레이아웃 유지 → 아이콘 영역이 사라지고 폼이 중앙에 등장
      setShowForm(true);
      setIsOneColumn(true);
    } else {
      // 데스크톱: 기존 2열 레이아웃
      setIsOneColumn(false);
      setShowForm(true);
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setIsOneColumn(true);
    setReadyToType(false);
    setTimeout(() => {
      setReadyToType(true);
    }, 100);
  };

  const handleExitComplete = () => {
    setIsOneColumn(true);
  };

  const containerClass = isOneColumn ? "one-column" : "two-column";

  return (
    <div className="w-[100vw] h-screen overflow-y-scroll no-scrollbar relative">
      <div id="circle" className="circle"></div>
      <div
        id="contact-page"
        className="w-full h-[100vh] flex justify-center items-center bg-black text-white pt-[80px] pb-[40px] sm:pt-0 sm:pb-0"
      >
        {isMobile ? (
          // 모바일: AnimatePresence를 통해 아이콘 영역과 폼 영역이 번갈아 나타남.
          <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
            {showForm ? (
              // 폼 영역: 중앙에 부드럽게 나타남, 최대 너비를 줄여 모바일에 맞춤.
              <motion.div
                key="mobileForm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="w-full flex justify-center items-center"
              >
                <div className="rounded-md w-full h-full max-w-[300px] max-h-[400px] mx-auto box-border">
                  <ContactForm onClick={handleCloseForm} />
                </div>
              </motion.div>
            ) : (
              // 아이콘 영역: 4개의 아이콘을 세로로 배열하여 중앙에 표시
              <motion.div
                key="mobileIcons"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="w-full flex flex-col items-center"
              >
                <h1
                  id="contact-title"
                  className="text-3xl sm:text-4xl mb-10 text-center"
                >
                  {readyToType && (
                    <TypeAnimation
                      sequence={["Contact", 2000]}
                      speed={30}
                      cursor={true}
                      repeat={1}
                    />
                  )}
                </h1>
                <div className="icons-container">
                  {icons.map(({ key, component, action, label }) => (
                    <IconWrapper key={key}>
                      <div onClick={action}>{component}</div>
                      <span className="icon-text">{label}</span>
                    </IconWrapper>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ) : (
          // 데스크톱: 기존 2열 그리드 레이아웃 (왼쪽 아이콘, 오른쪽 폼)
          <div className={`grid-container ${containerClass}`}>
            <div className="left-column">
              <h1
                id="contact-title"
                className="hidden text-3xl sm:text-4xl mb-10 text-center"
              >
                {readyToType && (
                  <TypeAnimation
                    sequence={["Contact", 2000]}
                    speed={30}
                    cursor={true}
                    repeat={0}
                  />
                )}
              </h1>
              <div className="icons-container">
                {icons.map(({ key, component, action, label }) => (
                  <IconWrapper key={key}>
                    <div onClick={action}>{component}</div>
                    <span className="icon-text">{label}</span>
                  </IconWrapper>
                ))}
              </div>
            </div>
            <div className="right-column flex justify-center items-center">
              <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
                {showForm && (
                  <motion.div
                    key="desktopForm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  >
                    <ContactForm onClick={handleCloseForm} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>

      {/* 하단 푸터 영역 */}
      <div className="w-full h-[300px] flex justify-center items-center bg-gray-800 text-white">
        <div className="text-center">
          <h2 className="text-3xl mb-4">Get in Touch</h2>
          <p>📞: 010-9085-7377</p>
          <p>✉️: no2jfamily@gmail.com</p>
        </div>
      </div>

      {/* 복사 알림 팝업 */}
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
            transform: translateY(-30px);
          }
        }
        .grid-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
        }
        .one-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .one-column .left-column {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .one-column .right-column {
          display: none;
        }
        .two-column {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: start;
          gap: 5rem;
        }
        .left-column {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .right-column {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          min-height: 300px;
        }
        .icons-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 100px;
          justify-items: center;
          align-items: center;
          opacity: 0;
          animation: fadeIn 1.5s forwards;
          animation-delay: 2s;
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
        }
        .icon-text {
          opacity: 1;
          transition: opacity 0.3s;
          margin-top: 25px;
        }
      `}</style>
    </div>
  );
}
