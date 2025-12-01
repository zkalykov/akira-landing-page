import { DashboardSidebar } from "../components/DashboardSidebar";
import { CreateProjectInput } from "../components/CreateProjectInput";
import { ProjectCard } from "../components/ProjectCard";
import { Search, Bell, ChevronDown, Menu } from "lucide-react";
import { useState, useEffect } from "react";

export const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const storedUser = localStorage.getItem("akira_user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserName(user.name.split(' ')[0]); // First name only
    }
  }, []);

  const projects = [
    { 
      title: "E-commerce Store", 
      lastEdited: "2 hours ago", 
      status: "published" as const,
      thumbnail: "https://images.unsplash.com/photo-1472851294608-415522f96319?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Personal Portfolio", 
      lastEdited: "1 day ago", 
      status: "draft" as const,
      thumbnail: "https://images.unsplash.com/photo-1481487484168-9b930d5b7d9f?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "SaaS Landing Page", 
      lastEdited: "3 days ago", 
      status: "draft" as const,
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Restaurant Menu", 
      lastEdited: "1 week ago", 
      status: "published" as const,
      thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <DashboardSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* Main Content */}
      <main className="md:pl-64 min-h-screen transition-all duration-300">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
            >
              <Menu size={20} />
            </button>

            <div className="relative w-full hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search projects..." 
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4 ml-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-[1px] bg-gray-200 hidden md:block"></div>
            <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900">
              <span className="hidden md:inline">My Workspace</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </header>

        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 md:space-y-12">
          {/* Hero / Create Section */}
          <section className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Good evening, {userName}</h1>
              <p className="text-gray-500">What would you like to build today?</p>
            </div>
            
            <div className="max-w-3xl">
              <CreateProjectInput />
            </div>
          </section>

          {/* Projects Grid */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Recent Projects</h2>
              <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                View All
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
              
              {/* Add New Card */}
              <button className="group relative aspect-[4/3] rounded-2xl border-2 border-dashed border-gray-200 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 flex flex-col items-center justify-center gap-3 text-gray-400 hover:text-primary">
                <div className="w-12 h-12 rounded-full bg-gray-50 group-hover:bg-white flex items-center justify-center shadow-sm transition-colors">
                  <span className="text-2xl font-light">+</span>
                </div>
                <span className="font-medium">Create New Project</span>
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
