'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Ready to elevate your brand? Get in touch with us today
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-gradient-to-br from-secondary to-primary p-8 rounded-xl border border-accent/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileFocus={{ scale: 1.02 }}
            >
              <label className="block text-sm font-semibold mb-2 text-accent">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-primary border border-accent/30 text-white focus:border-accent focus:outline-none transition-all"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div
              whileFocus={{ scale: 1.02 }}
            >
              <label className="block text-sm font-semibold mb-2 text-accent">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-primary border border-accent/30 text-white focus:border-accent focus:outline-none transition-all"
                placeholder="your@email.com"
              />
            </motion.div>
          </div>

          <motion.div
            whileFocus={{ scale: 1.01 }}
          >
            <label className="block text-sm font-semibold mb-2 text-accent">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-primary border border-accent/30 text-white focus:border-accent focus:outline-none transition-all resize-none"
              placeholder="Tell us about your project..."
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-8 py-3 bg-gradient-to-r from-accent to-cyan-400 text-primary font-bold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all"
          >
            {submitted ? '✓ Message Sent!' : 'Send Message'}
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: '📧', title: 'Email', value: 'contact@itsmedezino.com' },
            { icon: '📱', title: 'Phone', value: '+1 (555) 123-4567' },
            { icon: '📍', title: 'Location', value: 'Digital World' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-accent mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
