export interface IntroductionInfo {
  introductionTexts: string[];
  stacksInfo: { category: string; stacks: string[] }[];
  experienceInfo: { title: string; period: string; details: string[] }[];
  educationInfo: { institution: string; period: string; details: string[] }[];
  certificateInfo: { title: string; details: string[] }[];
}

export const introductionTexts: IntroductionInfo["introductionTexts"] = [
  "안녕하세요, 저는 사용자 경험 개선에 집중하는 프론트엔드 개발자 정준영 입니다.",
  "프론트엔드 개발 내용과 알고리즘 문제 해결 과정을 블로그로 작성 중이고 현재 115+개 블로그를 작성했습니다.",
  "하루에 해야 할 태스크를 일정관리 툴로 작성하여 계획적으로 완료하는 성격을 가지고 있습니다.",
];

export const stacksInfo: IntroductionInfo["stacksInfo"] = [
  {
    category: "FrontEnd",
    stacks: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind.css",
      "Styled-component",
      "Zustand",
      "redux",
      "recoil",
      "React-Query",
      "Three.js",
    ],
  },
  {
    category: "BackEnd & DB",
    stacks: ["Convex", "Workbench", "MySQL", "Prisma"],
  },
  {
    category: "Collaboration",
    stacks: ["Notion", "Figma", "GitHub", "Slack", "ZEP", "Discord", "Trello"],
  },
  {
    category: "Deployment",
    stacks: ["Vercel"],
  },
];

export const experienceInfo: IntroductionInfo["experienceInfo"] = [
  {
    title: "UMC TUK 6기",
    period: "2024.03.23 ~ 2024.08.31",
    details: ["IT 연합 동아리", "한국공학대학교 WEB 파트 스터디장"],
  },
  {
    title: "GDSC TUK 1기",
    period: "2022.10.07 ~ 2023.08.31",
    details: [
      "Google Developer Student Clubs 동아리",
      "FrontEnd 담당으로 1개의 프로젝트 진행",
      "React.js, TypeScript 등 스터디에 참여하여 프론트엔드 개발 학습",
    ],
  },
  {
    title: "CBU TUK 20기",
    period: "2024.03.02 ~ 진행 중",
    details: [
      "교내 코딩/개발 동아리",
      "Open API를 이용하는 React 스터디 참여 - 개인 프로젝트 작업 중",
      "4학년 1학기 기간 동안 프로젝트 진행",
    ],
  },
  {
    title: "스페인 해외현장실습",
    period: "2023.06.30 ~ 2023.08.27",
    details: [
      "스페인 패션/마케팅 기업 Miquel Suay 해외현장실습",
      "메인화면 퍼블리싱 담당",
      "태블릿, 모바일 디바이스에 따른 반응형 디자인 구현",
      "Trello, Figma를 활용한 협업 및 커뮤니케이션 경험 有",
    ],
  },
];

export const educationInfo: IntroductionInfo["educationInfo"] = [
  {
    institution: "한국공학대학교",
    period: "2018.03 ~ 2025.02",
    details: [
      "IT경영학과 전공",
      "컴퓨터공학과 자료구조 전공 과목 수강 경험 有 → Mentoring 담당",
      "부스트코스 CS50 강의 수강(CS 지식 학습 응용)",
    ],
  },
];

export const certificateInfo: IntroductionInfo["certificateInfo"] = [
  {
    title: "자격증",
    details: [
      "정보처리산업기사",
      "컴퓨터활용능력 1급",
      "한국사능력검정시험 1급",
      "정보처리기사",
      "OPIc IM2",
    ],
  },
];
