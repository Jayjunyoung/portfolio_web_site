interface projectInfoProps {
  projectName: string;
  tasks: string[];
  stacks: string[];
}

export const projectInfo: Array<projectInfoProps> = [
  {
    projectName: "GitLio",
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
  },
  {
    projectName: "GDSC TUK Notion",
    tasks: ["캘린더 제작", "캘린더에 일정 작성/삭제/수정 기능 구현"],
    stacks: [
      "Next.js",
      "React.js",
      "tailwind.css",
      "Javascript",
      "Typescript",
      "zustand",
    ],
  },
  {
    projectName: "Our_Trip_Route",
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
  },
];
