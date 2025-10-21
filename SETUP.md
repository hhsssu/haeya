# 🚀 AI TodoList 프로젝트 설정 가이드

## 📋 사전 요구사항

- Node.js 18.0.0 이상
- npm 또는 yarn
- MongoDB (로컬 또는 클라우드)
- OpenAI API 키 (AI 기능 사용 시)

## 🛠 설치 및 실행

### 1. 의존성 설치

```bash
# 루트 디렉토리에서
npm run install:all
```

### 2. 환경 변수 설정

#### 서버 환경 변수 설정

```bash
# server 폴더에 .env 파일 생성
cd server
cp env.example .env
```

`.env` 파일을 편집하여 다음 값들을 설정하세요:

```env
# Server Configuration
PORT=3001
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/ai-todolist

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key-here

# OpenAI API
OPENAI_API_KEY=your-openai-api-key-here

# CORS
CORS_ORIGIN=http://localhost:5173

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### 3. MongoDB 설정

#### 로컬 MongoDB 설치 및 실행

```bash
# Windows (Chocolatey 사용)
choco install mongodb

# macOS (Homebrew 사용)
brew install mongodb-community
brew services start mongodb-community

# Ubuntu/Debian
sudo apt-get install mongodb
sudo systemctl start mongodb
```

#### MongoDB Atlas (클라우드) 사용

1. [MongoDB Atlas](https://www.mongodb.com/atlas)에서 계정 생성
2. 클러스터 생성
3. 데이터베이스 사용자 생성
4. 네트워크 액세스 설정
5. 연결 문자열을 `.env` 파일의 `MONGODB_URI`에 설정

### 4. OpenAI API 키 설정

1. [OpenAI Platform](https://platform.openai.com/)에서 계정 생성
2. API 키 생성
3. `.env` 파일의 `OPENAI_API_KEY`에 설정

### 5. 프로젝트 실행

#### 방법 1: 자동 실행 스크립트 사용

```bash
# Windows
start.bat

# macOS/Linux
./start.sh
```

#### 방법 2: 수동 실행

```bash
# 터미널 1: 서버 실행
cd server
npm run dev

# 터미널 2: 클라이언트 실행
cd client
npm run dev
```

## 🌐 접속 정보

- **프론트엔드**: http://localhost:5173
- **백엔드 API**: http://localhost:3001
- **API 문서**: http://localhost:3001/api/health

## 📁 프로젝트 구조

```
ai-todolist/
├── client/                 # React 프론트엔드
│   ├── src/
│   │   ├── components/     # UI 컴포넌트
│   │   ├── hooks/         # 커스텀 훅
│   │   ├── store/         # 상태 관리 (Zustand)
│   │   ├── types/         # TypeScript 타입
│   │   ├── utils/         # 유틸리티 함수
│   │   └── pages/         # 페이지 컴포넌트
├── server/                # Express 백엔드
│   ├── src/
│   │   ├── controllers/   # API 컨트롤러
│   │   ├── models/        # MongoDB 모델
│   │   ├── routes/        # API 라우트
│   │   ├── services/      # 비즈니스 로직
│   │   └── utils/         # 유틸리티 함수
└── docs/                  # 문서
```

## 🔧 주요 기능

### 기본 기능

- ✅ Todo CRUD (생성, 읽기, 수정, 삭제)
- 📝 완료 상태 토글
- 🏷️ 카테고리별 분류
- 📅 마감일 설정
- 🔍 검색 및 필터링
- 📊 통계 및 분석

### AI 기능

- 🤖 우선순위 자동 분석
- 🧠 스마트 카테고리 제안
- ⏰ 예상 소요시간 추정
- 💡 생산성 인사이트 생성
- 📈 개인화된 개선 제안

## 🐛 문제 해결

### 일반적인 문제들

#### 1. MongoDB 연결 실패

```bash
# MongoDB 서비스 상태 확인
# Windows
net start MongoDB

# macOS
brew services list | grep mongodb

# Ubuntu
sudo systemctl status mongodb
```

#### 2. 포트 충돌

```bash
# 포트 사용 중인 프로세스 확인
# Windows
netstat -ano | findstr :3001
netstat -ano | findstr :5173

# macOS/Linux
lsof -i :3001
lsof -i :5173
```

#### 3. 의존성 설치 실패

```bash
# 캐시 정리 후 재설치
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

#### 4. AI 기능이 작동하지 않음

- OpenAI API 키가 올바르게 설정되었는지 확인
- API 키에 충분한 크레딧이 있는지 확인
- 네트워크 연결 상태 확인

## 📚 추가 리소스

- [React 공식 문서](https://react.dev/)
- [TypeScript 공식 문서](https://www.typescriptlang.org/)
- [MongoDB 공식 문서](https://docs.mongodb.com/)
- [OpenAI API 문서](https://platform.openai.com/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 지원

문제가 발생하거나 질문이 있으시면 이슈를 생성해주세요.
