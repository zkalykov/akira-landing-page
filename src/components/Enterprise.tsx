import { motion } from "framer-motion";
import { Building2, Shield, Users, Headphones } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Dedicated Infrastructure",
    description: "Enterprise-grade servers with 99.99% uptime SLA and unlimited scalability.",
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "SSO, SAML, SOC 2 compliance, and custom security policies for your team.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Unlimited team members, role-based access control, and real-time collaboration.",
  },
  {
    icon: Headphones,
    title: "Priority Support",
    description: "24/7 dedicated support team, custom onboarding, and training sessions.",
  },
];

export const Enterprise = () => {
  return (
    <section id="enterprise" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Built for <span className="text-primary">Enterprise</span>.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features and dedicated support for large organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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

        <motion.div
          className="relative text-center bg-white text-black rounded-3xl p-12 overflow-hidden shadow-[inset_0_0_60px_rgba(139,0,0,0.6)] border border-red-900/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Wave Animation */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(139, 0, 0, 0.1) 10%, rgba(139, 0, 0, 0.5) 50%, rgba(139, 0, 0, 0.1) 90%, transparent 100%)",
              transform: "skewX(-20deg)"
            }}
            initial={{ x: "-150%" }}
            animate={{ x: "150%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.5
            }}
          />


          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our enterprise team to learn how Akira can transform your organization's web presence.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
