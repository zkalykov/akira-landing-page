import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "../lib/utils";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for hobbyists and personal projects.",
    features: ["1 AI-generated website", "Basic customization", "Akira branding", "Community support"],
    cta: "Start for Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For creators and small businesses.",
    features: ["Unlimited websites", "Custom domain connection", "Advanced SEO tools", "Priority support", "Remove branding"],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large teams and organizations.",
    features: ["Dedicated account manager", "Custom AI model training", "SSO & Security", "SLA guarantee", "API access"],
    cta: "Contact Sales",
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Simple, transparent <span className="text-primary">pricing</span>.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={cn(
                "relative p-8 rounded-3xl border flex flex-col",
                plan.popular
                  ? "border-primary shadow-xl bg-white scale-105 z-10"
                  : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                  {plan.period && <span className="text-gray-500">{plan.period}</span>}
                </div>
                <p className="text-gray-600 mt-4 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  "w-full py-3 px-6 rounded-xl font-medium transition-all duration-200",
                  plan.popular
                    ? "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-primary/25"
                    : "bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 hover:border-gray-300"
                )}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>


        {/* Footer Image */}
        <motion.div
          className="-mt-42 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src="/footer.png" 
            alt="Footer Decoration" 
            className="w-full max-w-4xl"
          />
        </motion.div>
      </div>
    </section>
  );
};
