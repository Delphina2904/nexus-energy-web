import React, { useRef, useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServicesContent } from "./Services";
import ServicesSection from "@/components/ServicesSection";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";
import BatteryAnimation from "@/components/BatteryAnimation";
import InnovationSection from "@/components/InnovationSection";
import EcosystemBenefits from "@/components/EcosystemBenefits";
import QuoteSection from "@/components/QuoteSection";
import ProductEcosystem from "@/components/ProductEcosystem";
import trainImage from "@/assets/vande.png";
import { GlowCard } from "@/components/GlowCard";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass.js";

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
  const isVisibleRef = useRef(false);
  const [batteryPercentage, setBatteryPercentage] = useState(0);

  useEffect(() => {
    if (!mountRef.current) return;

    // Smooth battery animation: 0 -> 100 in ~15 seconds (simulating 15 min)
    const chargeInterval = setInterval(() => {
      setBatteryPercentage((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 150);

    let animationIdRef = null;

    // Animation loop
    let zoomStarted = false;
    let startTime = null;

    let lastFpsTime = 0;
    let frameToggle = false; // update particles every other frame to reduce cost
    const animate = (now?: number) => {
      if (!isVisibleRef.current) {
        if (animationIdRef) {
          cancelAnimationFrame(animationIdRef);
          animationIdRef = null;
        }
        return;
      }

      // throttle to ~60fps
      const nowMs = now || performance.now();
      if (nowMs - lastFpsTime < 16) {
        animationIdRef = requestAnimationFrame(animate);
        return;
      }
      lastFpsTime = nowMs;

      animationIdRef = requestAnimationFrame(animate);

      // Don't start the timer until the model is loaded
      if (startTime === null && modelRef.current) {
        startTime = Date.now() * 0.001;
      }

      const time = startTime ? Date.now() * 0.001 - startTime : 0;
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
        const targetX = baseX + mouse.x * 2; // Keep the base offset and add mouse movement
        const targetY = baseY + mouse.y * 1; // Keep the base offset and add mouse movement

        // Keep model at fixed position with subtle mouse interaction only
        model.position.x += (targetX - model.position.x) * 0.02;
        model.position.y += (targetY - model.position.y) * 0.02;

        // Update transition materials with current time for color transitions
        if ((model as any).transitionMaterials) {
          (model as any).transitionMaterials.forEach((material: any) => {
            if (material.uniforms && material.uniforms.time) {
              material.uniforms.time.value = time;
            }
          });
        }

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
            const mouseDistance = Math.sqrt(
              mouse.x * mouse.x + mouse.y * mouse.y
            );
            const baseScale = 1 + index * 0.2; // Reduced scaling difference
            const mouseScale = 1 + mouseDistance * 0.1; // Reduced mouse influence
            sphere.scale.setScalar(baseScale * mouseScale);
          });

          // Update shader uniforms for subtle animated glow
          model.glowMaterials.forEach((material, index) => {
            if (material.uniforms) {
              material.uniforms.time.value = time;

              // Very subtle opacity changes based on mouse interaction
              const mouseInfluence =
                (Math.abs(mouse.x) + Math.abs(mouse.y)) * 0.02; // Much reduced
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

        // Update particle positions on alternate frames to reduce CPU
        frameToggle = !frameToggle;
        if (frameToggle) {
          for (let i = 0; i < positions.length; i += 3) {
            positions[i] += velocities[i];
            positions[i + 1] += velocities[i + 1];
            positions[i + 2] += velocities[i + 2];

            // Boundary checks - wrap particles around
            if (positions[i] > 40) positions[i] = -40;
            if (positions[i] < -40) positions[i] = 40;
            if (positions[i + 1] > 30) positions[i + 1] = -30;
            if (positions[i + 1] < -30) positions[i + 1] = 30;
            if (positions[i + 2] > 25) positions[i + 2] = -25;
            if (positions[i + 2] < -25) positions[i + 2] = 25;
          }
          particleSystem.geometry.attributes.position.needsUpdate = true;
        }

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
        orangeInternalLightRef.current.intensity =
          1.8 + Math.sin(time * 3.5 + Math.PI) * 0.7;
      }
      if (orangeCoreLightRef.current && modelRef.current) {
        orangeCoreLightRef.current.position.copy(modelRef.current.position);
        orangeCoreLightRef.current.intensity =
          1.5 + Math.sin(time * 4.5 + Math.PI) * 0.6;
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (isVisibleRef.current) {
          animate(); // Start animation when it becomes visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    observer.observe(mountRef.current);

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a2e);
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
      alpha: true,
      powerPreference: "high-performance",
      stencil: false,
      depth: true,
    });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    rendererRef.current = renderer;

    // Setup post-processing composer
    const composer = new EffectComposer(renderer);
    composerRef.current = composer;

    // Add render pass
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    // Setup OutlinePass for blue soft glow
    const outlinePass = new OutlinePass(
      new THREE.Vector2(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      ),
      scene,
      camera
    );
    //outlinePass.edgeStrength = 8.0;        // much stronger intensity for prominent glow
    outlinePass.edgeGlow = 3.0; // increased glow intensity
    outlinePass.edgeThickness = 10.0; // wider outline for more prominent glow
    outlinePass.pulsePeriod = 0; // set >0 for pulsing
    outlinePass.visibleEdgeColor.set("#00ddff"); // brighter blue glow
    outlinePass.hiddenEdgeColor.set("#004466"); // subtle blue for hidden edges
    composer.addPass(outlinePass);
    outlinePassRef.current = outlinePass;

    // Add a second, larger outline pass for extended glow effect
    const outlinePass2 = new OutlinePass(
      new THREE.Vector2(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      ),
      scene,
      camera
    );
    //outlinePass2.edgeStrength = 4.0;       // softer outer glow
    outlinePass2.edgeGlow = 4.0; // strong glow spread
    outlinePass2.edgeThickness = 5.0; // very wide for soft outer glow
    outlinePass2.pulsePeriod = 0;
    outlinePass2.visibleEdgeColor.set("#0088cc"); // slightly darker blue for outer glow
    outlinePass2.hiddenEdgeColor.set("#002244");
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
      "/models/battery-otp.glb",
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

        // Compute bounding box for positional animation
        const box = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        box.getSize(size);
        console.log("Model horizontal (x) size:", size.x);
        const boxMin = box.min;
        const boxMax = box.max;

        // Create materials for a looping left-to-right wipe transition
        const loopDuration = 10.0; // 10 seconds for a full wipe cycle

        // Main edge material with looping color transition shader
        const edgeMaterial = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            orangeColor: { value: new THREE.Color(0xff6600) },
            blueColor: { value: new THREE.Color(0x00aaff) },
            loopDuration: { value: loopDuration },
            boxMin: { value: boxMin },
            boxMax: { value: boxMax },
            opacity: { value: 0.8 },
          },
          vertexShader: `
                        varying vec3 vWorldPosition;
                        void main() {
                            vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                            vWorldPosition = worldPosition.xyz;
                            gl_Position = projectionMatrix * viewMatrix * worldPosition;
                        }
                    `,
          fragmentShader: `
                        uniform float time;
                        uniform vec3 orangeColor;
                        uniform vec3 blueColor;
                        uniform float loopDuration;
                        uniform vec3 boxMin;
                        uniform vec3 boxMax;
                        uniform float opacity;
                        varying vec3 vWorldPosition;
                        
                        void main() {
                            // Oscillating progress from 0.0 to 1.0 and back
                            float progress = (sin(time * (6.28318 / loopDuration) - 1.57079) + 1.0) / 2.0;
                            
                            // Map progress to the model's width to create a moving wipe edge
                            float wipeEdgeX = mix(boxMin.x, boxMax.x, progress);
                            
                            // Create a smooth transition band
                            float softness = 4.0; // Width of the soft transition area
                            float transition = smoothstep(wipeEdgeX - softness, wipeEdgeX + softness, vWorldPosition.x);
                            
                            vec3 currentColor = mix(orangeColor, blueColor, transition);
                            
                            // Add subtle pulsing effect
                            float pulse = sin(time * 2.0) * 0.1 + 0.9;
                            currentColor *= pulse;
                            
                            gl_FragColor = vec4(currentColor, opacity);
                        }
                    `,
          transparent: true,
          linewidth: 2,
        });

        // Outer glow material with looping transition
        const outerGlowMaterial = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            orangeColor: { value: new THREE.Color(0xff4400) }, // Darker orange
            blueColor: { value: new THREE.Color(0x0088cc) }, // Darker blue
            loopDuration: { value: loopDuration },
            boxMin: { value: boxMin },
            boxMax: { value: boxMax },
            opacity: { value: 0.3 },
          },
          vertexShader: `
                        varying vec3 vWorldPosition;
                        void main() {
                            vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                            vWorldPosition = worldPosition.xyz;
                            gl_Position = projectionMatrix * viewMatrix * worldPosition;
                        }
                    `,
          fragmentShader: `
                        uniform float time;
                        uniform vec3 orangeColor;
                        uniform vec3 blueColor;
                        uniform float loopDuration;
                        uniform vec3 boxMin;
                        uniform vec3 boxMax;
                        uniform float opacity;
                        varying vec3 vWorldPosition;
                        
                        void main() {
                            float progress = (sin(time * (6.28318 / loopDuration) - 1.57079) + 1.0) / 2.0;
                            float wipeEdgeX = mix(boxMin.x, boxMax.x, progress);
                            float softness = 4.0;
                            float transition = smoothstep(wipeEdgeX - softness, wipeEdgeX + softness, vWorldPosition.x);
                            vec3 currentColor = mix(orangeColor, blueColor, transition);
                            
                            float pulse = sin(time * 1.5) * 0.15 + 0.85;
                            currentColor *= pulse;
                            
                            gl_FragColor = vec4(currentColor, opacity);
                        }
                    `,
          transparent: true,
          linewidth: 3,
        });

        // Inner bright glow material with looping transition
        const innerGlowMaterial = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            orangeColor: { value: new THREE.Color(0xff8844) }, // Bright orange
            blueColor: { value: new THREE.Color(0x44ccff) }, // Bright blue
            loopDuration: { value: loopDuration },
            boxMin: { value: boxMin },
            boxMax: { value: boxMax },
            opacity: { value: 0.6 },
          },
          vertexShader: `
                        varying vec3 vWorldPosition;
                        void main() {
                            vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                            vWorldPosition = worldPosition.xyz;
                            gl_Position = projectionMatrix * viewMatrix * worldPosition;
                        }
                    `,
          fragmentShader: `
                        uniform float time;
                        uniform vec3 orangeColor;
                        uniform vec3 blueColor;
                        uniform float loopDuration;
                        uniform vec3 boxMin;
                        uniform vec3 boxMax;
                        uniform float opacity;
                        varying vec3 vWorldPosition;
                        
                        void main() {
                            float progress = (sin(time * (6.28318 / loopDuration) - 1.57079) + 1.0) / 2.0;
                            float wipeEdgeX = mix(boxMin.x, boxMax.x, progress);
                            float softness = 4.0;
                            float transition = smoothstep(wipeEdgeX - softness, wipeEdgeX + softness, vWorldPosition.x);
                            vec3 currentColor = mix(orangeColor, blueColor, transition);
                            
                            float pulse = sin(time * 3.0) * 0.2 + 0.8;
                            currentColor *= pulse;
                            
                            gl_FragColor = vec4(currentColor, opacity);
                        }
                    `,
          transparent: true,
          linewidth: 1,
        });

        // Enable shadows and add multi-layer edge glow effect to all meshes
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;

            // Create edge geometry for wireframe glow
            const edges = new THREE.EdgesGeometry(child.geometry);

            // Store transition materials for animation updates
            if (!(model as any).transitionMaterials)
              (model as any).transitionMaterials = [];
            (model as any).transitionMaterials.push(edgeMaterial);
            (model as any).transitionMaterials.push(outerGlowMaterial);
            (model as any).transitionMaterials.push(innerGlowMaterial);

            // Create multiple glow layers for enhanced effect
            // Outer glow layer (widest, most transparent)
            const outerGlowLines = new THREE.LineSegments(
              edges,
              outerGlowMaterial
            );
            outerGlowLines.position.copy(child.position);
            outerGlowLines.rotation.copy(child.rotation);
            outerGlowLines.scale.copy(child.scale);
            outerGlowLines.scale.multiplyScalar(1.005); // Slightly larger

            // Main edge lines with color transition
            const edgeLines = new THREE.LineSegments(edges, edgeMaterial);
            edgeLines.position.copy(child.position);
            edgeLines.rotation.copy(child.rotation);
            edgeLines.scale.copy(child.scale);

            // Inner bright glow layer
            const innerGlowLines = new THREE.LineSegments(
              edges,
              innerGlowMaterial
            );
            innerGlowLines.position.copy(child.position);
            innerGlowLines.rotation.copy(child.rotation);
            innerGlowLines.scale.copy(child.scale);
            innerGlowLines.scale.multiplyScalar(0.998); // Slightly smaller

            // Create internal glow effect with looping left-to-right wipe
            const orangeInternalMaterial = new THREE.ShaderMaterial({
              uniforms: {
                time: { value: 0 },
                orangeColor: { value: new THREE.Color(0xff4400) },
                blueColor: { value: new THREE.Color(0x0066aa) },
                loopDuration: { value: loopDuration },
                boxMin: { value: boxMin },
                boxMax: { value: boxMax },
                opacity: { value: 0.25 },
              },
              vertexShader: `
                                varying vec3 vWorldPosition;
                                void main() {
                                    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                                    vWorldPosition = worldPosition.xyz;
                                    gl_Position = projectionMatrix * viewMatrix * worldPosition;
                                }
                            `,
              fragmentShader: `
                                uniform float time;
                                uniform vec3 orangeColor;
                                uniform vec3 blueColor;
                                uniform float loopDuration;
                                uniform vec3 boxMin;
                                uniform vec3 boxMax;
                                uniform float opacity;
                                varying vec3 vWorldPosition;
                                
                                void main() {
                                    float progress = (sin(time * (6.28318 / loopDuration) - 1.57079) + 1.0) / 2.0;
                                    float wipeEdgeX = mix(boxMin.x, boxMax.x, progress);
                                    float softness = 4.0;
                                    float transition = smoothstep(wipeEdgeX - softness, wipeEdgeX + softness, vWorldPosition.x);
                                    vec3 currentColor = mix(orangeColor, blueColor, transition);
                                    
                                    // Internal glow pulsing
                                    float pulse = sin(time * 4.0) * 0.2 + 0.8;
                                    currentColor *= pulse;
                                    
                                    gl_FragColor = vec4(currentColor, opacity);
                                }
                            `,
              transparent: true,
              side: THREE.DoubleSide,
              blending: THREE.AdditiveBlending,
              depthWrite: false,
            });

            const orangeInternalGlow = new THREE.Mesh(
              child.geometry.clone(),
              orangeInternalMaterial
            );
            orangeInternalGlow.position.copy(child.position);
            orangeInternalGlow.rotation.copy(child.rotation);
            orangeInternalGlow.scale.copy(child.scale);
            orangeInternalGlow.scale.multiplyScalar(0.98); // Slightly smaller for internal effect

            // Create secondary internal glow with looping left-to-right wipe
            const orangeSecondaryMaterial = new THREE.ShaderMaterial({
              uniforms: {
                time: { value: 0 },
                orangeColor: { value: new THREE.Color(0xff6600) },
                blueColor: { value: new THREE.Color(0x0099dd) },
                loopDuration: { value: loopDuration },
                boxMin: { value: boxMin },
                boxMax: { value: boxMax },
                opacity: { value: 0.2 },
              },
              vertexShader: `
                                varying vec3 vWorldPosition;
                                void main() {
                                    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                                    vWorldPosition = worldPosition.xyz;
                                    gl_Position = projectionMatrix * viewMatrix * worldPosition;
                                }
                            `,
              fragmentShader: `
                                uniform float time;
                                uniform vec3 orangeColor;
                                uniform vec3 blueColor;
                                uniform float loopDuration;
                                uniform vec3 boxMin;
                                uniform vec3 boxMax;
                                uniform float opacity;
                                varying vec3 vWorldPosition;
                                
                                void main() {
                                    float progress = (sin(time * (6.28318 / loopDuration) - 1.57079) + 1.0) / 2.0;
                                    float wipeEdgeX = mix(boxMin.x, boxMax.x, progress);
                                    float softness = 4.0;
                                    float transition = smoothstep(wipeEdgeX - softness, wipeEdgeX + softness, vWorldPosition.x);
                                    vec3 currentColor = mix(orangeColor, blueColor, transition);
                                    
                                    // Secondary glow pulsing
                                    float pulse = sin(time * 3.5) * 0.15 + 0.85;
                                    currentColor *= pulse;
                                    
                                    gl_FragColor = vec4(currentColor, opacity);
                                }
                            `,
              transparent: true,
              side: THREE.DoubleSide,
              blending: THREE.AdditiveBlending,
              depthWrite: false,
            });

            const orangeSecondaryGlow = new THREE.Mesh(
              child.geometry.clone(),
              orangeSecondaryMaterial
            );
            orangeSecondaryGlow.position.copy(child.position);
            orangeSecondaryGlow.rotation.copy(child.rotation);
            orangeSecondaryGlow.scale.copy(child.scale);
            orangeSecondaryGlow.scale.multiplyScalar(0.95); // Larger for more visibility

            // Add internal glow materials to transition list
            (model as any).transitionMaterials.push(orangeInternalMaterial);
            (model as any).transitionMaterials.push(orangeSecondaryMaterial);

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
              opacity: { value: 0.06 },
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
            transparent: true,
          }),
          new THREE.ShaderMaterial({
            uniforms: {
              time: { value: 0 },
              opacity: { value: 0.04 },
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
            transparent: true,
          }),
          new THREE.ShaderMaterial({
            uniforms: {
              time: { value: 0 },
              opacity: { value: 0.03 },
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
            transparent: true,
          }),
        ];

        // Create and add glow spheres
        const glowSpheres = [];
        glowMaterials.forEach((material, index) => {
          const scale = 1 + index * 0.3; // Different sizes for layered effect
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
        const particleCount = 300; // Reduced for performance
        const particleGeometry = new THREE.BufferGeometry();
        const particlePositions = new Float32Array(particleCount * 3);
        const particleVelocities = new Float32Array(particleCount * 3);
        const particleSizes = new Float32Array(particleCount);

        // Initialize particle positions and velocities
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;

          // Random positions around the model (wider area)
          particlePositions[i3] = (Math.random() - 0.5) * 80; // x - increased range
          particlePositions[i3 + 1] = (Math.random() - 0.5) * 60; // y - increased range
          particlePositions[i3 + 2] = (Math.random() - 0.5) * 50; // z - increased range

          // Faster random velocities
          particleVelocities[i3] = (Math.random() - 0.5) * 0.15; // x velocity - increased speed
          particleVelocities[i3 + 1] = (Math.random() - 0.5) * 0.12; // y velocity - increased speed
          particleVelocities[i3 + 2] = (Math.random() - 0.5) * 0.08; // z velocity - increased speed

          // Random sizes with more variation
          particleSizes[i] = Math.random() * 0.8 + 0.1;
        }

        particleGeometry.setAttribute(
          "position",
          new THREE.BufferAttribute(particlePositions, 3)
        );
        particleGeometry.setAttribute(
          "size",
          new THREE.BufferAttribute(particleSizes, 1)
        );

        // Create particle material with subtle glow
        const particleMaterial = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            pixelRatio: { value: window.devicePixelRatio },
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
                            float finalSize = size * (10.0 + sin(time + position.x * 0.1) * 2.0);
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
          depthWrite: false,
        });

        const particleSystem = new THREE.Points(
          particleGeometry,
          particleMaterial
        );
        scene.add(particleSystem);

        // Store particle system and velocities for animation
        modelRef.current.particleSystem = particleSystem;
        modelRef.current.particleVelocities = particleVelocities;
        modelRef.current.particleMaterial = particleMaterial;

        setIsLoading(false);
      },
      (progress) => {
        console.log(
          "Loading progress:",
          (progress.loaded / progress.total) * 100 + "%"
        );
      },
      (error) => {
        console.error("Error loading model:", error);
        setIsLoading(false);
      }
    );

    // Mouse interaction
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Use passive listeners for better performance
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    mountRef.current.appendChild(renderer.domElement);

    // Start animation if visible
    if (isVisibleRef.current) {
      animate();
    }

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !camera || !renderer) return;

      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );

      // Update composer size for post-processing
      if (composerRef.current) {
        composerRef.current.setSize(
          mountRef.current.clientWidth,
          mountRef.current.clientHeight
        );
      }

      // Update outline pass sizes
      if (outlinePassRef.current) {
        outlinePassRef.current.setSize(
          mountRef.current.clientWidth,
          mountRef.current.clientHeight
        );
      }
      if (outlinePass2Ref.current) {
        outlinePass2Ref.current.setSize(
          mountRef.current.clientWidth,
          mountRef.current.clientHeight
        );
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

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationIdRef) {
        cancelAnimationFrame(animationIdRef);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      observer.disconnect();

      renderer.dispose();
      clearInterval(chargeInterval);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 w-full h-full z-0"
      style={{ willChange: "auto" }}
    >
      <div
        ref={mountRef}
        className="w-full h-full"
        style={{
          touchAction: "none",
          transform: "translateZ(0)", // Force hardware acceleration
          backfaceVisibility: "hidden",
        }}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-white text-lg">Loading 3D Model...</div>
        </div>
      )}

      {/* Text Overlay - NEXUS ENERGY */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center animate-text-fade-in opacity-0">
          <h1
            className="text-[#00ddff] font-medium tracking-[0.2em] text-2xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 uppercase"
            style={{
              fontFamily: "LOGOTYPE Medium, Arial, sans-serif",
              textShadow: `
                                0 0 20px rgba(0, 221, 255, 0.8),
                                0 0 40px rgba(0, 221, 255, 0.6),
                                0 0 60px rgba(0, 221, 255, 0.4),
                                0 0 80px rgba(0, 221, 255, 0.2)
                            `,
              letterSpacing: "0.5em",
              WebkitTextStroke: "1px rgba(0, 221, 255, 0.3)",
            }}
          >
            NEXUS ENERGY
          </h1>
          <p
            className="text-[#00ddff] font-medium tracking-[0.15em] text-[10px] md:text-xs lg:text-sm xl:text-base uppercase"
            style={{
              fontFamily: "LOGOTYPE Medium, Arial, sans-serif",
              letterSpacing: "0.2em",
              textShadow: `
                               0 0 10px rgba(0, 221, 255, 0.8),
                               0 0 20px rgba(0, 221, 255, 0.4)
                           `,
              WebkitTextStroke: "0.5px rgba(0, 221, 255, 0.2)",
            }}
          >
            ENERGY TRANSFORMATION
          </p>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 flex items-center">
        <BatteryAnimation percentage={batteryPercentage} />
      </div>
    </div>
  );
};

const Index = () => {
  // Simple 2-image slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Two images: b1.png and the existing train image
  const sliderImages = [
    "/images/b1.png",
    "https://images.financialexpressdigital.com/2023/09/1-267.jpg"
  ];

  // Auto-play slider with animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    // Optimize scroll performance
    const handleScrollOptimization = () => {
      document.documentElement.style.scrollBehavior = "smooth";
    };

    // Set smooth scrolling after initial load
    setTimeout(handleScrollOptimization, 1000);

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <SmoothScrollWrapper>
  
      <div
        className="bg-background overflow-x-hidden"
        style={{
          willChange: "scroll-position",
          transform: "translateZ(0)", // Force hardware acceleration
          backfaceVisibility: "hidden",
        }}
      >
        {/* 3D Model Section - Hero Section Only */}
        <section
          className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-black to-black"
          style={{
            willChange: "transform",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
        >
          <Interactive3DBackground />
        </section>

        {/* New Image Section - Unique Layout */}
        <section className="relative z-10 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-20 md:py-28 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200/10 rounded-full blur-2xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Content Column */}
              <div className="lg:col-span-5 space-y-8">
                {/* Enhanced Floating badge */}
                <div className="inline-flex items-center gap-3 bg-[#E8E8F5] border border-orange-200/70 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full animate-pulse"></div> */}
                  <span className="text-orange-700 font-semibold text-sm tracking-wide">Railway Excellence</span>
                </div>
                
                {/* Enhanced Main heading with better styling */}
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                    <span className="text-gray-900 block mb-1 hover:text-gray-800 transition-colors duration-300">
                      Supplying Emergency
                    </span>
                    <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent block mb-1 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                      Back-up Solutions
                    </span>
                    <span className="text-gray-700 block text-2xl md:text-3xl lg:text-4xl hover:text-gray-600 transition-colors duration-300">
                      For T-18 Vande Bharat Trainsets
                    </span>
                  </h2>
                  
                  {/* Decorative underline */}
                  <div className="flex items-center gap-2 mt-4">
                    <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                    <div className="h-1 w-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full opacity-75"></div>
                    <div className="h-1 w-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-50"></div>
                  </div>
                </div>
                
                {/* Enhanced Description */}
                <div className="space-y-4">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                    Powering India's fastest trains with cutting-edge emergency backup systems.
                  </p>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Our advanced battery technology ensures uninterrupted power supply for critical safety systems, 
                    communication networks, and passenger comfort in T-18 Vande Bharat Express trainsets.
                  </p>
                  
                  {/* Key features */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#E8E8F5] border">
                      ⚡ Instant Backup
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#E8E8F5] border">
                      🚄 High-Speed Ready
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#E8E8F5] border">
                      🔋 Long-lasting
                    </span>
                  </div>
                </div>
                
                {/* Enhanced Railway Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center lg:text-left group">
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-4 border border-orange-100 group-hover:shadow-lg transition-all duration-300">
                      <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">10+</div>
                      <div className="text-sm text-gray-600 font-medium">Trainsets Equipped</div>
                    </div>
                  </div>
                  <div className="text-center lg:text-left group">
                    <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-4 border border-pink-100 group-hover:shadow-lg transition-all duration-300">
                      <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text">99.9%</div>
                      <div className="text-sm text-gray-600 font-medium">Reliability Rate</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image Slider Column */}
              <div className="lg:col-span-7">
                <div className="relative">
                  {/* Main slider container with unique shape */}
                  <div className="relative">
                    {/* Decorative background shape */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-[3rem] transform rotate-3 scale-105 opacity-10"></div>
                    
                    {/* Animated Slider container */}
                    <div className="relative bg-white rounded-[2.5rem] p-3 shadow-2xl overflow-hidden">
                      <div className="relative overflow-hidden rounded-[2rem] h-[400px] md:h-[400px]">
                        {/* Slider with crossfade animation */}
                        {sliderImages.map((image, index) => (
                          <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                              index === currentSlide 
                                ? 'opacity-100 transform scale-100' 
                                : 'opacity-0 transform scale-105'
                            }`}
                          >
                            <img
                              src={image}
                              alt={`Energy Innovation ${index + 1}`}
                              className="w-full h-full object-fill transition-transform duration-1000"
                              loading="lazy"
                              style={{
                                filter: index === currentSlide ? 'brightness(1)' : 'brightness(0.8)',
                                transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)',
                              }}
                            />
                            {/* Dynamic overlay with gradient animation */}
                            <div 
                              className={`absolute inset-0 transition-all duration-1000 ${
                                index === currentSlide 
                                  ? 'bg-gradient-to-tr from-blue-600/20 via-transparent to-purple-600/20' 
                                  : 'bg-gradient-to-tr from-blue-600/40 via-transparent to-purple-600/40'
                              }`}
                            ></div>
                            
                            {/* Animated particles during transition */}
                            {index === currentSlide && (
                              <>
                                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full animate-ping"></div>
                                <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-purple-400/60 rounded-full animate-pulse"></div>
                                <div className="absolute top-2/3 left-3/4 w-1.5 h-1.5 bg-indigo-400/60 rounded-full animate-bounce"></div>
                              </>
                            )}
                          </div>
                        ))}
                        
                        {/* Subtle slide change animation overlay */}
                        <div className="absolute inset-0 pointer-events-none">
                          <div 
                            className={`absolute inset-0 bg-white/20 transition-opacity duration-500 ${
                              currentSlide === 0 ? 'opacity-0' : 'opacity-100'
                            }`}
                            style={{
                              background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                              transform: 'translateX(-100%)',
                              animation: currentSlide === 1 ? 'slideShimmer 1s ease-out' : 'none',
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating elements with enhanced animations */}
                    {/* <div className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl shadow-xl flex items-center justify-center transform transition-all duration-1000 ${
                      currentSlide === 0 ? 'rotate-12 scale-100' : 'rotate-0 scale-110'
                    }`}>
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div> */}
                    
                    {/* <div className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg flex items-center justify-center transform transition-all duration-1000 ${
                      currentSlide === 0 ? '-rotate-12 scale-100' : 'rotate-0 scale-110'
                    }`}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div> */}
                    
                    {/* Pulse circles */}
                    {/* <div className="absolute top-1/4 right-8 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-1/3 left-8 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom decorative section */}
            {/* <div className="mt-20 text-center">
              <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-gray-200/50">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-gray-700 font-medium">Trusted by leading energy companies worldwide</span>
              </div>
            </div> */}
          </div>
        </section>

      

        {/* Product Ecosystem Section */}
        <ProductEcosystem />

        {/* Innovation Section (new) */}
        <div className="relative z-10 bg-white" style={{ transform: "translateZ(0)" }}>
          <InnovationSection />
        </div>

        {/* Quote Section */}
        <QuoteSection />
        
        {/* Services Section */}
        <div
          className="relative z-10 bg-white"
          style={{ transform: "translateZ(0)" }}
        >
          <ServicesSection />
          <EcosystemBenefits />
        </div>

        {/* Railway Applications Section */}
        {/* <div className="relative z-10 bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Railway Applications
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Vande Bharat (T-18) Train Coach Battery System
              </h3>
            </div>
            <div className="relative">
              <GlowCard
                glowColor="blue"
                customSize={true}
                className="bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <img
                  src={trainImage}
                  alt="Vande Bharat Train Coach Battery System"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </GlowCard>
            </div>
          </div>
        </div> */}

        {/* Services Content (Precision-Engineered Solutions) */}
        <div
          className="relative z-10 bg-white"
          style={{ transform: "translateZ(0)" }}
        >
          <ServicesContent />
        </div>

        {/* Footer */}
        <div className="relative z-10" style={{ transform: "translateZ(0)" }}>
          <Footer />
        </div>
        
        {/* Slider Animation Styles */}
        <style>{`
          @keyframes slideShimmer {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translateX(100%);
              opacity: 0;
            }
          }
          
          @keyframes fadeInScale {
            0% {
              opacity: 0;
              transform: scale(1.1);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes slideUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </SmoothScrollWrapper>
  );
};

export default Index;
