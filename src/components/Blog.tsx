import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Introducing Akira: The Future of Web Design",
    description: "Learn how Akira is revolutionizing the way websites are built with AI-powered automation.",
    date: "December 1, 2024",
    readTime: "5 min read",
  },
  {
    title: "10 Tips for Writing Better Prompts",
    description: "Master the art of prompt engineering to get the best results from Akira.",
    date: "November 28, 2024",
    readTime: "7 min read",
  },
  {
    title: "Case Study: Building a SaaS Landing Page in 60 Seconds",
    description: "How one startup used Akira to launch their product faster than ever before.",
    date: "November 25, 2024",
    readTime: "6 min read",
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Latest from our <span className="text-primary">blog</span>.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, updates, and stories from the Akira team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-sm text-gray-500 mb-4">
                {post.date} · {post.readTime}
              </div>
              <h3 className="text-xl font-bold mb-3">{post.title}</h3>
              <p className="text-gray-600 mb-6">{post.description}</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Read more <ArrowRight size={16} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
