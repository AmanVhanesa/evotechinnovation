import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { scaleReveal } from '@/styles/motionVariants';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => (
  <motion.div
    variants={scaleReveal}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    className="group rounded-3xl border border-line bg-white p-7 transition-shadow duration-500 hover:shadow-card"
  >
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-soft">
      {icon}
    </div>
    <h3 className="mt-5 font-display text-xl font-semibold tracking-tighter text-ink">{title}</h3>
    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink2">{description}</p>
  </motion.div>
);

export default ServiceCard;
