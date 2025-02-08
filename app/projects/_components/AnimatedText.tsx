import { motion } from "framer-motion";

export default function AnimatedText() {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        type: "tween",
        duration: 1,
        ease: [0.68, -0.55, 0.27, 1.55],
        repeat: Infinity,
        stiffness: 20,
      },
    },
  };

  const words = "Click the Card".split(" ");

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="px-4 inline-block text-2xl sm:text-3xl"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className={`inline-block ${index < words.length - 1 ? "mr-3" : ""}`}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
