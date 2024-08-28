"use client";

import Header from "@/components/Header";
import { useFollowMouse } from "@/hooks/useFollowMove";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function MainPage() {
  const containerRef = useRef<HTMLDivElement>(null);
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

  useFollowMouse("circle"); //커서를 따라다니는 동그라미를 커스텀 훅으로 분리
  //다른 페이지에서의 재사용성 확보

  useEffect(() => {
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach((element) => {
      element.classList.add("fade-in-animation");
    });
  });

  const BACKGROUND_STAR_COLORS = ["#8fa8f6", "#b4ffb8", "#ffdd8f", "#ff8fba"];

  useEffect(() => {
    // Three.js 장면(scene) 설정
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.zIndex = "-1";

    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    // 별들 생성 (Starfield)
    const starGeometry = new THREE.BufferGeometry();

    const starVertices = [];
    const starColors = [];
    const color = new THREE.Color();

    for (let i = 0; i < 8000; i++) {
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;

      starVertices.push(x, y, z);

      const starColor =
        BACKGROUND_STAR_COLORS[
          Math.floor(Math.random() * BACKGROUND_STAR_COLORS.length)
        ];
      color.set(starColor);
      starColors.push(color.r, color.g, color.b);
    }

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    starGeometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(starColors, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      vertexColors: true,
      size: 0.8,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    camera.position.z = 700;

    const animate = function () {
      requestAnimationFrame(animate);

      stars.rotation.x += 0.0005;
      stars.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    // 컴포넌트가 해제될 때 리소스 정리
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen bg-black relative flex flex-col text-white fade-in envelope"
    >
      <Header handleNavClick={handleNavClick} />
      <div className="flex justify-center items-center flex-grow relative z-10">
        <div className="flex justify-center items-center w-full h-[250px]">
          <span className="text-2xl">정준영의 포트폴리오</span>
        </div>
      </div>
      <div id="circle" className="circle"></div>
    </div>
  );
}
