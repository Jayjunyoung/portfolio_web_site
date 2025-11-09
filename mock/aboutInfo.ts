export interface IntroductionInfo {
  introductionTexts: string[];
  stacksInfo: { category: string; stacks: string[] }[];
  experienceInfo: { title: string; period: string; details: string[] }[];
  educationInfo: {
    institution: string;
    period: string;
    details: string[];
  }[];
  certificateInfo: { title: string; details: string[] }[];
}

export const introductionTexts: IntroductionInfo['introductionTexts'] = [
  '배움이라는 취미로 사용자 경험 개선에 집중하는 프론트엔드 엔지니어 정준영 입니다.',
  '개발자의 성장에 있어 기록의 힘은 강력하다고 믿기 때문에 프론트엔드 기술 개념 / 기술 적용 과정을 꾸준히 블로그에 기록 중이며 현재까지 125+개 블로그를 작성했습니다.',
  '프론트엔드 기술 공식문서와 도서를 정독하면서 습득한 기술들을 프로젝트에서 적극적으로 활용하는 습관을 보유하고 있습니다.',
];

export const stacksInfo: IntroductionInfo['stacksInfo'] = [
  {
    category: 'Frontend',
    stacks: [
      'React.js',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Tailwind.css',
      'Styled-component',
      'Zustand',
      'redux',
      'recoil',
      'TanStack Query',
      'Three.js',
    ],
  },
  {
    category: 'Backend & DB',
    stacks: ['Convex', 'Workbench', 'MySQL', 'Prisma'],
  },
  {
    category: 'Collaboration',
    stacks: ['Notion', 'Figma', 'GitHub', 'Slack', 'ZEP', 'Discord', 'Trello'],
  },
  {
    category: 'Deployment',
    stacks: ['Vercel', 'Github Actions'],
  },
];

export const experienceInfo: IntroductionInfo['experienceInfo'] = [
  {
    title: 'UMC TUK 6기',
    period: '2024.03.23 ~ 2024.08.31',
    details: ['IT 연합 동아리', '한국공학대학교 WEB 파트 스터디장'],
  },
  {
    title: 'GDSC TUK 1기',
    period: '2022.10.07 ~ 2023.08.31',
    details: [
      'Google Developer Student Clubs 동아리',
      'FrontEnd 담당으로 1개의 프로젝트 진행',
      'React.js, TypeScript 등 스터디에 참여하여 프론트엔드 개발 학습',
    ],
  },
  {
    title: 'CBU TUK 20기',
    period: '2024.03.02 ~ 진행 중',
    details: [
      '교내 코딩/개발 동아리',
      'Open API를 이용하는 React 스터디 참여 - 개인 프로젝트 작업 중',
      '4학년 1학기 기간 동안 프로젝트 진행',
    ],
  },
  {
    title: '스페인 해외현장실습',
    period: '2023.06.30 ~ 2023.08.27',
    details: [
      '스페인 패션/마케팅 기업 Miquel Suay 해외현장실습',
      '메인화면 퍼블리싱 담당',
      '태블릿, 모바일 디바이스에 따른 반응형 디자인 구현',
      'Trello, Figma를 활용한 협업 및 커뮤니케이션 경험 有',
    ],
  },
];

export const educationInfo: IntroductionInfo['educationInfo'] = [
  {
    institution: '한국공학대학교',
    period: '2018.03 ~ 2025.02',
    details: [
      '경영학부 IT경영전공 졸업',
      '컴퓨터공학과 자료구조 전공 과목 수강 경험 有 → 자료구조 Mentoring 담당',
      '부스트코스 CS50 강의 수강(CS 지식 학습 응용)',
      '학점 : 3.89 / 4.5',
      '전공 학점 : 3.97 / 4.5',
    ],
  },
];

export const certificateInfo: IntroductionInfo['certificateInfo'] = [
  {
    title: '자격증',
    details: [
      '정보처리기사',
      '정보처리산업기사',
      '컴퓨터활용능력 1급',
      '한국사능력검정시험 1급',
      'OPIc IM2',
    ],
  },
];
