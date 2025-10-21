import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
} from "date-fns";
import { ko } from "date-fns/locale";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { solarToLunar } from "korean-lunar-calendar";

interface CalendarProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const today = new Date();

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const isToday = (day: Date) => isSameDay(day, today);
  const isSelected = (day: Date) => isSameDay(day, selectedDate);
  const isCurrentMonth = (day: Date) => isSameMonth(day, currentMonth);

  // 휴일 체크 함수
  const isHoliday = (day: Date) => {
    const year = day.getFullYear();
    const month = day.getMonth() + 1;
    const date = day.getDate();

    // 주요 휴일들 (간단한 예시)
    const holidays = [
      `${year}-01-01`, // 신정
      `${year}-03-01`, // 삼일절
      `${year}-05-05`, // 어린이날
      `${year}-06-06`, // 현충일
      `${year}-08-15`, // 광복절
      `${year}-10-03`, // 개천절
      `${year}-10-09`, // 한글날
      `${year}-12-25`, // 성탄절
    ];

    const dateStr = `${year}-${month.toString().padStart(2, "0")}-${date
      .toString()
      .padStart(2, "0")}`;
    return holidays.includes(dateStr);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft size={20} className="text-gray-600" />
        </button>
        <h2 className="text-lg font-semibold text-gray-900">
          {format(currentMonth, "yyyy M", { locale: ko })}
        </h2>
        <button
          onClick={nextMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronRight size={20} className="text-gray-600" />
        </button>
      </div>

      {/* 요일 헤더 */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-500 py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* 날짜 그리드 */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => {
          const isSunday = day.getDay() === 0;
          const isSaturday = day.getDay() === 6;
          const isTodayDate = isToday(day);
          const isSelectedDate = isSelected(day);
          const isCurrentMonthDate = isCurrentMonth(day);
          const isHolidayDate = isHoliday(day);

          return (
            <button
              key={day.toISOString()}
              onClick={() => onDateSelect(day)}
              className={`
                relative p-2 text-sm rounded-lg transition-colors
                ${!isCurrentMonthDate ? "text-gray-300" : "text-gray-900"}
                ${isSunday && isCurrentMonthDate ? "text-red-500" : ""}
                ${isSaturday && isCurrentMonthDate ? "text-blue-500" : ""}
                ${isHolidayDate && isCurrentMonthDate ? "text-red-500" : ""}
                ${isTodayDate ? "bg-gray-200" : ""}
                ${isSelectedDate ? "bg-yellow-400 text-white" : ""}
                hover:bg-gray-100
                ${isSelectedDate ? "hover:bg-yellow-500" : ""}
              `}
            >
              {format(day, "d")}
              {isTodayDate && !isSelectedDate && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-400 rounded-full"></div>
              )}
            </button>
          );
        })}
      </div>

      {/* 샘플 일정 표시 */}
      <div className="mt-4 space-y-1">
        <div className="text-xs text-gray-500">15일</div>
        <div className="text-xs text-gray-700">친구들과 등산</div>
        <div className="text-xs text-gray-700">서류 제출 마감</div>
      </div>
    </div>
  );
};

export default Calendar;
