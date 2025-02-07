import { motion } from "framer-motion";

export default function IconWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.2, y: -10 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex flex-col items-center"
    >
      {children}
    </motion.div>
  );
}
