import { motion } from 'framer-motion'
import clsx from 'clsx'

export default function AnimatedSection({ className, children, delay = 0 }) {
  return (
    <motion.div
      className={clsx(className)}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

