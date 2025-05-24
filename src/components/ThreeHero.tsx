'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Loader2, ArrowRight, Mail } from 'lucide-react';

function BuildingModel() {
  const { scene } = useGLTF('/model/building.glb');
  const modelRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002;
    }
  });

  scene.traverse((obj: any) => {
    if (obj.isMesh) {
      obj.castShadow = true;
      obj.receiveShadow = true;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={1.8} position={[0, -1.2, 0]} />;
}

function ModelLoader() {
  return (
    <Html center>
      <div className="flex items-center gap-2 text-sm text-gray-600 animate-pulse">
        <Loader2 className="animate-spin" /> Loading model...
      </div>
    </Html>
  );
}

export default function ThreeHero() {
  return (
    <section className="section bg-gradient-to-br from-white to-gray-100 text-black relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Text Content */}
        <motion.div
          className="lg:w-1/2 space-y-8"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-6xl font-bebas uppercase tracking-wider leading-tight">
            Immersive Project Visualization
          </h2>
          <p className="text-lg text-gray-700 max-w-xl leading-relaxed">
            Explore architectural precision in stunning 3D. Our models offer a tangible preview of your vision brought to life.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              className="brutalist-button flex items-center gap-2"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
            >
              View Projects <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              className="brutalist-button flex items-center gap-2 bg-black text-white"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
            >
              Get a Quote <Mail size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* 3D Canvas */}
        <motion.div
          className="lg:w-1/2 w-full h-[500px] rounded-2xl shadow-xl bg-white/10 backdrop-blur-md border border-gray-300"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <Canvas
            shadows
            camera={{ position: [3, 2, 5], fov: 50 }}
            style={{ borderRadius: 'inherit' }}
          >
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />
            <Suspense fallback={<ModelLoader />}>
              <BuildingModel />
            </Suspense>
            <OrbitControls
              enablePan={false}
              enableZoom={true}
              enableRotate={true}
              minDistance={3}
              maxDistance={10}
              autoRotate
              autoRotateSpeed={1.0}
            />
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
}
