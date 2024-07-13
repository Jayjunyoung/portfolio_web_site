interface projectInfoProps {
  projectName: string;
  summary: string;
  members: number;
  tasks: string[];
  stacks: string[];
  githubUrl: string;
  images: string[];
  period: string;
}

export const projectInfo: Array<projectInfoProps> = [
  {
    projectName: "GitLio",
    summary: "ChatGPT를 이용한 개발자 포트폴리오 호스팅 서비스",
    members: 4,
    tasks: [
      "레이아웃 옵션 제공 기능 구현",
      "Introduction, Contact Section 퍼블리싱",
      "포트폴리오 미리보기 기능 구현",
    ],
    stacks: [
      "Next.js",
      "React.js",
      "tailwind.css",
      "Javascript",
      "Typescript",
      "zustand",
      "daisy-ui",
    ],
    images: ["/GitLio1.png", "/GitLio2.png"],
    githubUrl: "https://github.com/TU-GitLio/frontend",
    period: "2023.09.02 - 2024.06.30",
  },
  {
    projectName: "GDSC TUK Notion",
    summary: "Next.js를 활용한 GDSC TUK만의 Notion 개발 프로젝트",
    members: 4,
    tasks: ["캘린더 제작", "캘린더에 일정 작성/삭제/수정 기능 구현"],
    stacks: [
      "Next.js",
      "React.js",
      "tailwind.css",
      "Javascript",
      "Typescript",
      "zustand",
    ],
    images: ["/tukNotion1.png", "/tukNotion2.png"],
    githubUrl:
      "https://github.com/Google-Developer-Student-Clubs-TUK/2024-Next.js-project-Daum",
    period: "2023.12.18 - 2024.02.20",
  },
  {
    projectName: "Our_Trip_Route",
    summary: "Open API를 활용한 나만의 여행경로 작성하는 프로젝트",
    members: 1,
    tasks: [
      "GoogleMap APi 활용",
      "한국국문관광정보 API 활용",
      "사용자의 여행정보 작성 기능 구현",
    ],
    stacks: [
      "React.js",
      "firebase",
      "Open API",
      "Typescript",
      "Javascript",
      "tailwind.css",
      "zustand",
      "mui",
    ],
    images: ["tripRoute1.png", "tripRoute2.png", "tripRoute3.png"],
    githubUrl: "https://github.com/Jayjunyoung/Our_Trip_Route",
    period: "2024.04.02 - 2024.06.30",
  },
];
