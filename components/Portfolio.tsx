'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: '3D Interactive Landing',
      category: 'web',
      image: '🌐',
      description: 'Interactive 3D landing page with particle effects',
    },
    {
      id: 2,
      title: 'Motion Brand Video',
      category: 'motion',
      image: '🎬',
      description: 'Cinematic 3D motion graphics for brand storytelling',
    },
    {
      id: 3,
      title: 'Product Showcase',
      category: 'web',
      image: '📦',
      description: '3D product viewer with interactive controls',
    },
    {
      id: 4,
      title: 'Animated Portfolio',
      category: 'motion',
      image: '✨',
      description: 'Smooth scrolling animations and transitions',
    },
    {
      id: 5,
      title: 'Digital Experience',
      category: 'web',
      image: '🎮',
      description: 'Immersive interactive digital experience',
    },
    {
      id: 6,
      title: 'Brand Campaign',
      category: 'motion',
      image: '🎯',
      description: 'Full-scale brand campaign with 3D elements',
    },
  ];

  const filters = ['all', 'web', 'motion'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-4 bg-primary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Explore our latest projects and creations</p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg font-semibold capitalize transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-accent to-cyan-400 text-primary'
                  : 'bg-secondary text-gray-300 hover:text-accent border border-accent/20'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="rounded-xl overflow-hidden bg-gradient-to-br from-secondary to-primary border border-accent/20 hover:border-accent/50 transition-all cursor-pointer group"
            >
              <div className="h-64 bg-gradient-to-br from-accent/20 to-cyan-400/20 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-accent">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
