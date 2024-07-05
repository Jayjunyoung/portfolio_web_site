"use client";
import { useEffect, useState } from "react";
import { projectInfo } from "@/mock/projectInfo";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    const circle = document.getElementById("circle");

    if (circle) {
      const onMouseMove = (e: MouseEvent) => {
        circle.style.left = `${e.clientX}px`;
        circle.style.top = `${e.clientY + window.scrollY}px`;
      };
      document.addEventListener("mousemove", onMouseMove);

      return () => {
        document.removeEventListener("mousemove", onMouseMove);
      };
    }
  }, []);

  const handleIconClick = (url: string) => {
    window.open(url, "_blank");
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
          projectInfo.map((project, index) => (
            <div
              key={project.projectName}
              className="bg-gray-800 p-5 rounded-lg shadow-lg project-card h-auto"
            >
              <h2 className="text-2xl text-center mb-4">
                {project.projectName}
              </h2>
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
              <div
                className="fixed bottom-8 right-5 h-[20px] px-2"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <FaGithub
                  className={`text-3xl cursor-pointer hover:scale-125 transform transition 0.2s`}
                  onClick={() =>
                    handleIconClick("https://github.com/jayjunyoung")
                  }
                />
              </div>
            </div>
          ))}
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
      `}</style>
    </div>
  );
}
