import { Home, Layout, Settings, HelpCircle, LogOut, Plus, X } from "lucide-react";
import { cn } from "../lib/utils";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

interface DashboardSidebarProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  onOpenSettings?: () => void;
  onOpenHelp?: () => void;
  onOpenProfile?: () => void;
}

export const DashboardSidebar = ({ 
  className, 
  isOpen, 
  onClose,
  onOpenSettings,
  onOpenHelp,
  onOpenProfile
}: DashboardSidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState({ name: "User", plan: "Free Plan" });

  useEffect(() => {
    const storedUser = localStorage.getItem("akira_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  
  const navItems = [
    { icon: Home, label: "Overview", path: "/dashboard" },
    { icon: Layout, label: "Projects", path: "/dashboard/projects" },
    { icon: Plus, label: "Templates", path: "/dashboard/templates" },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      <div className={cn(
        "flex flex-col h-screen w-64 bg-white/80 backdrop-blur-xl border-r border-gray-200/60 fixed left-0 top-0 z-50 transition-transform duration-300 ease-in-out md:translate-x-0 shadow-[4px_0_24px_-12px_rgba(0,0,0,0.05)]",
        isOpen ? "translate-x-0" : "-translate-x-full",
        className
      )}>
        {/* Logo Area */}
        <div className="h-16 px-6 border-b border-gray-100 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate("/")}
          >
             <span className="text-lg font-bold tracking-tight text-gray-900">AKIRA</span>
             <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded border border-gray-200 font-medium">BETA</span>
          </div>
          {/* Mobile Close Button */}
          <button onClick={onClose} className="md:hidden text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-0.5">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.label}
                onClick={() => {
                  navigate(item.path);
                  if (onClose) onClose();
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200",
                  isActive
                    ? "bg-gray-100 text-gray-900" 
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <item.icon size={18} className={isActive ? "text-gray-900" : "text-gray-400"} />
                {item.label}
              </button>
            );
          })}
          
          <button
            onClick={() => {
              if (onOpenSettings) onOpenSettings();
              if (onClose) onClose();
            }}
            className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors"
          >
            <Settings size={18} className="text-gray-400" />
            Settings
          </button>
        </nav>

        {/* Bottom Actions */}
        <div className="p-3 border-t border-gray-100 space-y-0.5">
          <button 
            onClick={() => {
              if (onOpenHelp) onOpenHelp();
              if (onClose) onClose();
            }}
            className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors"
          >
            <HelpCircle size={18} className="text-gray-400" />
            Help & Support
          </button>
          <button 
            onClick={() => {
              localStorage.removeItem("akira_user");
              navigate("/");
            }}
            className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors"
          >
            <LogOut size={18} />
            Log Out
          </button>
        </div>

        {/* User Profile */}
        <div className="p-3 border-t border-gray-100">
          <div 
            onClick={() => {
              if (onOpenProfile) onOpenProfile();
              if (onClose) onClose();
            }}
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-gray-200"
          >
            <div className="w-8 h-8 rounded bg-gray-900 flex items-center justify-center text-white font-bold shrink-0 text-xs">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
              <p className="text-[10px] text-gray-500 truncate uppercase tracking-wide">{user.plan}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
