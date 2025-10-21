import React, { useState } from "react";
import { format, isSameDay } from "date-fns";
import { ko } from "date-fns/locale";
import { MoreHorizontal } from "lucide-react";
import KoreanLunarCalendar from "korean-lunar-calendar";

interface ScheduleSectionProps {
  selectedDate: Date;
}

const ScheduleSection: React.FC<ScheduleSectionProps> = ({ selectedDate }) => {
  const [showMoreMenu, setShowMoreMenu] = useState<string | null>(null);
  const today = new Date();
  const isToday = isSameDay(selectedDate, today);

  // 음력 날짜 계산
  const getLunarDate = (date: Date) => {
    try {
      const calendar = new KoreanLunarCalendar();
      calendar.setSolarDate(
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
      );
      const lunar = calendar.getLunarCalendar();
      return `${lunar.month}.${lunar.day}`;
    } catch (error) {
      return "음력 계산 오류";
    }
  };

  // 샘플 데이터
  const schedules = [
    {
      id: "1",
      title: "친구들과 등산",
      type: "D-DAY",
      memo: "오이 도시락 싸기, 팔토시 사기, 체력 좀 올리기",
    },
    {
      id: "2",
      title: "서류 제출 마감",
      type: "D-DAY",
      memo: "",
    },
    {
      id: "3",
      title: "1차 면접",
      type: "D-7",
      memo: "",
    },
    {
      id: "4",
      title: "집 사전 점검 가기",
      type: "D-19",
      memo: "실물 신분증 챙기기!!",
    },
  ];

  const handleMoreClick = (scheduleId: string) => {
    setShowMoreMenu(showMoreMenu === scheduleId ? null : scheduleId);
  };

  return (
    <div className="h-96 overflow-y-auto">
      <div className="p-4">
        {/* 날짜 정보 */}
        <div className="text-sm text-gray-600 mb-4">
          {format(selectedDate, "M.d", { locale: ko })} 음력{" "}
          {getLunarDate(selectedDate)} {isToday && "오늘"}
        </div>

        {/* D-DAY 일정 */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-900 mb-3">D-DAY 일정</h3>
          <div className="space-y-3">
            {schedules
              .filter((s) => s.type === "D-DAY")
              .map((schedule) => (
                <div
                  key={schedule.id}
                  className="bg-orange-50 border border-orange-200 rounded-lg p-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full">
                          {schedule.type}
                        </span>
                        <span className="font-medium text-gray-900">
                          {schedule.title}
                        </span>
                      </div>
                      {schedule.memo && (
                        <div className="mt-2 text-sm text-gray-600">
                          {schedule.memo}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => handleMoreClick(schedule.id)}
                      className="p-1 hover:bg-orange-100 rounded transition-colors"
                    >
                      <MoreHorizontal size={16} className="text-gray-500" />
                    </button>
                  </div>

                  {/* 더보기 메뉴 */}
                  {showMoreMenu === schedule.id && (
                    <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                      <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded">
                        메모 작성/수정
                      </button>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* 다가오는 일정 */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">
            다가오는 일정
          </h3>
          <div className="space-y-3">
            {schedules
              .filter((s) => s.type !== "D-DAY")
              .map((schedule) => (
                <div
                  key={schedule.id}
                  className="bg-blue-50 border border-blue-200 rounded-lg p-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                          {schedule.type}
                        </span>
                        <span className="font-medium text-gray-900">
                          {schedule.title}
                        </span>
                      </div>
                      {schedule.memo && (
                        <div className="mt-2 text-sm text-gray-600">
                          {schedule.memo}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => handleMoreClick(schedule.id)}
                      className="p-1 hover:bg-blue-100 rounded transition-colors"
                    >
                      <MoreHorizontal size={16} className="text-gray-500" />
                    </button>
                  </div>

                  {/* 더보기 메뉴 */}
                  {showMoreMenu === schedule.id && (
                    <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                      <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded">
                        메모 작성/수정
                      </button>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;
