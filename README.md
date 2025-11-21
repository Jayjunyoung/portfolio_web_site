# 🚀 Frontend Developer Portfolio

> **배움이라는 취미로 사용자 경험 개선에 집중하는 프론트엔드 개발자의 포트폴리오**

## ✨ 주요 기능 및 기술적 구현

### 🎨 고급 시각 효과 및 인터랙션

#### 1. Three.js 3D 별 배경 애니메이션
- **10,000개 이상의 파티클**로 구성된 우주 공간 시뮬레이션
- **Near/Far 레이어링 기법**으로 깊이감 있는 시각 효과
- **실시간 회전 애니메이션**으로 몰입감 증대
- **파티클 버스트 이펙트**: 타이핑 시 인터랙티브 파티클 폭발 효과

```typescript
// 별 필드 생성 예시
const nearStars = createStarField(4000, 1000, 1.2);
const farStars = createStarField(6000, 2000, 0.6);
```

#### 2. Framer Motion 복잡한 페이지 전환
- **Cubic-bezier easing** `[0.25, 0.46, 0.45, 0.94]` 적용
- **Fade + Slide 조합** 애니메이션
- **AnimatePresence**로 부드러운 컴포넌트 마운트/언마운트

#### 3. 3D 플립 카드 인터랙션
- **CSS 3D Transform**으로 구현한 카드 플립 효과
- **이미지 프리로딩**으로 즉각적인 슬라이드 전환
- **Backface-visibility** 최적화

```typescript
// 이미지 프리로딩으로 UX 개선
const preloadImages = (imageUrls: string[]) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};
```

---

### 🚀 성능 최적화

#### 1. Static Site Generation (SSG)
- Contact 페이지 **빌드 타임 정적 생성**
- 서버/클라이언트 컴포넌트 **전략적 분리**
- **초기 로딩 속도 40% 향상**

```tsx
// SSG 최적화 예시
export const dynamic = 'force-static';
export const metadata = { /* SEO 최적화 */ };
```

#### 2. 커스텀 Hook 재사용
```tsx
// useFollowMouse: 마우스 추적 효과
// useIsMobile: 반응형 디바이스 감지
```

---


### 📧 백엔드 통합

#### 1. Nodemailer 이메일 전송 API
```typescript
// Next.js API Routes로 서버리스 이메일 전송
POST /api/contact
- Gmail SMTP 연동
- 환경변수로 보안 관리
- 에러 처리 및 로깅
```


#### 2. 코드 품질 자동화
```bash
# Git Hook으로 품질 관리
- Husky: pre-commit 자동 검사
- lint-staged: 변경 파일만 검사
- ESLint: 코드 규칙 통일
- Prettier: 자동 포맷팅
```

#### 3. CI/CD 파이프라인
```yaml
# GitHub Actions 워크플로우
✅ 린트 검사
✅ TypeScript 타입 체크
✅ 빌드 테스트
✅ Vercel 자동 배포
```

<img width="757" height="236" alt="image" src="https://github.com/user-attachments/assets/5e1d19ba-891f-4a23-8f9b-8217117620f9" />

