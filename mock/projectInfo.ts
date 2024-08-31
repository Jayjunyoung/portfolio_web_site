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
      "포트폴리오 공유 기능 구현",
      "Favicon을 이용한 블로그 아이콘 렌더링",
    ],
    stacks: [
      "Next.js",
      "React.js",
      "Tailwind.css",
      "JavaScript",
      "TypeScript",
      "zustand",
      "daisy-ui",
    ],
    images: [
      "레이아웃 제공1.png",
      "레이아웃 제공2.png",
      "포트폴리오 미리보기.png",
      "포트폴리오 공유 페이지.png",
      "Favicon 적용.png",
    ],
    githubUrl: "https://github.com/TU-GitLio/frontend",
    period: "2023.09.02 - 2024.06.30",
  },
  {
    projectName: "GDSC TUK Notion",
    summary: "Next.js를 활용한 GDSC TUK만의 Notion 개발 프로젝트",
    members: 4,
    tasks: [
      "라이브러리를 활용해 캘린더 커스터마이징",
      "캘린더에 일정 작성/삭제/수정 기능 구현",
      "Convex와 통신하여 실시간 캘린더 일정 내용 저장",
    ],
    stacks: [
      "Next.js",
      "React.js",
      "Tailwind.css",
      "JavaScript",
      "TypeScript",
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
      "GoogleMap API, 한국국문관광정보 API 활용",
      "여행 장소 검색 시 Debounce 구현",
      "이미지 렌더링 과정에서 Skeleton 컴포넌트를 활용한 사용자 경험 개선",
    ],
    stacks: [
      "React.js",
      "Open API",
      "JavaScript",
      "TypeScript",
      "Tailwind.css",
      "zustand",
      "mui",
    ],
    images: ["/tripRoute1.png", "/tripRoute2.png", "/tripRoute3.png"],
    githubUrl: "https://github.com/Jayjunyoung/Our_Trip_Route",
    period: "2024.04.02 - 2024.06.30",
  },
  {
    projectName: "Babeduk",
    summary: "학생과 사장님을 위한 가게 할인 행사 조회 프로젝트",
    members: 12,
    tasks: [
      "할인 추가/삭제/조회 기능 구현",
      "Date-Picker를 활용한 디자인 커스터마이징",
      "커스텀 훅을 활용하여 할인 추가시에 활용되는 유효성 검사 로직 분리 및 재사용성 확보",
    ],
    stacks: [
      "React.js",
      "Styled-component",
      "JavaScript",
      "TypeScript",
      "zustand",
      "Date-Picker",
    ],
    images: [
      "/discountPage1.png",
      "/discountPage2.png",
      "/discountPage3.png",
      "/discountPage4.png",
      "/discountPage5.png",
    ],
    githubUrl: "https://github.com/UMC-6th-BAB/BAB-FE",
    period: "2024.07.13 - 2024.08.26",
  },
  {
    projectName: "포트폴리오 자기소개 사이트",
    summary: "자기소개 사이트",
    members: 1,
    tasks: [
      "Three.js를 활용해 메인화면 애니메이션 적용",
      "커서에 애니메이션 적용 및 커스텀 훅으로 분리하여 모든 페이지에서 사용 및 재 사용성 확보",
      "이미지 프리로딩을 활용하여 렌더링 성능 개선",
    ],
    stacks: [
      "Next.js",
      "React.js",
      "Tailwind.css",
      "JavaScript",
      "TypeScript",
      "Three.js",
      "daisy-ui",
    ],
    images: [
      "/메인 페이지.png",
      "/소개 페이지.png",
      "/프로젝트 페이지.png",
      "/연락 페이지.png",
    ],
    githubUrl: "https://github.com/Jayjunyoung/portfolio_web_site",
    period: "2024.07.02 - 2024.07.09",
  },
];
