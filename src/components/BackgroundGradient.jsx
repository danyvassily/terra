import { motion } from 'framer-motion';

const BackgroundGradient = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{
        background: 'linear-gradient(-45deg, #ebedff, #f3f2f8, #dbf8ff)',
        backgroundSize: '400% 400%',
      }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 10,
        ease: 'easeInOut',
        repeat: Infinity,
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.1) 100%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
};

export default BackgroundGradient;