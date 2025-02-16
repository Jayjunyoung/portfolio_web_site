"use client";

import Typewriter from "@/app/_components/Typewriter";
import Header from "@/components/Header";
import { useFollowMouse } from "@/hooks/useFollowMove";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function MainPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

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

  // 별 색상 배열
  const BACKGROUND_STAR_COLORS = ["#8fa8f6", "#b4ffb8", "#ffdd8f", "#ff8fba"];

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.FogExp2(0x000000, 0.0005);
    sceneRef.current = scene; // sceneRef에 저장

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 700;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.zIndex = "-1";
    rendererRef.current = renderer;

    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };
    window.addEventListener("resize", handleResize);

    // --- 헬퍼 함수: 별 필드 생성 ---
    function createStarField(count: number, spread: number, size: number) {
      const geometry = new THREE.BufferGeometry();
      const vertices: number[] = [];
      const colors: number[] = [];
      const color = new THREE.Color();

      for (let i = 0; i < count; i++) {
        const x = Math.random() * spread - spread / 2;
        const y = Math.random() * spread - spread / 2;
        const z = Math.random() * spread - spread / 2;
        vertices.push(x, y, z);

        const starColor =
          BACKGROUND_STAR_COLORS[
            Math.floor(Math.random() * BACKGROUND_STAR_COLORS.length)
          ];
        color.set(starColor);
        colors.push(color.r, color.g, color.b);
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
      );
      geometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(colors, 3)
      );

      const material = new THREE.PointsMaterial({
        vertexColors: true,
        size: size,
      });
      return new THREE.Points(geometry, material);
    }

    // --- 가까운 별과 먼 별 필드 생성 ---
    const nearStars = createStarField(4000, 1000, 1.2);
    const farStars = createStarField(6000, 2000, 0.6);

    scene.add(farStars);
    scene.add(nearStars);

    const clock = new THREE.Clock();

    // --- 애니메이션 루프 ---
    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();

      nearStars.rotation.x += 0.001;
      nearStars.rotation.y += 0.001;

      farStars.rotation.x += 0.0003;
      farStars.rotation.y += 0.0003;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  const triggerParticleBurst = () => {
    if (!sceneRef.current) return;

    const count = 100;
    const burstGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    const aspect = window.innerWidth / window.innerHeight;

    for (let i = 0; i < count; i++) {
      const r = Math.random() * 50;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.random() * Math.PI;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta) * aspect;
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    burstGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const burstMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 2,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
    });

    const burst = new THREE.Points(burstGeometry, burstMaterial);

    burst.position.set(0, 0, 0);

    sceneRef.current.add(burst);

    setTimeout(() => {
      if (sceneRef.current) {
        sceneRef.current.remove(burst);
        burstGeometry.dispose();
        burstMaterial.dispose();
      }
    }, 500);
  };

  const handleCharacterTyped = () => {
    triggerParticleBurst();
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full bg-black relative flex flex-col text-white fade-in envelope gap-4"
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
