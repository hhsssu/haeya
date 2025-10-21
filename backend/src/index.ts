import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// 환경 변수 로드
dotenv.config();

const app = express();
const PORT = process.env["PORT"] || 3001;

// 기본 미들웨어
app.use(cors());
app.use(express.json());

// 기본 라우트
app.get("/api/health", (_req, res) => {
  res.json({
    status: "OK",
    message: "서버가 정상적으로 실행 중입니다.",
    timestamp: new Date().toISOString(),
  });
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`🚀 서버가 포트 ${PORT}에서 실행 중입니다`);
  console.log(`🌐 API URL: http://localhost:${PORT}/api`);
});
