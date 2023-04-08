import Tech from "../components/Tech";
import { motion } from 'framer-motion';

export default function Skills() {
  return (
      <motion.div
      initial={{ y: -1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
      exit={{ y: 1000, opacity: 0, transition: { duration: 1 } }}
      >
          <Tech />

    </motion.div>
  )
}