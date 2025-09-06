import React, { useRef, useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutContent } from "./About";
import { VisionMissionContent } from "./VisionMission";
import { VandeBharatContent } from "./VandeBharat";
import { ServicesContent } from "./Services";
import Technology from "./Technology";
import Customers from "./Customers";
import Features from "./Features";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';

// Interactive 3D Background Component
const Interactive3DBackground = () => {
    const mountRef = useRef(null);
    const sceneRef = useRef(null);
    const rendererRef = useRef(null);
    const cameraRef = useRef(null);
    const modelRef = useRef(null);
    const animationIdRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const rimLight1Ref = useRef(null);
    const rimLight2Ref = useRef(null);
    const topGlowLightRef = useRef(null);
    const bottomGlowLightRef = useRef(null);
    const orangeInternalLightRef = useRef(null);
    const orangeCoreLightRef = useRef(null);
    const composerRef = useRef(null);
    const outlinePassRef = useRef(null);
    const outlinePass2Ref = useRef(null);
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

        // Setup post-processing composer
        const composer = new EffectComposer(renderer);
        composerRef.current = composer;

        // Add render pass
        const renderPass = new RenderPass(scene, camera);
        composer.addPass(renderPass);

        // Setup OutlinePass for blue soft glow
        const outlinePass = new OutlinePass(
            new THREE.Vector2(mountRef.current.clientWidth, mountRef.current.clientHeight),
            scene,
            camera
        );
        outlinePass.edgeStrength = 8.0;        // much stronger intensity for prominent glow
        outlinePass.edgeGlow = 3.0;            // increased glow intensity
        outlinePass.edgeThickness = 10.0;      // wider outline for more prominent glow
        outlinePass.pulsePeriod = 0;           // set >0 for pulsing
        outlinePass.visibleEdgeColor.set('#00ddff'); // brighter blue glow
        outlinePass.hiddenEdgeColor.set('#004466');  // subtle blue for hidden edges
        composer.addPass(outlinePass);
        outlinePassRef.current = outlinePass;

        // Add a second, larger outline pass for extended glow effect
        const outlinePass2 = new OutlinePass(
            new THREE.Vector2(mountRef.current.clientWidth, mountRef.current.clientHeight),
            scene,
            camera
        );
        outlinePass2.edgeStrength = 4.0;       // softer outer glow
        outlinePass2.edgeGlow = 4.0;           // strong glow spread
        outlinePass2.edgeThickness = 20.0;     // very wide for soft outer glow
        outlinePass2.pulsePeriod = 0;
        outlinePass2.visibleEdgeColor.set('#0088cc'); // slightly darker blue for outer glow
        outlinePass2.hiddenEdgeColor.set('#002244');
        composer.addPass(outlinePass2);
        outlinePass2Ref.current = outlinePass2;

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

        // Add subtle orange rim lighting for enhanced edge glow effect
        const rimLight1 = new THREE.PointLight(0xff6600, 2.0, 25);
        rimLight1.position.set(-5, 0, 8);
        scene.add(rimLight1);
        rimLight1Ref.current = rimLight1;

        const rimLight2 = new THREE.PointLight(0xff4400, 1.5, 20);
        rimLight2.position.set(5, 0, 8);
        scene.add(rimLight2);
        rimLight2Ref.current = rimLight2;

        // Add additional subtle glow lights from different angles
        const topGlowLight = new THREE.PointLight(0xff8844, 1.0, 18);
        topGlowLight.position.set(0, 8, 5);
        scene.add(topGlowLight);
        topGlowLightRef.current = topGlowLight;

        const bottomGlowLight = new THREE.PointLight(0xff5522, 0.8, 15);
        bottomGlowLight.position.set(0, -5, 5);
        scene.add(bottomGlowLight);
        bottomGlowLightRef.current = bottomGlowLight;

        // Subtle orange ambient lighting
        const orangeMainAmbient = new THREE.AmbientLight(0xff6600, 0.15);
        scene.add(orangeMainAmbient);

        // Add orange internal lighting for the blooming effect
        const orangeInternalLight = new THREE.PointLight(0xff4400, 2.0, 15);
        orangeInternalLight.position.set(0, 0, 0); // Center of the model
        scene.add(orangeInternalLight);
        orangeInternalLightRef.current = orangeInternalLight;

        const orangeCoreLight = new THREE.PointLight(0xff6600, 1.8, 12);
        orangeCoreLight.position.set(0, 0, 0); // Center of the model
        scene.add(orangeCoreLight);
        orangeCoreLightRef.current = orangeCoreLight;

        // Add stronger orange ambient for internal warmth
        const orangeAmbient = new THREE.AmbientLight(0xff4400, 0.15);
        scene.add(orangeAmbient);

        // Add atmospheric lights for spherical glow enhancement
        const atmosphericLight1 = new THREE.PointLight(0x0066ff, 1.5, 40);
        atmosphericLight1.position.set(0, 0, 20);
        scene.add(atmosphericLight1);

        const atmosphericLight2 = new THREE.PointLight(0x00aaff, 1.2, 35);
        atmosphericLight2.position.set(0, 0, -10);
        scene.add(atmosphericLight2);

        // Load GLTF Model
        const loader = new GLTFLoader();
        loader.load(
            '/models/battery-otp.glb',
            (gltf) => {
                const model = gltf.scene;

                // Responsive scaling based on screen size
                const isMobile = window.innerWidth < 768;
                const isTablet = window.innerWidth < 1024;
                
                if (isMobile) {
                    // Mobile: smaller scale and centered position to fit entire model
                    model.scale.set(10, 10, 10);
                    model.position.set(-3, -1, 0);
                } else if (isTablet) {
                    // Tablet: medium scale and slightly left position
                    model.scale.set(18, 18, 18);
                    model.position.set(-3, 2, 0);
                } else {
                    // Desktop: original scale and position
                    model.scale.set(28, 28, 28);
                    model.position.set(-8, 7, 0);
                }
                
                // Rotate model to lay completely flat (like technical drawing)
                model.rotation.x = -Math.PI / 2;
                model.rotation.y = 0;
                model.rotation.z = Math.PI / 2;

                // Create enhanced orange edge glow effect for model
                const edgeMaterial = new THREE.LineBasicMaterial({
                    color: 0xff6600,
                    transparent: true,
                    opacity: 0.4,
                    linewidth: 2
                });

                // Create additional outer glow layer
                const outerGlowMaterial = new THREE.LineBasicMaterial({
                    color: 0xff4400,
                    transparent: true,
                    opacity: 0.2,
                    linewidth: 3
                });

                // Create inner bright glow layer
                const innerGlowMaterial = new THREE.LineBasicMaterial({
                    color: 0xff8844,
                    transparent: true,
                    opacity: 0.3,
                    linewidth: 1
                });

                // Compute and log horizontal (x) size
                const box = new THREE.Box3().setFromObject(model);
                const size = new THREE.Vector3();
                box.getSize(size);
                console.log('Model horizontal (x) size:', size.x);
                
                // Enable shadows and add multi-layer edge glow effect to all meshes
                model.traverse((child) => {
                    if (child instanceof THREE.Mesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                        
                        // Create edge geometry for wireframe glow
                        const edges = new THREE.EdgesGeometry(child.geometry);
                        
                        // Create multiple glow layers for enhanced effect
                        // Outer glow layer (widest, most transparent)
                        const outerGlowLines = new THREE.LineSegments(edges, outerGlowMaterial);
                        outerGlowLines.position.copy(child.position);
                        outerGlowLines.rotation.copy(child.rotation);
                        outerGlowLines.scale.copy(child.scale);
                        outerGlowLines.scale.multiplyScalar(1.005); // Slightly larger
                        
                        // Main edge lines
                        const edgeLines = new THREE.LineSegments(edges, edgeMaterial);
                        edgeLines.position.copy(child.position);
                        edgeLines.rotation.copy(child.rotation);
                        edgeLines.scale.copy(child.scale);
                        
                        // Inner bright glow layer
                        const innerGlowLines = new THREE.LineSegments(edges, innerGlowMaterial);
                        innerGlowLines.position.copy(child.position);
                        innerGlowLines.rotation.copy(child.rotation);
                        innerGlowLines.scale.copy(child.scale);
                        innerGlowLines.scale.multiplyScalar(0.998); // Slightly smaller

                        // Create orange internal glow effect
                        const orangeInternalMaterial = new THREE.MeshBasicMaterial({
                            color: 0xff4400,
                            transparent: true,
                            opacity: 0.25,
                            side: THREE.DoubleSide,
                            blending: THREE.AdditiveBlending,
                            depthWrite: false
                        });

                        const orangeInternalGlow = new THREE.Mesh(child.geometry.clone(), orangeInternalMaterial);
                        orangeInternalGlow.position.copy(child.position);
                        orangeInternalGlow.rotation.copy(child.rotation);
                        orangeInternalGlow.scale.copy(child.scale);
                        orangeInternalGlow.scale.multiplyScalar(0.98); // Slightly smaller for internal effect

                        // Create secondary orange glow layer - more visible
                        const orangeSecondaryMaterial = new THREE.MeshBasicMaterial({
                            color: 0xff6600,
                            transparent: true,
                            opacity: 0.2,
                            side: THREE.DoubleSide,
                            blending: THREE.AdditiveBlending,
                            depthWrite: false
                        });

                        const orangeSecondaryGlow = new THREE.Mesh(child.geometry.clone(), orangeSecondaryMaterial);
                        orangeSecondaryGlow.position.copy(child.position);
                        orangeSecondaryGlow.rotation.copy(child.rotation);
                        orangeSecondaryGlow.scale.copy(child.scale);
                        orangeSecondaryGlow.scale.multiplyScalar(0.95); // Larger for more visibility
                        
                        // Add all glow layers to the same parent as the original mesh
                        if (child.parent) {
                            child.parent.add(outerGlowLines);
                            child.parent.add(edgeLines);
                            child.parent.add(innerGlowLines);
                            child.parent.add(orangeInternalGlow);
                            child.parent.add(orangeSecondaryGlow);
                        }
                    }
                });

                scene.add(model);
                modelRef.current = model;
                
                // Add model to outline passes for blue glow effect
                if (outlinePassRef.current && outlinePass2Ref.current) {
                    const meshes = [];
                    model.traverse((child) => {
                        if (child instanceof THREE.Mesh) {
                            meshes.push(child);
                        }
                    });
                    outlinePassRef.current.selectedObjects = meshes;
                    outlinePass2Ref.current.selectedObjects = meshes;
                }
                
                // Create spherical glow effect around the model (subtle and matching colors)
                const glowSphereGeometry = new THREE.SphereGeometry(15, 32, 32);
                
                // Create multiple concentric glow spheres with matching blue colors
                const glowMaterials = [
                    new THREE.ShaderMaterial({
                        uniforms: {
                            time: { value: 0 },
                            opacity: { value: 0.06 }
                        },
                        vertexShader: `
                            varying vec3 vNormal;
                            varying vec3 vPosition;
                            void main() {
                                vNormal = normalize(normalMatrix * normal);
                                vPosition = position;
                                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                            }
                        `,
                        fragmentShader: `
                            uniform float time;
                            uniform float opacity;
                            varying vec3 vNormal;
                            varying vec3 vPosition;
                            void main() {
                                float intensity = pow(0.8 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 1.5);
                                vec3 glow = vec3(0.0, 0.6, 1.0) * intensity; // Matching 0x0099ff
                                float pulse = sin(time * 1.5) * 0.2 + 0.8;
                                gl_FragColor = vec4(glow * pulse, opacity * intensity);
                            }
                        `,
                        side: THREE.BackSide,
                        blending: THREE.AdditiveBlending,
                        transparent: true
                    }),
                    new THREE.ShaderMaterial({
                        uniforms: {
                            time: { value: 0 },
                            opacity: { value: 0.04 }
                        },
                        vertexShader: `
                            varying vec3 vNormal;
                            void main() {
                                vNormal = normalize(normalMatrix * normal);
                                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                            }
                        `,
                        fragmentShader: `
                            uniform float time;
                            uniform float opacity;
                            varying vec3 vNormal;
                            void main() {
                                float intensity = pow(0.9 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
                                vec3 glow = vec3(0.0, 0.47, 0.8) * intensity; // Matching 0x0077cc
                                float pulse = sin(time * 1.0 + 0.5) * 0.15 + 0.85;
                                gl_FragColor = vec4(glow * pulse, opacity * intensity);
                            }
                        `,
                        side: THREE.BackSide,
                        blending: THREE.AdditiveBlending,
                        transparent: true
                    }),
                    new THREE.ShaderMaterial({
                        uniforms: {
                            time: { value: 0 },
                            opacity: { value: 0.03 }
                        },
                        vertexShader: `
                            varying vec3 vNormal;
                            void main() {
                                vNormal = normalize(normalMatrix * normal);
                                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                            }
                        `,
                        fragmentShader: `
                            uniform float time;
                            uniform float opacity;
                            varying vec3 vNormal;
                            void main() {
                                float intensity = pow(0.95 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
                                vec3 glow = vec3(0.0, 0.73, 1.0) * intensity; // Matching 0x00bbff
                                float pulse = sin(time * 0.8 + 1.0) * 0.1 + 0.9;
                                gl_FragColor = vec4(glow * pulse, opacity * intensity);
                            }
                        `,
                        side: THREE.BackSide,
                        blending: THREE.AdditiveBlending,
                        transparent: true
                    })
                ];

                // Create and add glow spheres
                const glowSpheres = [];
                glowMaterials.forEach((material, index) => {
                    const scale = 1 + (index * 0.3); // Different sizes for layered effect
                    const glowSphere = new THREE.Mesh(glowSphereGeometry, material);
                    glowSphere.scale.setScalar(scale);
                    
                    // Position glow sphere at the model's center
                    glowSphere.position.copy(model.position);
                    scene.add(glowSphere);
                    glowSpheres.push(glowSphere);
                });

                // Store glow spheres for animation
                modelRef.current.glowSpheres = glowSpheres;
                modelRef.current.glowMaterials = glowMaterials;
                
                // Create floating particles system
                const particleCount = 800; // Increased from 150 to 500
                const particleGeometry = new THREE.BufferGeometry();
                const particlePositions = new Float32Array(particleCount * 3);
                const particleVelocities = new Float32Array(particleCount * 3);
                const particleSizes = new Float32Array(particleCount);
                
                // Initialize particle positions and velocities
                for (let i = 0; i < particleCount; i++) {
                    const i3 = i * 3;
                    
                    // Random positions around the model (wider area)
                    particlePositions[i3] = (Math.random() - 0.5) * 80;     // x - increased range
                    particlePositions[i3 + 1] = (Math.random() - 0.5) * 60; // y - increased range
                    particlePositions[i3 + 2] = (Math.random() - 0.5) * 50; // z - increased range
                    
                    // Faster random velocities
                    particleVelocities[i3] = (Math.random() - 0.5) * 0.15;     // x velocity - increased speed
                    particleVelocities[i3 + 1] = (Math.random() - 0.5) * 0.12; // y velocity - increased speed
                    particleVelocities[i3 + 2] = (Math.random() - 0.5) * 0.08;  // z velocity - increased speed
                    
                    // Random sizes with more variation
                    particleSizes[i] = Math.random() * 0.8 + 0.1;
                }
                
                particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
                particleGeometry.setAttribute('size', new THREE.BufferAttribute(particleSizes, 1));
                
                // Create particle material with subtle glow
                const particleMaterial = new THREE.ShaderMaterial({
                    uniforms: {
                        time: { value: 0 },
                        pixelRatio: { value: window.devicePixelRatio }
                    },
                    vertexShader: `
                        uniform float time;
                        uniform float pixelRatio;
                        attribute float size;
                        varying float vOpacity;
                        varying vec3 vColor;
                        
                        void main() {
                            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                            
                            // Calculate distance-based opacity
                            float distance = length(mvPosition.xyz);
                            vOpacity = 1.0 / (1.0 + distance * 0.1);
                            
                            // Subtle color variation based on position
                            float colorMix = sin(position.x * 0.1 + time) * 0.5 + 0.5;
                            vColor = mix(vec3(0.0, 0.6, 1.0), vec3(0.0, 0.8, 0.9), colorMix);
                            
                            // Size based on distance and time
                            float finalSize = size * (6.0 + sin(time + position.x * 0.1) * 2.0);
                            gl_PointSize = finalSize * pixelRatio;
                            
                            gl_Position = projectionMatrix * mvPosition;
                        }
                    `,
                    fragmentShader: `
                        uniform float time;
                        varying float vOpacity;
                        varying vec3 vColor;
                        
                        void main() {
                            // Create circular particles with soft edges
                            vec2 coord = gl_PointCoord - vec2(0.5);
                            float distance = length(coord);
                            
                            if (distance > 0.5) discard;
                            
                            // Soft circular falloff
                            float alpha = 1.0 - smoothstep(0.2, 0.5, distance);
                            alpha *= vOpacity;
                            
                            // Subtle pulsing effect
                            alpha *= 0.3 + sin(time * 2.0) * 0.1;
                            
                            gl_FragColor = vec4(vColor, alpha);
                        }
                    `,
                    transparent: true,
                    blending: THREE.AdditiveBlending,
                    depthWrite: false
                });
                
                const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
                scene.add(particleSystem);
                
                // Store particle system and velocities for animation
                modelRef.current.particleSystem = particleSystem;
                modelRef.current.particleVelocities = particleVelocities;
                modelRef.current.particleMaterial = particleMaterial;
                
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

                // Responsive base positions
                const isMobile = window.innerWidth < 768;
                const isTablet = window.innerWidth < 1024;
                
                let baseX, baseY;
                if (isMobile) {
                    baseX = -3;
                    baseY = -1;
                } else if (isTablet) {
                    baseX = -3;
                    baseY = 2;
                } else {
                    baseX = -8;
                    baseY = 2;
                }

                // Mouse interaction - subtle movement (offset from initial position)
                const targetX = baseX + (mouse.x * 2); // Keep the base offset and add mouse movement
                const targetY = baseY + (mouse.y * 1); // Keep the base offset and add mouse movement

                // Keep model at fixed position with subtle mouse interaction only
                model.position.x += (targetX - model.position.x) * 0.02;
                model.position.y += (targetY - model.position.y) * 0.02;

                // Animate subtle orange edge glow effect intensity
                model.traverse((child) => {
                    if (child instanceof THREE.LineSegments && child.material && child.material.color) {
                        const colorHex = child.material.color.getHex();
                        const mouseInfluence = (Math.abs(mouse.x) + Math.abs(mouse.y)) * 0.2; // Reduced mouse influence
                        
                        // Animate different glow layers with subtle patterns
                        if (colorHex === 0xff6600) {
                            // Main edge glow - gentle pulsing
                            const pulseIntensity = 0.3 + Math.sin(time * 2) * 0.1;
                            child.material.opacity = Math.min(0.5, pulseIntensity + mouseInfluence);
                        } else if (colorHex === 0xff4400) {
                            // Outer glow - very soft pulsing
                            const pulseIntensity = 0.15 + Math.sin(time * 1.5) * 0.05;
                            child.material.opacity = Math.min(0.25, pulseIntensity + mouseInfluence * 0.3);
                        } else if (colorHex === 0xff8844) {
                            // Inner bright glow - subtle pulsing
                            const pulseIntensity = 0.2 + Math.sin(time * 2.5) * 0.1;
                            child.material.opacity = Math.min(0.4, pulseIntensity + mouseInfluence * 0.5);
                        }
                    }

                    // Animate orange internal glow meshes
                    if (child instanceof THREE.Mesh && child.material && child.material.color) {
                        const colorHex = child.material.color.getHex();
                        const mouseInfluence = (Math.abs(mouse.x) + Math.abs(mouse.y)) * 0.3;
                        
                        if (colorHex === 0xff4400) {
                            // Primary orange internal glow - reduced pulsing
                            const pulseIntensity = 0.2 + Math.sin(time * 3 + Math.PI) * 0.1;
                            child.material.opacity = Math.min(0.4, pulseIntensity + mouseInfluence);
                        } else if (colorHex === 0xff6600) {
                            // Secondary orange glow - reduced core pulsing
                            const pulseIntensity = 0.15 + Math.sin(time * 4.5 + Math.PI) * 0.08;
                            child.material.opacity = Math.min(0.35, pulseIntensity + mouseInfluence * 0.6);
                        }
                    }
                });

                // Animate subtle spherical glow effect around the model
                if (model.glowSpheres && model.glowMaterials) {
                    model.glowSpheres.forEach((sphere, index) => {
                        // Update glow sphere position to follow model
                        sphere.position.copy(model.position);
                        
                        // Very subtle rotation for gentle movement
                        sphere.rotation.x += 0.002 * (index + 1);
                        sphere.rotation.y += 0.001 * (index + 1);
                        sphere.rotation.z += 0.0005 * (index + 1);
                        
                        // Gentle scale based on mouse interaction
                        const mouseDistance = Math.sqrt(mouse.x * mouse.x + mouse.y * mouse.y);
                        const baseScale = 1 + (index * 0.2); // Reduced scaling difference
                        const mouseScale = 1 + mouseDistance * 0.1; // Reduced mouse influence
                        sphere.scale.setScalar(baseScale * mouseScale);
                    });
                    
                    // Update shader uniforms for subtle animated glow
                    model.glowMaterials.forEach((material, index) => {
                        if (material.uniforms) {
                            material.uniforms.time.value = time;
                            
                            // Very subtle opacity changes based on mouse interaction
                            const mouseInfluence = (Math.abs(mouse.x) + Math.abs(mouse.y)) * 0.02; // Much reduced
                            const baseOpacity = [0.06, 0.04, 0.03][index]; // Lower base opacity
                            material.uniforms.opacity.value = baseOpacity + mouseInfluence;
                        }
                    });
                }
            }

            // Animate floating particles
            if (modelRef.current && modelRef.current.particleSystem) {
                const particleSystem = modelRef.current.particleSystem;
                const velocities = modelRef.current.particleVelocities;
                const positions = particleSystem.geometry.attributes.position.array;
                
                // Update particle positions with faster movement
                for (let i = 0; i < positions.length; i += 3) {
                    positions[i] += velocities[i];         // x
                    positions[i + 1] += velocities[i + 1]; // y
                    positions[i + 2] += velocities[i + 2]; // z
                    
                    // Boundary checks - wrap particles around (larger boundaries)
                    if (positions[i] > 40) positions[i] = -40;
                    if (positions[i] < -40) positions[i] = 40;
                    if (positions[i + 1] > 30) positions[i + 1] = -30;
                    if (positions[i + 1] < -30) positions[i + 1] = 30;
                    if (positions[i + 2] > 25) positions[i + 2] = -25;
                    if (positions[i + 2] < -25) positions[i + 2] = 25;
                }
                
                // Mark positions as needing update
                particleSystem.geometry.attributes.position.needsUpdate = true;
                
                // Update particle material time uniform for faster animation
                if (modelRef.current.particleMaterial) {
                    modelRef.current.particleMaterial.uniforms.time.value = time;
                }
            }

            // Animate rim lights for subtle dynamic glow
            if (rimLight1Ref.current) {
                rimLight1Ref.current.intensity = 1.5 + Math.sin(time * 1.5) * 0.5; // Gentler intensity range
                rimLight1Ref.current.position.x = -5 + Math.sin(time * 1.0) * 1.5; // Slower, smaller movement
                rimLight1Ref.current.position.y = Math.cos(time * 1.2) * 1.0;
            }
            if (rimLight2Ref.current) {
                rimLight2Ref.current.intensity = 1.0 + Math.cos(time * 1.8) * 0.4;
                rimLight2Ref.current.position.x = 5 + Math.cos(time * 0.8) * 1.5;
                rimLight2Ref.current.position.y = Math.sin(time * 1.0) * 1.0;
            }

            // Animate additional glow lights subtly
            if (topGlowLightRef.current) {
                topGlowLightRef.current.intensity = 0.8 + Math.sin(time * 2.0) * 0.3;
                topGlowLightRef.current.position.x = Math.sin(time * 0.8) * 2.0;
            }
            if (bottomGlowLightRef.current) {
                bottomGlowLightRef.current.intensity = 0.6 + Math.cos(time * 1.5) * 0.2;
                bottomGlowLightRef.current.position.x = Math.cos(time * 1.0) * 1.5;
            }

            // Animate orange internal lights for blooming effect
            if (orangeInternalLightRef.current && modelRef.current) {
                // Position orange lights at the model center
                orangeInternalLightRef.current.position.copy(modelRef.current.position);
                orangeInternalLightRef.current.intensity = 1.8 + Math.sin(time * 3.5 + Math.PI) * 0.7;
            }
            if (orangeCoreLightRef.current && modelRef.current) {
                orangeCoreLightRef.current.position.copy(modelRef.current.position);
                orangeCoreLightRef.current.intensity = 1.5 + Math.sin(time * 4.5 + Math.PI) * 0.6;
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

            // Use composer for rendering with post-processing effects
            if (composerRef.current) {
                composerRef.current.render();
            } else {
                renderer.render(scene, camera);
            }
        };

        animate();

        // Handle resize
        const handleResize = () => {
            if (!mountRef.current || !camera || !renderer) return;

            camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
            
            // Update composer size for post-processing
            if (composerRef.current) {
                composerRef.current.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
            }
            
            // Update outline pass sizes
            if (outlinePassRef.current) {
                outlinePassRef.current.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
            }
            if (outlinePass2Ref.current) {
                outlinePass2Ref.current.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
            }
            
            // Reposition model based on new screen size
            if (modelRef.current) {
                const model = modelRef.current;
                const isMobile = window.innerWidth < 768;
                const isTablet = window.innerWidth < 1024;
                
                if (isMobile) {
                    model.scale.set(10, 10, 10);
                    model.position.set(-3, -1, 0);
                } else if (isTablet) {
                    model.scale.set(18, 18, 18);
                    model.position.set(-3, 2, 0);
                } else {
                    model.scale.set(28, 28, 28);
                    model.position.set(-8, 7, 0);
                }
            }
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
            
           {/* Text Overlay - NEXUS ENERGY */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                    <h1 className="text-[#00ddff] font-thin tracking-[0.2em] text-2xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 uppercase"
                        style={{ 
                            fontFamily: 'LOGOTYPE Medium, Arial, sans-serif',
                            textShadow: '0 0 20px rgba(0, 221, 255, 0.5), 0 0 40px rgba(0, 221, 255, 0.3)',
                            letterSpacing: '0.5em'
                        }}>
                        NEXUS ENERGY
                    </h1>
                    <p className="text-[#00aacc] font-thin tracking-[0.15em] text-[10px] md:text-xs lg:text-sm xl:text-base uppercase opacity-80"
                       style={{ 
                           fontFamily: 'LOGOTYPE Medium, Arial, sans-serif',
                           letterSpacing: '0.2em',
                           textShadow: '0 0 10px rgba(0, 170, 204, 0.4)'
                       }}>
                        ELECTROCHEMICAL SUSTAINABLE ENERGY TRANSFORMATION
                    </p>
                </div>
            </div>
            
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
      <Navbar />
      
      {/* 3D Model Section - Hero Section Only */}
      <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
        <Interactive3DBackground />
      </section>

      {/* About Content Section */}
      <div className="relative z-10 bg-white">
        <AboutContent />
      </div>
      
      {/* Vision Mission Section */}
      <div className="relative z-10 bg-white">
        <VisionMissionContent />
      </div>
      
      {/* Vande Bharat Section */}
      <div className="relative z-10">
        <VandeBharatContent />
      </div>
      
      {/* Services Section */}
      <div className="relative z-10 bg-white">
        <ServicesContent />
      </div>
      

            {/* Technology Section */}
            <div className="relative z-10">
                <Technology />
            </div>


            {/* Features Section */}
            <div className="relative z-10">
                <Features />
            </div>

            {/* Customers Section */}
            <div className="relative z-10">
                <Customers />
            </div>

            {/* Footer */}
            <div className="relative z-10">
                <Footer />
            </div>
    </div>
  );
};

export default Index;
