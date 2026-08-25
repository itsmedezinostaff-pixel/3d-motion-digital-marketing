'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import { PerspectiveCamera } from '@react-three/drei';

const FloatingCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (!meshRef.current) return;

    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.005;
        meshRef.current.rotation.y += 0.008;
        meshRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.5;
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhongMaterial
        color="#06B6D4"
        emissive="#0891B2"
        wireframe={true}
      />
    </mesh>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-secondary to-primary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-96 rounded-xl overflow-hidden border border-accent/30"
          >
            <Canvas>
              <PerspectiveCamera position={[0, 0, 5]} />
              <ambientLight intensity={0.6} />
              <pointLight position={[5, 5, 5]} intensity={1.2} />
              <FloatingCube />
            </Canvas>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">
                Why Choose Us?
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We combine cutting-edge technology with creative excellence to deliver digital
              experiences that captivate and convert. Our team specializes in bringing your vision
              to life through innovative 3D motion graphics and web solutions.
            </p>

            <div className="space-y-4">
              {[
                'Award-Winning Designers & Developers',
                '10+ Years of Industry Experience',
                'Latest 3D & Motion Technology',
                '100% Client Satisfaction Rate',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent to-cyan-400 flex items-center justify-center text-primary font-bold">
                    ✓
                  </div>
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
