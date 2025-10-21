@echo off
echo AI TodoList 프로젝트를 시작합니다...
echo.

echo 1. 의존성 설치 중...
call npm run install:all

echo.
echo 2. 서버 시작 중...
start "AI TodoList Server" cmd /k "cd server && npm run dev"

echo.
echo 3. 클라이언트 시작 중...
start "AI TodoList Client" cmd /k "cd client && npm run dev"

echo.
echo 서버와 클라이언트가 시작되었습니다!
echo 서버: http://localhost:3001
echo 클라이언트: http://localhost:5173
echo.
pause
