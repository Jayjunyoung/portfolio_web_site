"use client";

import Typewriter from "@/app/_components/Typewriter";
import Header from "@/components/Header";
import { useFollowMouse } from "@/hooks/useFollowMove";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function MainPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const starMaterialRef = useRef<THREE.PointsMaterial | null>(null);
  const starFieldRef = useRef<THREE.Points | null>(null);
  const rippleScaleRef = useRef(1); // 리플(파동) 효과를 위한 스케일 값

  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleNavClick = (section: string) => {
    const envelope = document.querySelector(".envelope") as HTMLElement | null;
    if (envelope) {
      envelope.classList.add("open-envelope");
    }
    router.push(`/${section}`);
    setMenuOpen(false);
  };

  useFollowMouse("circle");

  useEffect(() => {
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach((element) => {
      element.classList.add("fade-in-animation");
    });
  }, []);

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
    starMaterialRef.current = starMaterial;

    const stars = new THREE.Points(starGeometry, starMaterial);
    starFieldRef.current = stars;
    scene.add(stars);

    camera.position.z = 700;

    const animate = function () {
      requestAnimationFrame(animate);

      // 별 회전
      stars.rotation.x += 0.0005;
      stars.rotation.y += 0.0005;

      rippleScaleRef.current = THREE.MathUtils.lerp(
        rippleScaleRef.current,
        1,
        0.05
      );
      if (starFieldRef.current) {
        starFieldRef.current.scale.set(
          rippleScaleRef.current,
          rippleScaleRef.current,
          rippleScaleRef.current
        );
      }

      renderer.render(scene, camera);
    };

    animate();

    // 컴포넌트 언마운트 시 Three.js DOM 제거
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  const handleCharacterTyped = () => {
    rippleScaleRef.current = Math.min(rippleScaleRef.current + 0.05, 1.1);
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-svh bg-black relative flex flex-col text-white fade-in envelope gap-4"
    >
      <Header
        handleNavClick={handleNavClick}
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
      />

      <div className="flex justify-center items-center flex-grow relative">
        <div className="flex justify-center items-center w-full h-[250px] px-4 sm:px-0">
          <Typewriter
            texts={[
              "배움이라는 취미로",
              "사용자 경험 개선에 집중하는 프론트엔드 개발자 정준영 입니다.",
            ]}
            typingSpeed={120}
            pauseDelay={1000}
            onType={handleCharacterTyped}
          />
        </div>
      </div>
      <div id="circle" className="circle"></div>
    </div>
  );
}
