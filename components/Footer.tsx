'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-accent/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent mb-4">
              ITS ME DEZINO
            </h3>
            <p className="text-gray-400">Creating innovative 3D motion experiences for brands worldwide.</p>
          </motion.div>

          {/* Links */}
          {[
            {
              title: 'Company',
              links: ['About', 'Services', 'Portfolio', 'Blog'],
            },
            {
              title: 'Resources',
              links: ['Documentation', 'FAQ', 'Support', 'Contact'],
            },
            {
              title: 'Social',
              links: ['Twitter', 'LinkedIn', 'Instagram', 'Facebook'],
            },
          ].map((column, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <h4 className="text-lg font-semibold text-accent mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-accent transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-accent/10 pt-8 text-center"
        >
          <p className="text-gray-400 mb-4">
            © {currentYear} ITS ME DEZINO. All rights reserved. | Crafted with ✨ for brands that dare to be different
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            {['twitter', 'linkedin', 'github', 'instagram'].map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ scale: 1.2 }}
                className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent/10 transition-all"
              >
                {social === 'twitter' && '𝕏'}
                {social === 'linkedin' && 'in'}
                {social === 'github' && '◆'}
                {social === 'instagram' && '📷'}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
