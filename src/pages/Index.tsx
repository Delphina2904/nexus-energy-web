import React, { useRef, useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutContent } from "./About";
import { VisionMissionContent } from "./VisionMission";
import { VandeBharatContent } from "./VandeBharat";
import { ServicesContent } from "./Services";
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
    const rimLight1Ref = useRef(null);
    const rimLight2Ref = useRef(null);
    const topGlowLightRef = useRef(null);
    const bottomGlowLightRef = useRef(null);
    const orangeRimLight1Ref = useRef(null);
    const orangeRimLight2Ref = useRef(null);
    const orangeBloomLight1Ref = useRef(null);
    const orangeBloomLight2Ref = useRef(null);
    const orangeCoreLight1Ref = useRef(null);
    const orangeCoreLight2Ref = useRef(null);
    const orangePerimeterLight1Ref = useRef(null);
    const orangePerimeterLight2Ref = useRef(null);
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

        // Enhanced lighting system for intense orange bloom visibility
        
        // Blue rim lights for outer edge enhancement (further from model)
        const rimLight1 = new THREE.PointLight(0x00ddff, 3.0, 25);
        rimLight1.position.set(-6, 0, 12);
        scene.add(rimLight1);
        rimLight1Ref.current = rimLight1;

        const rimLight2 = new THREE.PointLight(0x0099ff, 2.5, 20);
        rimLight2.position.set(6, 0, 12);
        scene.add(rimLight2);
        rimLight2Ref.current = rimLight2;

        // Intense orange bloom lights for maximum inner glow visibility
        const orangeBloomLight1 = new THREE.PointLight(0xff6600, 6.0, 20); // Much brighter
        orangeBloomLight1.position.set(0, 0, 2); // Very close to model core
        scene.add(orangeBloomLight1);
        orangeBloomLight1Ref.current = orangeBloomLight1;

        const orangeBloomLight2 = new THREE.PointLight(0xff4400, 5.5, 18);
        orangeBloomLight2.position.set(0, 0, 0); // At model center
        scene.add(orangeBloomLight2);
        orangeBloomLight2Ref.current = orangeBloomLight2;

        // Additional orange core lights for deep penetration
        const orangeCoreLight1 = new THREE.PointLight(0xff7700, 4.0, 15);
        orangeCoreLight1.position.set(0, 0, -2); // Behind model
        scene.add(orangeCoreLight1);
        orangeCoreLight1Ref.current = orangeCoreLight1;

        const orangeCoreLight2 = new THREE.PointLight(0xff5500, 3.5, 12);
        orangeCoreLight2.position.set(0, 0, 1); // Inside model space
        scene.add(orangeCoreLight2);
        orangeCoreLight2Ref.current = orangeCoreLight2;

        // Directional orange lights for bloom diffusion and edge bleeding
        const orangeRimLight1 = new THREE.PointLight(0xff8833, 4.5, 25);
        orangeRimLight1.position.set(-3, 4, 3);
        scene.add(orangeRimLight1);
        orangeRimLight1Ref.current = orangeRimLight1;

        const orangeRimLight2 = new THREE.PointLight(0xff6633, 4.0, 22);
        orangeRimLight2.position.set(3, -4, 3);
        scene.add(orangeRimLight2);
        orangeRimLight2Ref.current = orangeRimLight2;

        // Perimeter orange lights for edge glow visibility
        const orangePerimeterLight1 = new THREE.PointLight(0xff9944, 3.0, 18);
        orangePerimeterLight1.position.set(4, 0, 6);
        scene.add(orangePerimeterLight1);
        orangePerimeterLight1Ref.current = orangePerimeterLight1;

        const orangePerimeterLight2 = new THREE.PointLight(0xff7733, 2.8, 16);
        orangePerimeterLight2.position.set(-4, 0, 6);
        scene.add(orangePerimeterLight2);
        orangePerimeterLight2Ref.current = orangePerimeterLight2;

        // Additional atmosphere lights
        const topGlowLight = new THREE.PointLight(0x44aaff, 1.5, 20);
        topGlowLight.position.set(0, 8, 8);
        scene.add(topGlowLight);
        topGlowLightRef.current = topGlowLight;

        const bottomGlowLight = new THREE.PointLight(0x2288cc, 1.2, 18);
        bottomGlowLight.position.set(0, -5, 8);
        scene.add(bottomGlowLight);
        bottomGlowLightRef.current = bottomGlowLight;

        // Enhanced dual ambient lighting for maximum bloom visibility
        const blueAmbient = new THREE.AmbientLight(0x003366, 0.1); // Reduced blue ambient
        scene.add(blueAmbient);

        const orangeAmbient = new THREE.AmbientLight(0x442200, 0.4); // Much stronger orange ambient
        scene.add(orangeAmbient);

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

                // Create layered glow system: Multiple orange bloom layers deep inside core, Blue edges outside
                
                // Multiple inner orange blooming materials (deep inside model core only)
                const orangeDeepestCoreMaterial = new THREE.MeshBasicMaterial({
                    color: 0xff7700,
                    transparent: true,
                    opacity: 0.95,
                    side: THREE.BackSide
                });

                const orangeDeepCoreMaterial = new THREE.MeshBasicMaterial({
                    color: 0xff6600,
                    transparent: true,
                    opacity: 0.9,
                    side: THREE.BackSide
                });

                const orangeCoreBloomMaterial = new THREE.MeshBasicMaterial({
                    color: 0xff4400,
                    transparent: true,
                    opacity: 0.8,
                    side: THREE.BackSide
                });

                const orangeInnerBloomMaterial = new THREE.MeshBasicMaterial({
                    color: 0xcc3300,
                    transparent: true,
                    opacity: 0.7,
                    side: THREE.BackSide
                });

                const orangeMidBloomMaterial = new THREE.MeshBasicMaterial({
                    color: 0xff5500,
                    transparent: true,
                    opacity: 0.6,
                    side: THREE.BackSide
                });

                const orangeInnerMidBloomMaterial = new THREE.MeshBasicMaterial({
                    color: 0xff8800,
                    transparent: true,
                    opacity: 0.5,
                    side: THREE.BackSide
                });

                const orangeOuterMidBloomMaterial = new THREE.MeshBasicMaterial({
                    color: 0xff6633,
                    transparent: true,
                    opacity: 0.4,
                    side: THREE.BackSide
                });

                const orangeFinalBloomMaterial = new THREE.MeshBasicMaterial({
                    color: 0xff9955,
                    transparent: true,
                    opacity: 0.3,
                    side: THREE.BackSide
                });

                // Outer blue edge materials (wireframe/edges)
                const blueEdgeMaterial = new THREE.LineBasicMaterial({
                    color: 0x00ddff,
                    transparent: true,
                    opacity: 1.0,
                    linewidth: 3
                });

                const blueOuterEdgeMaterial = new THREE.LineBasicMaterial({
                    color: 0x0099ff,
                    transparent: true,
                    opacity: 0.7,
                    linewidth: 5
                });

                const blueGlowEdgeMaterial = new THREE.LineBasicMaterial({
                    color: 0x66ddff,
                    transparent: true,
                    opacity: 0.5,
                    linewidth: 7
                });

                // Compute and log horizontal (x) size
                const box = new THREE.Box3().setFromObject(model);
                const size = new THREE.Vector3();
                box.getSize(size);
                console.log('Model horizontal (x) size:', size.x);
                
                // Enable shadows and add multiple layered orange blooms deep inside core only
                model.traverse((child) => {
                    if (child instanceof THREE.Mesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                        
                        // Create multiple orange blooming layers DEEP INSIDE the model core (8 layers for intense animation)
                        // Deepest core (innermost, brightest center)
                        const orangeDeepestCore = new THREE.Mesh(child.geometry.clone(), orangeDeepestCoreMaterial);
                        orangeDeepestCore.position.copy(child.position);
                        orangeDeepestCore.rotation.copy(child.rotation);
                        orangeDeepestCore.scale.copy(child.scale);
                        orangeDeepestCore.scale.multiplyScalar(0.65); // Deepest center
                        
                        // Deep core (second layer)
                        const orangeDeepCore = new THREE.Mesh(child.geometry.clone(), orangeDeepCoreMaterial);
                        orangeDeepCore.position.copy(child.position);
                        orangeDeepCore.rotation.copy(child.rotation);
                        orangeDeepCore.scale.copy(child.scale);
                        orangeDeepCore.scale.multiplyScalar(0.70); // Very deep inside
                        
                        // Core bloom layer (third layer)
                        const orangeCoreBloom = new THREE.Mesh(child.geometry.clone(), orangeCoreBloomMaterial);
                        orangeCoreBloom.position.copy(child.position);
                        orangeCoreBloom.rotation.copy(child.rotation);
                        orangeCoreBloom.scale.copy(child.scale);
                        orangeCoreBloom.scale.multiplyScalar(0.75); // Deep inside
                        
                        // Inner bloom layer (fourth layer)
                        const orangeInnerBloom = new THREE.Mesh(child.geometry.clone(), orangeInnerBloomMaterial);
                        orangeInnerBloom.position.copy(child.position);
                        orangeInnerBloom.rotation.copy(child.rotation);
                        orangeInnerBloom.scale.copy(child.scale);
                        orangeInnerBloom.scale.multiplyScalar(0.78); // Inside core
                        
                        // Mid bloom layer (fifth layer)
                        const orangeMidBloom = new THREE.Mesh(child.geometry.clone(), orangeMidBloomMaterial);
                        orangeMidBloom.position.copy(child.position);
                        orangeMidBloom.rotation.copy(child.rotation);
                        orangeMidBloom.scale.copy(child.scale);
                        orangeMidBloom.scale.multiplyScalar(0.82); // Mid core area
                        
                        // Inner mid bloom layer (sixth layer)
                        const orangeInnerMidBloom = new THREE.Mesh(child.geometry.clone(), orangeInnerMidBloomMaterial);
                        orangeInnerMidBloom.position.copy(child.position);
                        orangeInnerMidBloom.rotation.copy(child.rotation);
                        orangeInnerMidBloom.scale.copy(child.scale);
                        orangeInnerMidBloom.scale.multiplyScalar(0.85); // Expanding from core
                        
                        // Outer mid bloom layer (seventh layer)
                        const orangeOuterMidBloom = new THREE.Mesh(child.geometry.clone(), orangeOuterMidBloomMaterial);
                        orangeOuterMidBloom.position.copy(child.position);
                        orangeOuterMidBloom.rotation.copy(child.rotation);
                        orangeOuterMidBloom.scale.copy(child.scale);
                        orangeOuterMidBloom.scale.multiplyScalar(0.88); // Further from core
                        
                        // Final bloom layer (eighth layer - outermost but still inside)
                        const orangeFinalBloom = new THREE.Mesh(child.geometry.clone(), orangeFinalBloomMaterial);
                        orangeFinalBloom.position.copy(child.position);
                        orangeFinalBloom.rotation.copy(child.rotation);
                        orangeFinalBloom.scale.copy(child.scale);
                        orangeFinalBloom.scale.multiplyScalar(0.91); // Still well inside, no surface contact

                        // Create blue edge glow OUTSIDE the model (wireframe/edges only)
                        const edges = new THREE.EdgesGeometry(child.geometry);
                        
                        // Blue outer glow edges (widest, most diffuse)
                        const blueGlowEdges = new THREE.LineSegments(edges, blueGlowEdgeMaterial);
                        blueGlowEdges.position.copy(child.position);
                        blueGlowEdges.rotation.copy(child.rotation);
                        blueGlowEdges.scale.copy(child.scale);
                        blueGlowEdges.scale.multiplyScalar(1.012); // Outside only
                        
                        // Blue outer edges (medium outside)
                        const blueOuterEdges = new THREE.LineSegments(edges, blueOuterEdgeMaterial);
                        blueOuterEdges.position.copy(child.position);
                        blueOuterEdges.rotation.copy(child.rotation);
                        blueOuterEdges.scale.copy(child.scale);
                        blueOuterEdges.scale.multiplyScalar(1.008);
                        
                        // Blue main edges (just outside model surface)
                        const blueEdges = new THREE.LineSegments(edges, blueEdgeMaterial);
                        blueEdges.position.copy(child.position);
                        blueEdges.rotation.copy(child.rotation);
                        blueEdges.scale.copy(child.scale);
                        blueEdges.scale.multiplyScalar(1.004);
                        
                        // Add all layers: Multiple orange blooms deep inside core, Blue edges outside
                        if (child.parent) {
                            // Orange bloom layers (8 layers deep inside core - progressive animation)
                            child.parent.add(orangeDeepestCore);
                            child.parent.add(orangeDeepCore);
                            child.parent.add(orangeCoreBloom);
                            child.parent.add(orangeInnerBloom);
                            child.parent.add(orangeMidBloom);
                            child.parent.add(orangeInnerMidBloom);
                            child.parent.add(orangeOuterMidBloom);
                            child.parent.add(orangeFinalBloom);
                            // Blue edge layers (outside surface only)
                            child.parent.add(blueEdges);
                            child.parent.add(blueOuterEdges);
                            child.parent.add(blueGlowEdges);
                        }
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

                // Smoothly interpolate to target position (without cumulative drift)
                model.position.x += (targetX - model.position.x) * 0.02;
                model.position.y += (targetY - model.position.y) * 0.02;

                // Gentle floating motion (additive, not cumulative)
                model.position.y += Math.sin(time * 2) * 0.01;

                // Animate multiple deep core orange bloom layers with complex wave patterns
                model.traverse((child) => {
                    if (child instanceof THREE.Mesh && child.material && child.material.color) {
                        const colorHex = child.material.color.getHex();
                        const mouseInfluence = (Math.abs(mouse.x) + Math.abs(mouse.y)) * 0.6;
                        
                        // Animate 8 orange bloom layers with unique wave patterns for dynamic effect
                        if (colorHex === 0xff7700) {
                            // Deepest core - slow, powerful pulsing
                            const pulseIntensity = 0.8 + Math.sin(time * 1.5) * 0.2 + Math.cos(time * 0.8) * 0.1;
                            child.material.opacity = Math.min(1.0, pulseIntensity + mouseInfluence * 0.9);
                        } else if (colorHex === 0xff6600) {
                            // Deep core - medium pulsing with phase offset
                            const pulseIntensity = 0.7 + Math.sin(time * 2.2 + Math.PI/8) * 0.3 + Math.cos(time * 1.1) * 0.1;
                            child.material.opacity = Math.min(1.0, pulseIntensity + mouseInfluence * 0.8);
                        } else if (colorHex === 0xff4400) {
                            // Core bloom - strong pulsing with different wave
                            const pulseIntensity = 0.6 + Math.sin(time * 2.8 + Math.PI/6) * 0.3 + Math.cos(time * 1.4) * 0.1;
                            child.material.opacity = Math.min(0.95, pulseIntensity + mouseInfluence * 0.7);
                        } else if (colorHex === 0xcc3300) {
                            // Inner bloom - rapid pulsing
                            const pulseIntensity = 0.5 + Math.sin(time * 3.5 + Math.PI/4) * 0.3 + Math.cos(time * 1.7) * 0.1;
                            child.material.opacity = Math.min(0.9, pulseIntensity + mouseInfluence * 0.6);
                        } else if (colorHex === 0xff5500) {
                            // Mid bloom - complex wave pattern
                            const pulseIntensity = 0.4 + Math.sin(time * 2.1 + Math.PI/3) * 0.25 + Math.cos(time * 2.8) * 0.15;
                            child.material.opacity = Math.min(0.8, pulseIntensity + mouseInfluence * 0.5);
                        } else if (colorHex === 0xff8800) {
                            // Inner mid bloom - faster oscillation
                            const pulseIntensity = 0.35 + Math.sin(time * 4.2 + Math.PI/2) * 0.25 + Math.cos(time * 2.1) * 0.1;
                            child.material.opacity = Math.min(0.7, pulseIntensity + mouseInfluence * 0.5);
                        } else if (colorHex === 0xff6633) {
                            // Outer mid bloom - wave interference pattern
                            const pulseIntensity = 0.3 + Math.sin(time * 3.8 + Math.PI*2/3) * 0.2 + Math.cos(time * 1.9) * 0.15;
                            child.material.opacity = Math.min(0.6, pulseIntensity + mouseInfluence * 0.4);
                        } else if (colorHex === 0xff9955) {
                            // Final bloom - subtle breathing effect
                            const pulseIntensity = 0.25 + Math.sin(time * 1.8 + Math.PI*3/4) * 0.2 + Math.cos(time * 3.2) * 0.1;
                            child.material.opacity = Math.min(0.5, pulseIntensity + mouseInfluence * 0.4);
                        }
                    }
                    
                    // Animate blue edge materials (outside the model)
                    if (child instanceof THREE.LineSegments && child.material && child.material.color) {
                        const colorHex = child.material.color.getHex();
                        const mouseInfluence = (Math.abs(mouse.x) + Math.abs(mouse.y)) * 0.5;
                        
                        if (colorHex === 0x00ddff) {
                            // Main blue edges - sharp, defined pulsing
                            const pulseIntensity = 0.8 + Math.sin(time * 4) * 0.2;
                            child.material.opacity = Math.min(1.0, pulseIntensity + mouseInfluence);
                        } else if (colorHex === 0x0099ff) {
                            // Blue outer edges - medium glow
                            const pulseIntensity = 0.5 + Math.sin(time * 3.2) * 0.3;
                            child.material.opacity = Math.min(0.9, pulseIntensity + mouseInfluence * 0.7);
                        } else if (colorHex === 0x66ddff) {
                            // Blue glow edges - softest, widest glow
                            const pulseIntensity = 0.3 + Math.sin(time * 2.8) * 0.25;
                            child.material.opacity = Math.min(0.7, pulseIntensity + mouseInfluence * 0.5);
                        }
                    }
                });
            }

            // Animate lights for intense orange bloom visibility and blue edge definition
            
            // Blue rim lights (outside, for edge definition)
            if (rimLight1Ref.current) {
                rimLight1Ref.current.intensity = 2.5 + Math.sin(time * 3) * 1.0;
                rimLight1Ref.current.position.x = -6 + Math.sin(time * 1.5) * 2;
                rimLight1Ref.current.position.y = Math.cos(time * 2) * 1.5;
            }
            if (rimLight2Ref.current) {
                rimLight2Ref.current.intensity = 2.0 + Math.cos(time * 2.5) * 0.8;
                rimLight2Ref.current.position.x = 6 + Math.cos(time * 1.2) * 2;
                rimLight2Ref.current.position.y = Math.sin(time * 1.8) * 1.5;
            }

            // Intense orange bloom lights (inside, for maximum core glow)
            if (orangeBloomLight1Ref.current) {
                orangeBloomLight1Ref.current.intensity = 5.0 + Math.sin(time * 2.0) * 2.0; // Very bright, slow bloom
                orangeBloomLight1Ref.current.position.y = Math.cos(time * 1.5) * 0.8;
                orangeBloomLight1Ref.current.position.z = 2 + Math.sin(time * 1.3) * 0.5;
            }
            if (orangeBloomLight2Ref.current) {
                orangeBloomLight2Ref.current.intensity = 4.5 + Math.cos(time * 1.7 + Math.PI/3) * 1.8;
                orangeBloomLight2Ref.current.position.y = Math.sin(time * 1.8) * 0.8;
                orangeBloomLight2Ref.current.position.z = 0 + Math.cos(time * 1.6) * 0.3;
            }

            // Orange rim lights (medium distance, for bloom spread and edge bleeding)
            if (orangeRimLight1Ref.current) {
                orangeRimLight1Ref.current.intensity = 3.5 + Math.sin(time * 2.8 + Math.PI/4) * 1.5;
                orangeRimLight1Ref.current.position.x = -3 + Math.cos(time * 1.9) * 2;
                orangeRimLight1Ref.current.position.y = 4 + Math.sin(time * 2.1) * 1.5;
                orangeRimLight1Ref.current.position.z = 3 + Math.cos(time * 1.4) * 1;
            }
            if (orangeRimLight2Ref.current) {
                orangeRimLight2Ref.current.intensity = 3.2 + Math.cos(time * 2.4 + Math.PI/6) * 1.3;
                orangeRimLight2Ref.current.position.x = 3 + Math.sin(time * 1.7) * 2;
                orangeRimLight2Ref.current.position.y = -4 + Math.cos(time * 2.0) * 1.5;
                orangeRimLight2Ref.current.position.z = 3 + Math.sin(time * 1.8) * 1;
            }

            // Animate additional core and perimeter orange lights
            if (orangeCoreLight1Ref.current) {
                orangeCoreLight1Ref.current.intensity = 3.0 + Math.sin(time * 1.6 + Math.PI/2) * 1.2;
                orangeCoreLight1Ref.current.position.x = Math.cos(time * 1.1) * 1.5;
                orangeCoreLight1Ref.current.position.y = Math.sin(time * 1.4) * 1.2;
            }
            if (orangeCoreLight2Ref.current) {
                orangeCoreLight2Ref.current.intensity = 2.8 + Math.cos(time * 1.9 + Math.PI/5) * 1.0;
                orangeCoreLight2Ref.current.position.x = Math.sin(time * 1.3) * 1.2;
                orangeCoreLight2Ref.current.position.y = Math.cos(time * 1.7) * 1;
            }

            if (orangePerimeterLight1Ref.current) {
                orangePerimeterLight1Ref.current.intensity = 2.5 + Math.sin(time * 3.1) * 1.0;
                orangePerimeterLight1Ref.current.position.y = Math.cos(time * 2.2) * 2;
                orangePerimeterLight1Ref.current.position.z = 6 + Math.sin(time * 1.6) * 1;
            }
            if (orangePerimeterLight2Ref.current) {
                orangePerimeterLight2Ref.current.intensity = 2.3 + Math.cos(time * 2.7) * 0.9;
                orangePerimeterLight2Ref.current.position.y = Math.sin(time * 1.9) * 2;
                orangePerimeterLight2Ref.current.position.z = 6 + Math.cos(time * 1.8) * 1;
            }

            // Atmosphere lights (subtle background)
            if (topGlowLightRef.current) {
                topGlowLightRef.current.intensity = 1.3 + Math.sin(time * 3.2) * 0.5;
                topGlowLightRef.current.position.x = Math.sin(time * 1.3) * 3;
            }
            if (bottomGlowLightRef.current) {
                bottomGlowLightRef.current.intensity = 1.0 + Math.cos(time * 2.8) * 0.4;
                bottomGlowLightRef.current.position.x = Math.cos(time * 1.7) * 2.5;
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
      
      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
