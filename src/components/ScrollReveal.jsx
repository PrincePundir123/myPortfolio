import { motion } from "framer-motion";

export const ScrollReveal = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};
