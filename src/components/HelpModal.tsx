import { motion, AnimatePresence } from "framer-motion";
import { X, Search, Book, MessageCircle, FileText } from "lucide-react";

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal = ({ isOpen, onClose }: HelpModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl overflow-hidden p-8"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Help & Support</h2>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl text-base focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Book, label: "Documentation", desc: "Guides & API Ref" },
                { icon: MessageCircle, label: "Community", desc: "Forums & Chat" },
                { icon: FileText, label: "Changelog", desc: "Latest Updates" },
              ].map((item) => (
                <button
                  key={item.label}
                  className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 hover:border-primary/20 hover:bg-primary/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-50 group-hover:bg-white flex items-center justify-center mb-4 text-gray-500 group-hover:text-primary transition-colors">
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900">{item.label}</h3>
                  <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                </button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
