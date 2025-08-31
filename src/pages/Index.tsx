import React, { useRef, useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutContent } from "./About";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Interactive 3D Background Component
const Interactive3DBackground = () => {
    const mountRef = useRef(null);
    const sceneRef = useRef(null);
    const rendererRef = useRef(null);
    const cameraRef = useRef(null);
    const modelRef = useRef(null);
    const animationIdRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0a0a);
        sceneRef.current = scene;

        // Camera setup
        const camera = new THREE.PerspectiveCamera(
            75,
            mountRef.current.clientWidth / mountRef.current.clientHeight,
            0.1,
            1000
        );
        camera.position.set(0, 0, 15);
        cameraRef.current = camera;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        rendererRef.current = renderer;

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
        directionalLight.position.set(5, 5, 5);
        directionalLight.castShadow = true;
        scene.add(directionalLight);

        const pointLight = new THREE.PointLight(0x8b5cf6, 1.0, 20);
        pointLight.position.set(0, 0, 10);
        scene.add(pointLight);

        // Load GLTF Model
        const loader = new GLTFLoader();
        loader.load(
            '/models/battery-otp.glb',
            (gltf) => {
                const model = gltf.scene;

                // Scale and position the model
                model.scale.set(28, 28, 28);
                model.position.set(-8, 7, 0);  // Shift model further to the left and up
                // Rotate model to lay completely flat (like technical drawing)
                model.rotation.x = -Math.PI / 2;
                model.rotation.y = 0;
                model.rotation.z = Math.PI / 2;

                // Compute and log horizontal (x) size
                const box = new THREE.Box3().setFromObject(model);
                const size = new THREE.Vector3();
                box.getSize(size);
                console.log('Model horizontal (x) size:', size.x);
                // Enable shadows for all meshes
                model.traverse((child) => {
                    if (child instanceof THREE.Mesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });

                scene.add(model);
                modelRef.current = model;
                setIsLoading(false);
            },
            (progress) => {
                console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
            },
            (error) => {
                console.error('Error loading model:', error);
                setIsLoading(false);
            }
        );

        // Mouse interaction
        const handleMouseMove = (event) => {
            mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener('mousemove', handleMouseMove);

        mountRef.current.appendChild(renderer.domElement);

        // Animation loop
        // Animation system with zoom state tracker
        let zoomStarted = false;
        
        const animate = () => {
            animationIdRef.current = requestAnimationFrame(animate);

            const time = Date.now() * 0.001;
            const mouse = mouseRef.current;

            if (modelRef.current) {
                const model = modelRef.current;

                // Mouse interaction - subtle movement (offset from initial position)
                const baseX = -8;
                const baseY = 2;
                const targetX = baseX + (mouse.x * 2); // Keep the left offset (-8) and add mouse movement
                const targetY = baseY + (mouse.y * 1); // Keep the up offset (2) and add mouse movement

                // Smoothly interpolate to target position (without cumulative drift)
                model.position.x += (targetX - model.position.x) * 0.02;
                model.position.y += (targetY - model.position.y) * 0.02;

                // Gentle floating motion (additive, not cumulative)
                model.position.y += Math.sin(time * 2) * 0.01;
            }

            // Camera zoom-in effect on load
            // Start further away and animate to target z
            const targetZ = 15;
            if (!zoomStarted) {
                camera.position.z = 30;
                zoomStarted = true;
            }
            if (camera.position.z > targetZ) {
                camera.position.z -= (camera.position.z - targetZ) * 0.08;
                if (Math.abs(camera.position.z - targetZ) < 0.01) {
                    camera.position.z = targetZ;
                }
            }

            // Move camera slightly based on mouse
            camera.position.x = mouse.x * 3;
            camera.position.y = mouse.y * 2;
            camera.lookAt(0, 0, 0);

            // Animate point light based on mouse
            pointLight.position.x = mouse.x * 15;
            pointLight.position.y = mouse.y * 10;

            renderer.render(scene, camera);
        };

        animate();

        // Handle resize
        const handleResize = () => {
            if (!mountRef.current || !camera || !renderer) return;

            camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full z-0">
            <div
                ref={mountRef}
                className="w-full h-full"
                style={{ touchAction: 'none' }}
            />
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <div className="text-white text-lg">Loading 3D Model...</div>
                </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5" />
        </div>
    );
};

const Index = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <Navbar 
        title="Nexus Energy Solutions - Powering Tomorrow's World"
        description="Leading provider of innovative battery systems and energy storage solutions for a sustainable future."
      />
      
      {/* 3D Model Section - Hero Section Only */}
      <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
        <Interactive3DBackground />
      </section>

      {/* About Content Section */}
      <div className="relative z-10 bg-white">
        <AboutContent />
      </div>
      
      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
