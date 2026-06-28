import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AICore = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00529b, 3);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xfc7728, 2);
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Outer Wireframe Sphere
    const outerGeo = new THREE.IcosahedronGeometry(1.5, 2);
    const outerMat = new THREE.MeshBasicMaterial({
        color: 0x00529b,
        wireframe: true,
        transparent: true,
        opacity: 0.15
    });
    const outerSphere = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerSphere);

    // 2. Middle Translucent Geometry
    const midGeo = new THREE.IcosahedronGeometry(1.1, 1);
    const midMat = new THREE.MeshPhysicalMaterial({
        color: 0x00529b,
        transparent: true,
        opacity: 0.4,
        roughness: 0.2,
        metalness: 0.8,
        wireframe: true
    });
    const midSphere = new THREE.Mesh(midGeo, midMat);
    coreGroup.add(midSphere);

    // 3. Inner Glowing Core
    const innerGeo = new THREE.IcosahedronGeometry(0.6, 0);
    const innerMat = new THREE.MeshPhongMaterial({
        color: 0xfc7728,
        emissive: 0xfc7728,
        emissiveIntensity: 0.8,
        shininess: 100
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerCore);

    // 4. Particles
    const particlesGeo = new THREE.BufferGeometry();
    const particleCount = 150;
    const posArray = new Float32Array(particleCount * 3);
    for(let i=0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 5;
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
        size: 0.03,
        color: 0x00529b,
        transparent: true,
        opacity: 0.6
    });
    const particleMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleMesh);

    camera.position.z = 4;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        mouseX = ((event.clientX - rect.left) / width) - 0.5;
        mouseY = ((event.clientY - rect.top) / height) - 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    let time = 0;

    function animateCore() {
        animationFrameId = requestAnimationFrame(animateCore);
        time += 0.01;

        // Rotations
        outerSphere.rotation.y += 0.002;
        outerSphere.rotation.x += 0.001;
        
        midSphere.rotation.y -= 0.005;
        midSphere.rotation.z += 0.003;
        
        innerCore.rotation.y += 0.01;
        innerCore.rotation.x -= 0.005;

        particleMesh.rotation.y += 0.001;

        // Breathing effect for inner core
        const scale = 1 + Math.sin(time * 2) * 0.05;
        innerCore.scale.set(scale, scale, scale);

        // Mouse interaction
        coreGroup.position.x += (mouseX * 1 - coreGroup.position.x) * 0.05;
        coreGroup.position.y += (-mouseY * 1 - coreGroup.position.y) * 0.05;

        renderer.render(scene, camera);
    }
    
    animateCore();

    const handleResize = () => {
        if (!containerRef.current) return;
        const newWidth = containerRef.current.clientWidth;
        const newHeight = containerRef.current.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      midGeo.dispose();
      midMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full relative pointer-events-none z-0" id="ai-core-container"></div>;
};

export default AICore;
