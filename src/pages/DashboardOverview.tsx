import { CreateProjectInput } from "../components/CreateProjectInput";
import { ProjectCard } from "../components/ProjectCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const DashboardOverview = () => {
  const [userName, setUserName] = useState("User");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("akira_user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserName(user.name.split(' ')[0]);
    }
  }, []);

  const projects = [
    { 
      title: "E-commerce Store", 
      lastEdited: "2 hours ago", 
      status: "published" as const,
      gradient: "bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500"
    },
    { 
      title: "Personal Portfolio", 
      lastEdited: "1 day ago", 
      status: "draft" as const,
      gradient: "bg-gradient-to-br from-pink-500 via-rose-500 to-yellow-500"
    },
    { 
      title: "SaaS Landing Page", 
      lastEdited: "3 days ago", 
      status: "draft" as const,
      gradient: "bg-gradient-to-br from-emerald-400 via-cyan-500 to-blue-500"
    },
    { 
      title: "Restaurant Menu", 
      lastEdited: "1 week ago", 
      status: "published" as const,
      gradient: "bg-gradient-to-br from-orange-400 via-red-500 to-pink-500"
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-10"
    >
      {/* Hero / Create Section */}
      <motion.section variants={item} className="space-y-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Good evening, {userName}</h1>
          <p className="text-gray-500 text-lg">What would you like to build today?</p>
        </div>
        
        <div className="max-w-3xl">
          <CreateProjectInput />
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section variants={item} className="space-y-6">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <h2 className="text-lg font-semibold text-gray-900">Recent Projects</h2>
          <button 
            onClick={() => navigate("/dashboard/projects")}
            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
          
          {/* Add New Card - Minimalist */}
          <motion.button 
            variants={item}
            className="group relative aspect-[16/9] rounded-lg border border-dashed border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex flex-col items-center justify-center gap-2 text-gray-400 hover:text-gray-600 w-full"
          >
            <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <span className="text-xl font-light leading-none pb-0.5">+</span>
            </div>
            <span className="text-sm font-medium">Create New Project</span>
          </motion.button>
        </div>
      </motion.section>
    </motion.div>
  );
};
