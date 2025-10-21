#!/bin/bash

echo "AI TodoList 프로젝트를 시작합니다..."
echo

echo "1. 의존성 설치 중..."
npm run install:all

echo
echo "2. 서버 시작 중..."
cd server && npm run dev &
SERVER_PID=$!

echo
echo "3. 클라이언트 시작 중..."
cd ../client && npm run dev &
CLIENT_PID=$!

echo
echo "서버와 클라이언트가 시작되었습니다!"
echo "서버: http://localhost:3001"
echo "클라이언트: http://localhost:5173"
echo
echo "종료하려면 Ctrl+C를 누르세요"

# 종료 시 모든 프로세스 정리
trap "kill $SERVER_PID $CLIENT_PID; exit" INT

# 프로세스들이 종료될 때까지 대기
wait
