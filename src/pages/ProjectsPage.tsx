import { ProjectCard } from "../components/ProjectCard";
import { Search, Filter, Plus } from "lucide-react";

export const ProjectsPage = () => {
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
    { 
      title: "Blog Template", 
      lastEdited: "2 weeks ago", 
      status: "published" as const,
      gradient: "bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500"
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">All Projects</h1>
          <p className="text-gray-500">Manage and edit your existing projects</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
          <Plus size={20} />
          <span>New Project</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 bg-white p-2 rounded-xl border border-gray-100 shadow-sm">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search projects..." 
            className="w-full pl-10 pr-4 py-2 bg-transparent border-none text-sm focus:ring-0 outline-none"
          />
        </div>
        <div className="h-6 w-[1px] bg-gray-200"></div>
        <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
          <Filter size={18} />
          <span>Filter</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};
