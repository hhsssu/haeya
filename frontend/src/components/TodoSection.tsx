import React, { useState } from "react";
import { MoreHorizontal, Sparkles, ArrowUpDown } from "lucide-react";

interface TodoSectionProps {
  selectedDate: Date;
}

const TodoSection: React.FC<TodoSectionProps> = ({ selectedDate }) => {
  const [showMoreMenu, setShowMoreMenu] = useState<string | null>(null);
  const [showAIModal, setShowAIModal] = useState(false);

  // 샘플 데이터
  const todos = [
    {
      id: "1",
      title:
        "저거는 언제해야할지 모르겠는데 일단은 고민을 합니다 막연하게 포트폴리오 제작하기",
      memo: "memo박스입니다 작고 연하게 2025.10.28까지",
      category: "구분없음",
      completed: false,
    },
    {
      id: "2",
      title: "이것도 할 일입니다",
      memo: "",
      category: "구분없음",
      completed: false,
    },
    {
      id: "3",
      title: "보라색 카테고리입니다",
      memo: "memo박스입니다 작고 연하게 2025.10.28까지",
      category: "보라색카테고리",
      completed: false,
    },
    {
      id: "4",
      title: "이것도 할 일입니다",
      memo: "",
      category: "보라색카테고리",
      completed: false,
    },
  ];

  const handleMoreClick = (todoId: string) => {
    setShowMoreMenu(showMoreMenu === todoId ? null : todoId);
  };

  const handleAIClick = () => {
    setShowAIModal(true);
  };

  const handleSortClick = () => {
    // 정렬 기능 (나중에 구현)
    console.log("정렬 버튼 클릭");
  };

  return (
    <div className="h-96 overflow-y-auto">
      <div className="p-4">
        {/* AI 할 일 추천 헤더 */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-900">AI 할 일 추천</h3>
          <div className="flex space-x-2">
            <button
              onClick={handleAIClick}
              className="flex items-center space-x-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-md text-xs hover:bg-purple-200 transition-colors"
            >
              <Sparkles size={12} />
              <span>추천</span>
            </button>
            <button
              onClick={handleSortClick}
              className="flex items-center space-x-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs hover:bg-gray-200 transition-colors"
            >
              <ArrowUpDown size={12} />
              <span>정렬</span>
            </button>
          </div>
        </div>

        {/* 카테고리 드롭다운 */}
        <div className="mb-4">
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>구분없음 카테고리 그레고리</option>
          </select>
        </div>

        {/* 할 일 목록 */}
        <div className="space-y-3">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="bg-white border border-gray-200 rounded-lg p-3"
            >
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => {}}
                  className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                />
                <div className="flex-1">
                  <div className="text-sm text-gray-900">{todo.title}</div>
                  {todo.memo && (
                    <div className="mt-1 text-xs text-gray-500 italic">
                      {todo.memo}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => handleMoreClick(todo.id)}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  <MoreHorizontal size={16} className="text-gray-500" />
                </button>
              </div>

              {/* 더보기 메뉴 */}
              {showMoreMenu === todo.id && (
                <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                  <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded">
                    메모 추가
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded">
                    마감일 추가
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded">
                    고정하기
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded">
                    삭제
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded">
                    수정
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 카테고리별 할 일 */}
        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-900 mb-3">
            보라색카테고리
          </h4>
          <div className="space-y-3">
            {todos
              .filter((todo) => todo.category === "보라색카테고리")
              .map((todo) => (
                <div
                  key={todo.id}
                  className="bg-white border border-gray-200 rounded-lg p-3"
                >
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => {}}
                      className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <div className="flex-1">
                      <div className="text-sm text-gray-900">{todo.title}</div>
                      {todo.memo && (
                        <div className="mt-1 text-xs text-gray-500 italic">
                          {todo.memo}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => handleMoreClick(todo.id)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                    >
                      <MoreHorizontal size={16} className="text-gray-500" />
                    </button>
                  </div>

                  {/* 더보기 메뉴 */}
                  {showMoreMenu === todo.id && (
                    <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                      <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded">
                        메모 추가
                      </button>
                      <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded">
                        마감일 추가
                      </button>
                      <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded">
                        고정하기
                      </button>
                      <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded">
                        삭제
                      </button>
                      <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded">
                        수정
                      </button>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* AI 추천 모달 (빈 상태) */}
      {showAIModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">AI 할 일 추천</h3>
              <button
                onClick={() => setShowAIModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="text-center py-8">
              <p className="text-gray-500">
                AI 추천 기능이 곧 추가될 예정입니다.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoSection;

