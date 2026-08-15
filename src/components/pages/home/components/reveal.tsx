import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const revealVariants: Variants = {
  hidden: { opacity: 1, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease } },
};

const staggerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
};

export function Reveal({ children, className = "", stagger = false }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={stagger ? staggerVariants : revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -25% 0px" }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className = "" }: Omit<RevealProps, "stagger">) {
  return <motion.div className={className} variants={revealVariants}>{children}</motion.div>;
}
