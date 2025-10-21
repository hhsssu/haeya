import React, { useState } from "react";
import Calendar from "../components/Calendar";
import ScheduleSection from "../components/ScheduleSection";
import TodoSection from "../components/TodoSection";

const HomePage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [viewMode, setViewMode] = useState<"both" | "schedule" | "todo">(
    "both"
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-4 py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">☀</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">HAEYA</h1>
          </div>
          <p className="text-sm text-gray-600 mt-1">홍길동의</p>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <div className="flex">
        {/* 좌측 캘린더 */}
        <div className="w-1/3 p-4">
          <Calendar
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
          />
        </div>

        {/* 우측 상세 정보 */}
        <div className="w-2/3 p-4">
          <div className="bg-white rounded-lg shadow-sm h-full">
            {/* 뷰 토글 버튼 */}
            <div className="p-4 border-b">
              <button
                onClick={() => {
                  if (viewMode === "both") setViewMode("schedule");
                  else if (viewMode === "schedule") setViewMode("todo");
                  else setViewMode("both");
                }}
                className="px-4 py-2 bg-orange-100 text-orange-700 rounded-md text-sm font-medium hover:bg-orange-200 transition-colors"
              >
                {viewMode === "both" && "[함께 보기]"}
                {viewMode === "schedule" && "[일정만 보기]"}
                {viewMode === "todo" && "[할 일만 보기]"}
              </button>
            </div>

            {/* 일정 섹션 */}
            {(viewMode === "both" || viewMode === "schedule") && (
              <ScheduleSection selectedDate={selectedDate} />
            )}

            {/* 할 일 섹션 */}
            {(viewMode === "both" || viewMode === "todo") && (
              <TodoSection selectedDate={selectedDate} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

