import { Layout } from "lucide-react";

export const TemplatesPage = () => {
  const templates = [
    { title: "Modern SaaS", category: "Landing Page", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800" },
    { title: "Creative Portfolio", category: "Portfolio", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800" },
    { title: "E-commerce Starter", category: "Store", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800" },
    { title: "Restaurant Menu", category: "Food", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" },
    { title: "Blog Minimal", category: "Blog", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800" },
    { title: "Agency Dark", category: "Business", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">Templates</h1>
        <p className="text-gray-500">Start with a professionally designed template</p>
      </div>

      {/* Categories */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {["All", "Landing Page", "Portfolio", "E-commerce", "Blog", "Business"].map((cat, i) => (
          <button 
            key={cat}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              i === 0 ? "bg-primary text-white" : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {templates.map((template, index) => (
          <div key={index} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img src={template.image} alt={template.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="bg-white text-gray-900 px-6 py-2.5 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Use Template
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{template.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{template.category}</p>
                </div>
                <div className="p-2 bg-gray-50 rounded-lg text-gray-400">
                  <Layout size={16} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
