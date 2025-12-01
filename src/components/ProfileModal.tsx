import { motion, AnimatePresence } from "framer-motion";
import { X, Camera, Mail, User as UserIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal = ({ isOpen, onClose }: ProfileModalProps) => {
  const [user, setUser] = useState({ name: "User", email: "", plan: "Free Plan" });

  useEffect(() => {
    const storedUser = localStorage.getItem("akira_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [isOpen]);

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
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="h-32 bg-gradient-to-r from-primary to-orange-400 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="px-8 pb-8">
              <div className="relative -mt-12 mb-6">
                <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg">
                  <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center text-3xl font-bold text-gray-400">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                </div>
                <button className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-colors">
                  <Camera size={16} />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                  <p className="text-gray-500">{user.plan}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <Mail size={18} className="text-gray-400" />
                    <div className="flex-1">
                      <p className="text-xs text-gray-400 uppercase font-semibold">Email</p>
                      <p className="text-sm font-medium text-gray-900">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <UserIcon size={18} className="text-gray-400" />
                    <div className="flex-1">
                      <p className="text-xs text-gray-400 uppercase font-semibold">Role</p>
                      <p className="text-sm font-medium text-gray-900">Administrator</p>
                    </div>
                  </div>
                </div>

                <button className="w-full py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors">
                  Edit Profile
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
