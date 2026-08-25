'use client';

import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (!meshRef.current) return;

    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.001;
        meshRef.current.rotation.y += 0.002;
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 4]} />
      <meshPhongMaterial
        color="#06B6D4"
        wireframe={true}
        emissive="#0891B2"
      />
    </mesh>
  );
};

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8 },
    }),
  };

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0}
          variants={textVariants}
          className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
        >
          <span className="bg-gradient-to-r from-accent via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            3D Motion Digital
          </span>
          <br />
          <span>Marketing Solutions</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={1}
          variants={textVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
        >
          Elevate your brand with cutting-edge 3D animations and innovative digital experiences
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={2}
          variants={textVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-accent to-cyan-400 text-primary font-bold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition-all"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
