import { DashboardSidebar } from "../components/DashboardSidebar";
import { Search, Bell, ChevronDown, Menu, Check, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { SettingsModal } from "../components/SettingsModal";
import { HelpModal } from "../components/HelpModal";
import { ProfileModal } from "../components/ProfileModal";
import { motion, AnimatePresence } from "framer-motion";

export const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<"settings" | "help" | "profile" | null>(null);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState(false);

  const notifications = [
    { id: 1, title: "Project Published", desc: "Your 'E-commerce Store' is now live.", time: "2m ago", unread: true },
    { id: 2, title: "New Feature", desc: "Try out the new AI image generator.", time: "1h ago", unread: false },
    { id: 3, title: "Welcome!", desc: "Thanks for joining Akira Beta.", time: "1d ago", unread: false },
  ];

  const workspaces = [
    { id: 1, name: "My Workspace", active: true },
    { id: 2, name: "Team Alpha", active: false },
    { id: 3, name: "Client Projects", active: false },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("akira_user");
    if (!user) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <DashboardSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        onOpenSettings={() => setActiveModal("settings")}
        onOpenHelp={() => setActiveModal("help")}
        onOpenProfile={() => setActiveModal("profile")}
      />
      
      {/* Main Content */}
      <main className="md:pl-64 min-h-screen transition-all duration-300 flex flex-col">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-md"
            >
              <Menu size={20} />
            </button>

            <div className="relative w-full hidden md:block max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search projects..." 
                className="w-full pl-9 pr-4 py-1.5 bg-gray-100 border-transparent rounded-md text-sm focus:bg-white focus:ring-2 focus:ring-gray-200 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-3 md:gap-6 ml-4 relative">
            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors relative"
              >
                <Bell size={18} />
                <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
              </button>

              <AnimatePresence>
                {isNotificationsOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsNotificationsOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 5, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.98 }}
                      className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden"
                    >
                      <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                        <h3 className="font-semibold text-sm text-gray-900">Notifications</h3>
                        <button className="text-[10px] text-gray-500 font-medium hover:text-primary uppercase tracking-wide">Mark all read</button>
                      </div>
                      <div className="max-h-[300px] overflow-y-auto">
                        {notifications.map((notif) => (
                          <div key={notif.id} className={`p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors ${notif.unread ? 'bg-blue-50/30' : ''}`}>
                            <div className="flex justify-between items-start mb-1">
                              <h4 className="text-sm font-medium text-gray-900">{notif.title}</h4>
                              <span className="text-[10px] text-gray-400">{notif.time}</span>
                            </div>
                            <p className="text-xs text-gray-500 leading-relaxed">{notif.desc}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <div className="h-6 w-[1px] bg-gray-200 hidden md:block"></div>

            {/* Workspace Switcher */}
            <div className="relative">
              <button 
                onClick={() => setIsWorkspaceOpen(!isWorkspaceOpen)}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 px-2 py-1.5 rounded-md hover:bg-gray-100 transition-colors"
              >
                <span className="hidden md:inline">My Workspace</span>
                <ChevronDown size={14} className="text-gray-400" />
              </button>

              <AnimatePresence>
                {isWorkspaceOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsWorkspaceOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 5, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.98 }}
                      className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden p-1"
                    >
                      <div className="px-3 py-2 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Switch Workspace</div>
                      {workspaces.map((ws) => (
                        <button 
                          key={ws.id}
                          className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-md hover:bg-gray-50 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:shadow-sm transition-all border border-gray-200">
                              <Briefcase size={12} />
                            </div>
                            <span className="font-medium text-gray-700">{ws.name}</span>
                          </div>
                          {ws.active && <Check size={14} className="text-gray-900" />}
                        </button>
                      ))}
                      <div className="h-px bg-gray-100 my-1" />
                      <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors">
                        <div className="w-6 h-6 rounded border border-dashed border-gray-300 flex items-center justify-center">
                          <span className="text-xs leading-none">+</span>
                        </div>
                        Create Workspace
                      </button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        <div className="p-6 md:p-10 max-w-7xl mx-auto flex-1 w-full">
          <Outlet />
        </div>

        {/* Dashboard Footer Banner */}
        <div className="mt-auto w-full">
          <img 
            src="/kg-banner.png" 
            alt="Dashboard Banner" 
            className="w-full h-48 md:h-64 object-cover block transition-all duration-500"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent, black)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)'
            }}
          />
        </div>
      </main>

      {/* Modals */}
      <SettingsModal isOpen={activeModal === "settings"} onClose={() => setActiveModal(null)} />
      <HelpModal isOpen={activeModal === "help"} onClose={() => setActiveModal(null)} />
      <ProfileModal isOpen={activeModal === "profile"} onClose={() => setActiveModal(null)} />
    </div>
  );
};
