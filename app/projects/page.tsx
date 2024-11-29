"use client";
import { useFollowMouse } from "@/hooks/useFollowMove";
import { projectInfo } from "@/mock/projectInfo";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function ProjectsPage() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [currentSlide, setCurrentSlide] = useState<number[]>([]);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [currentGroup, setCurrentGroup] = useState<number>(0);
  const projectsPerPage = 3; // 슬라이드당 보여줄 프로젝트 개수는 3개로 설정 완료!
  const totalGroups = Math.ceil(projectInfo.length / projectsPerPage);

  // 이미지 프리로딩 함수 구현 완료
  const preloadImages = (imageUrls: string[]) => {
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  };

  useEffect(() => {
    const pageElement = document.getElementById("project-page");

    if (pageElement) {
      pageElement.classList.add("page-slide-in");
    }

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500); // slide-in 애니메이션 이후

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      setShowMessage(true);
    }
  }, [isLoaded]);

  useFollowMouse("circle");

  useEffect(() => {
    setCurrentSlide(new Array(projectInfo.length).fill(0));
    projectInfo.forEach((project) => {
      preloadImages(project.images);
    });
  }, []);

  const handleIconClick = (url: string) => {
    window.open(url, "_blank");
  };

  const handleCardClick = (index: number) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(flippedCards.filter((cardIndex) => cardIndex !== index));
    } else {
      setFlippedCards([...flippedCards, index]);
    }
  };

  const handlePrevSlide = (index: number) => {
    setCurrentSlide((prevSlides) => {
      const newSlides = [...prevSlides];
      newSlides[index] =
        (newSlides[index] - 1 + projectInfo[index].images.length) %
        projectInfo[index].images.length;
      return newSlides;
    });
  };

  const handleNextSlide = (index: number) => {
    setCurrentSlide((prevSlides) => {
      const newSlides = [...prevSlides];
      newSlides[index] =
        (newSlides[index] + 1) % projectInfo[index].images.length;
      return newSlides;
    });
  };

  const handlePrevGroup = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setCurrentGroup((prevGroup) =>
      prevGroup > 0 ? prevGroup - 1 : totalGroups - 1
    );
  };

  const handleNextGroup = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setCurrentGroup((prevGroup) =>
      prevGroup < totalGroups - 1 ? prevGroup + 1 : 0
    );
  };

  return (
    <div
      id="project-page"
      className="w-[100vw] h-screen overflow-auto relative bg-black text-white p-10"
    >
      <div id="circle" className="circle"></div>
      <h1 className="text-4xl mb-10 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {isLoaded &&
          projectInfo
            .slice(
              currentGroup * projectsPerPage,
              (currentGroup + 1) * projectsPerPage
            )
            .map((project, localIndex) => {
              const projectIndex = currentGroup * projectsPerPage + localIndex;

              return (
                <div
                  key={project.projectName}
                  className={`bg-gray-800 p-5 rounded-lg shadow-lg project-card h-[600px] border-box cursor-pointer transform ${
                    flippedCards.includes(projectIndex) ? "flipped" : ""
                  }`}
                  onClick={() => handleCardClick(projectIndex)}
                >
                  <div className="card-front relative w-full h-full">
                    <h2 className="text-2xl text-center mb-4">
                      {project.projectName}
                    </h2>
                    <div className="text-sm text-center mb-4 w-full">
                      {project.summary}
                    </div>
                    <div className="text-sm text-center mb-6 w-full text-sky-200 font-bold">
                      📆 작업기간 : {project.period}
                    </div>
                    <div className="text-sm mb-6 w-full font-black">
                      🙋🏻 인원 : {project.members}명
                    </div>
                    <h3 className="text-xl mb-2">Tasks</h3>
                    <ul className="list-disc list-inside mb-4 min-h-[72px]">
                      {project.tasks.map((task, idx) => (
                        <li key={idx}>{task}</li>
                      ))}
                    </ul>
                    <h3 className="text-xl mb-2">Stacks</h3>
                    <ul className="list-disc list-inside h-auto">
                      {project.stacks.map((stack, idx) => (
                        <li key={idx}>{stack}</li>
                      ))}
                    </ul>
                    <div className="absolute bottom-2 right-5 h-auto px-2">
                      <FaGithub
                        className={`text-3xl cursor-pointer hover:scale-125 transform transition 0.2s`}
                        onClick={() => handleIconClick(project.githubUrl)}
                      />
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrevSlide(projectIndex);
                        }}
                        className="absolute left-0 text-white z-20"
                      >
                        <IoIosArrowBack size={24} />
                      </button>
                      <img
                        src={project.images[currentSlide[projectIndex]]}
                        alt="Project Image"
                        className="w-5/6 h-[450px] object-contain rounded-lg"
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNextSlide(projectIndex);
                        }}
                        className="absolute right-0 text-white z-20"
                      >
                        <IoIosArrowForward size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
      <div
        className={`w-full h-[240px] text-center flex justify-around items-center text-3xl transition-opacity duration-1000 ${
          showMessage ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="z-20">
          <button onClick={handlePrevGroup}>
            <IoIosArrowBack size={36} />
          </button>
        </div>
        Click the Card
        <div className="z-20">
          <button onClick={handleNextGroup}>
            <IoIosArrowForward size={36} />
          </button>
        </div>
      </div>
      <style jsx>{`
        .page-slide-in {
          animation: slideIn 1s forwards;
        }

        @keyframes slideIn {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .project-card {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.5s forwards;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .project-card.flipped .card-front {
          transform: rotateY(180deg);
        }
        .project-card.flipped .card-back {
          transform: rotateY(0deg);
        }
        .card-front,
        .card-back {
          backface-visibility: hidden;
          transition: transform 0.6s;
        }
        .card-back {
          transform: rotateY(180deg);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 10px;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
