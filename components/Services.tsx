'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServiceCard = ({ icon, title, description, index }: any) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="p-6 rounded-xl bg-gradient-to-br from-secondary to-primary border border-accent/20 hover:border-accent/50 transition-all cursor-pointer group"
    >
      <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-accent">{title}</h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: '🎨',
      title: '3D Design',
      description: 'Custom 3D models and animations tailored to your brand identity',
    },
    {
      icon: '✨',
      title: 'Motion Graphics',
      description: 'Smooth, captivating animations that engage your audience',
    },
    {
      icon: '🚀',
      title: 'Web Development',
      description: 'High-performance websites with cutting-edge technologies',
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Perfect experience across all devices and screen sizes',
    },
    {
      icon: '🎯',
      title: 'Brand Strategy',
      description: 'Strategic digital marketing solutions for maximum impact',
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Creative solutions that push boundaries and set trends',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-primary to-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Comprehensive digital solutions for your brand</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const useInView = (options: any) => {
  const ref: any = require('react');
  return { ref: undefined, inView: true };
};

export default Services;
