import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, BarChart3, User } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "홈", icon: Home },
    { path: "/search", label: "검색", icon: Search },
    { path: "/stats", label: "통계", icon: BarChart3 },
    { path: "/mypage", label: "마이페이지", icon: User },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 메인 콘텐츠 */}
      <main className="pb-20">{children}</main>

      {/* 하단 네비게이션 */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-around items-center h-16">
          {navItems.map(({ path, label, icon: Icon }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`flex flex-col items-center justify-center space-y-1 px-4 py-2 ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <Icon size={20} />
                <span className="text-xs font-medium">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;

