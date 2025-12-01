import { MoreHorizontal, ExternalLink, Edit2, Trash2 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectCardProps {
  title: string;
  lastEdited: string;
  status: "published" | "draft";
  thumbnail?: string;
  gradient?: string;
}

export const ProjectCard = ({ title, lastEdited, status, thumbnail, gradient }: ProjectCardProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="group relative bg-white rounded-lg border border-gray-200 p-0 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-gray-300 transition-all duration-300 overflow-hidden hover:-translate-y-1">
      {/* Thumbnail / Gradient Area */}
      <div className="aspect-[16/9] bg-gray-100 relative overflow-hidden border-b border-gray-100">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className={`w-full h-full ${gradient} relative overflow-hidden`}>
            {/* Subtle Noise/Texture */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            
            {/* Abstract Shape for Interest */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 ease-out"></div>
          </div>
        )}
        
        {/* Status Badge - Minimalist */}
        <div className="absolute top-3 left-3">
          <span className={`
            px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wide border backdrop-blur-md shadow-sm
            ${status === 'published' 
              ? 'bg-white/90 text-green-700 border-green-200/50' 
              : 'bg-white/90 text-amber-700 border-amber-200/50'}
          `}>
            {status}
          </span>
        </div>

        {/* Hover Overlay - Minimalist Fade */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-[1px]">
          <button className="p-2 bg-white rounded-md text-gray-900 hover:bg-gray-50 transition-all shadow-sm hover:scale-105 active:scale-95">
            <Edit2 size={16} />
          </button>
          <button className="p-2 bg-white rounded-md text-gray-900 hover:bg-gray-50 transition-all shadow-sm hover:scale-105 active:scale-95">
            <ExternalLink size={16} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-sm text-gray-900 leading-tight mb-1 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-xs text-gray-500">Edited {lastEdited}</p>
          </div>
          
          <div className="relative">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-100 transition-colors opacity-0 group-hover:opacity-100"
            >
              <MoreHorizontal size={16} />
            </button>

            <AnimatePresence>
              {isMenuOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsMenuOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 5 }}
                    className="absolute right-0 top-full mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-20 overflow-hidden py-1"
                  >
                    <button className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 text-left">
                      <Edit2 size={14} /> Rename
                    </button>
                    <button className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 text-left">
                      <Trash2 size={14} /> Delete
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
