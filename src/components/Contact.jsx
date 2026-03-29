import { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA, SOCIAL_LINKS } from "../constants";
import { Send, Loader2 } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaFacebook } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const getIcon = (id) => {
  switch (id) {
    case 'email': return <FaEnvelope size={24} />;
    case 'github': return <FaGithub size={24} />;
    case 'linkedin': return <FaLinkedin size={24} />;
    case 'instagram': return <FaInstagram size={24} />;
    case 'facebook': return <FaFacebook size={24} />;
    default: return null;
  }
};

const getHoverStyle = (id) => {
  switch (id) {
    case 'email': return "group-hover:text-blue-500";
    case 'github': return "group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300";
    case 'linkedin': return "group-hover:text-[#0077b5]";
    case 'instagram': return "group-hover:text-[#E1306C]";
    case 'facebook': return "group-hover:text-[#1877F2]";
    default: return "";
  }
};

const Contact = () => {
  const { title, description } = PORTFOLIO_DATA.contact;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(serviceId, templateId, {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message,
      }, publicKey);
      setStatus({ type: "success", message: "Message sent successfully!" });
      toast.success("Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ type: "error", message: "Failed to send message." });
      toast.error("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{title}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">Let's Connect</h3>
            <div className="flex flex-col gap-6">
              {SOCIAL_LINKS.map((link) => (
                <motion.a 
                  key={link.id}
                  whileHover={{ scale: 1.05, x: 5 }}
                  href={link.url}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 text-slate-600 dark:text-slate-400 transition-colors group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className={`p-4 bg-slate-100 dark:bg-slate-800/50 rounded-full transition-all duration-300 ${getHoverStyle(link.id)}`}
                  >
                    {getIcon(link.id)}
                  </motion.div>
                  <span className={`text-lg font-medium transition-colors ${getHoverStyle(link.id)}`}>{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              {status.message && (
                <div className={`p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                  {status.message}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all dark:text-white dark:placeholder-slate-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all dark:text-white dark:placeholder-slate-500"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all dark:text-white dark:placeholder-slate-500 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <motion.button
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all shadow-lg ${
                  isSubmitting ? "bg-slate-300 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/25"
                }`}
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
