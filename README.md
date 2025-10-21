# 🤖 AI TodoList 웹사이트

AI를 활용한 스마트 TodoList 웹 애플리케이션입니다.

## ✨ 주요 기능

### 기본 기능

- ✅ Todo 항목 생성, 수정, 삭제
- 📝 작업 완료 처리
- 🏷️ 카테고리별 분류
- 📅 마감일 설정

### AI 스마트 기능

- 🎯 작업 우선순위 자동 분석
- 🧠 스마트 카테고리 분류
- ⏰ 마감일 예측 및 알림
- 💡 개인화된 작업 제안
- 📊 생산성 분석 및 인사이트

## 🛠 기술 스택

- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express + TypeScript
- **Database**: MongoDB
- **AI**: OpenAI API
- **State Management**: Zustand
- **Build Tool**: Vite

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm run install:all
```

### 2. 환경 변수 설정

```bash
# server/.env 파일 생성
cp server/.env.example server/.env
```

### 3. 개발 서버 실행

```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:3001

## 📁 프로젝트 구조

```
ai-todolist/
├── client/                 # React 프론트엔드
│   ├── src/
│   │   ├── components/     # UI 컴포넌트
│   │   ├── hooks/         # 커스텀 훅
│   │   ├── store/         # 상태 관리
│   │   ├── types/         # TypeScript 타입
│   │   └── utils/         # 유틸리티 함수
├── server/                # Express 백엔드
│   ├── src/
│   │   ├── controllers/   # API 컨트롤러
│   │   ├── models/        # 데이터 모델
│   │   ├── routes/        # API 라우트
│   │   ├── services/      # 비즈니스 로직
│   │   └── utils/         # 유틸리티 함수
└── docs/                  # 문서
```

## 🔧 개발 가이드

### 코드 스타일

- 2칸 들여쓰기 사용
- 80자 줄 제한
- 명확한 변수/함수명 사용
- TypeScript 엄격 모드 적용

### 커밋 컨벤션

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅
refactor: 코드 리팩토링
test: 테스트 추가
chore: 빌드 설정 변경
```

## 📄 라이선스

MIT License
