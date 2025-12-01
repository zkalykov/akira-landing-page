import { motion, AnimatePresence } from "framer-motion";
import { X, User, CreditCard, Bell, Shield, Download } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal = ({ isOpen, onClose }: SettingsModalProps) => {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
  ];

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
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl overflow-hidden flex h-[700px]"
          >
            {/* Sidebar */}
            <div className="w-72 bg-gray-50/50 border-r border-gray-100 p-6 flex flex-col">
              <h2 className="text-xl font-bold mb-8 px-2">Settings</h2>
              <div className="space-y-1 flex-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200",
                      activeTab === tab.id
                        ? "bg-white text-gray-900 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-gray-100"
                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                    )}
                  >
                    <tab.icon size={18} className={activeTab === tab.id ? "text-primary" : "text-gray-400"} />
                    {tab.label}
                  </button>
                ))}
              </div>
              
              <div className="pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3 px-4 py-3">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-bold">
                    U
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">User Name</p>
                    <p className="text-xs text-gray-500 truncate">user@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col min-w-0 bg-white">
              {/* Header */}
              <div className="h-16 border-b border-gray-100 flex items-center justify-between px-8">
                <h3 className="text-lg font-semibold capitalize">{activeTab}</h3>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-8">
                <div className="max-w-2xl mx-auto space-y-8">
                  
                  {/* PROFILE TAB */}
                  {activeTab === "profile" && (
                    <div className="space-y-8">
                      {/* Avatar Section */}
                      <div className="flex items-center gap-6">
                        <div className="w-24 h-24 rounded-full bg-gray-100 border-4 border-white shadow-lg flex items-center justify-center text-3xl font-bold text-gray-400">
                          U
                        </div>
                        <div className="space-y-2">
                          <div className="flex gap-3">
                            <button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                              Upload New
                            </button>
                            <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                              Remove
                            </button>
                          </div>
                          <p className="text-xs text-gray-500">Recommended: 400x400px JPG or PNG.</p>
                        </div>
                      </div>

                      {/* Form Fields */}
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">First Name</label>
                          <input type="text" defaultValue="User" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Last Name</label>
                          <input type="text" defaultValue="Name" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                        </div>
                        <div className="col-span-2 space-y-2">
                          <label className="text-sm font-medium text-gray-700">Email Address</label>
                          <input type="email" defaultValue="user@example.com" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                        </div>
                        <div className="col-span-2 space-y-2">
                          <label className="text-sm font-medium text-gray-700">Bio</label>
                          <textarea rows={4} defaultValue="Product Designer & Developer based in NYC." className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none" />
                        </div>
                      </div>

                      <div className="flex justify-end pt-4 border-t border-gray-100">
                        <button className="px-6 py-2.5 bg-primary text-white font-medium rounded-lg shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 transition-all">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  )}

                  {/* BILLING TAB */}
                  {activeTab === "billing" && (
                    <div className="space-y-8">
                      {/* Current Plan */}
                      <div className="bg-gray-900 rounded-2xl p-6 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10 flex justify-between items-start">
                          <div>
                            <p className="text-white/60 text-sm font-medium mb-1">Current Plan</p>
                            <h4 className="text-3xl font-bold">Pro Plan</h4>
                            <p className="text-white/80 mt-2 text-sm">$29/month • Billed monthly</p>
                          </div>
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold border border-white/10">Active</span>
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-white/60">
                            <CreditCard size={16} />
                            <span>Visa ending in 4242</span>
                          </div>
                          <button className="text-sm font-medium hover:text-white transition-colors">Manage Subscription</button>
                        </div>
                      </div>

                      {/* Invoices */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Invoice History</h4>
                        <div className="border border-gray-200 rounded-xl overflow-hidden">
                          {[
                            { date: "Oct 01, 2023", amount: "$29.00", status: "Paid" },
                            { date: "Sep 01, 2023", amount: "$29.00", status: "Paid" },
                            { date: "Aug 01, 2023", amount: "$29.00", status: "Paid" },
                          ].map((invoice, i) => (
                            <div key={i} className="flex items-center justify-between p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                              <div className="flex items-center gap-4">
                                <div className="p-2 bg-gray-100 rounded-lg text-gray-500">
                                  <Download size={18} />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-900">Invoice #{2023001 + i}</p>
                                  <p className="text-xs text-gray-500">{invoice.date}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="text-sm font-medium text-gray-900">{invoice.amount}</span>
                                <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-100">{invoice.status}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* NOTIFICATIONS TAB */}
                  {activeTab === "notifications" && (
                    <div className="space-y-6">
                      {[
                        { title: "Email Notifications", desc: "Receive emails about your account activity.", active: true },
                        { title: "Push Notifications", desc: "Receive push notifications on your device.", active: false },
                        { title: "Marketing Emails", desc: "Receive emails about new features and offers.", active: true },
                        { title: "Project Updates", desc: "Get notified when your projects are viewed.", active: true },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
                          <div className="space-y-1">
                            <h4 className="text-sm font-medium text-gray-900">{item.title}</h4>
                            <p className="text-xs text-gray-500">{item.desc}</p>
                          </div>
                          <div className={`w-11 h-6 rounded-full relative transition-colors cursor-pointer ${item.active ? 'bg-primary' : 'bg-gray-200'}`}>
                            <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${item.active ? 'left-6' : 'left-1'}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* SECURITY TAB */}
                  {activeTab === "security" && (
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Change Password</h4>
                        <div className="space-y-4">
                          <input type="password" placeholder="Current Password" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                          <input type="password" placeholder="New Password" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                          <input type="password" placeholder="Confirm New Password" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                        </div>
                        <div className="flex justify-end">
                          <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                            Update Password
                          </button>
                        </div>
                      </div>

                      <div className="pt-8 border-t border-gray-100 space-y-4">
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Two-Factor Authentication</h4>
                        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl bg-gray-50/50">
                          <div className="flex items-center gap-4">
                            <div className="p-2 bg-white rounded-lg text-primary shadow-sm">
                              <Shield size={20} />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">Secure your account</p>
                              <p className="text-xs text-gray-500">Add an extra layer of security to your account.</p>
                            </div>
                          </div>
                          <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors">
                            Enable 2FA
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
