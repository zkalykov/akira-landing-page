import { motion } from "framer-motion";
import { Wand2, Type, Search, Smartphone, Zap, Palette } from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "One-Prompt Creation",
    description: "Describe your dream website in plain English, and Akira builds it instantly.",
  },
  {
    icon: Type,
    title: "AI-Generated Copy",
    description: "Compelling, professional content written automatically for your brand.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Built-in best practices to help your site rank higher on search engines.",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description: "Looks perfect on every device, from mobile phones to large desktop screens.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance ensuring your site loads in milliseconds.",
  },
  {
    icon: Palette,
    title: "Custom Design System",
    description: "Unique color palettes and typography tailored to your brand identity.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Everything you need to <span className="text-primary">launch</span>.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features that make web design accessible to everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
