import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AICore: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00529b, 2);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const geometry = new THREE.IcosahedronGeometry(1, 1);
    const material = new THREE.MeshPhongMaterial({
        color: 0x00529b,
        wireframe: true,
        transparent: true,
        opacity: 0.3
    });
    const core = new THREE.Mesh(geometry, material);
    scene.add(core);

    const innerGeo = new THREE.IcosahedronGeometry(0.5, 0);
    const innerMat = new THREE.MeshPhongMaterial({
        color: 0xff8c00,
        emissive: 0xff8c00,
        emissiveIntensity: 0.5
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerCore);

    camera.position.z = 2.5;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX / window.innerWidth) - 0.5;
        mouseY = (event.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;

    function animateCore() {
        animationFrameId = requestAnimationFrame(animateCore);
        core.rotation.y += 0.005;
        core.rotation.z += 0.002;
        innerCore.rotation.y -= 0.01;
        core.position.x += (mouseX * 0.5 - core.position.x) * 0.05;
        core.position.y += (-mouseY * 0.5 - core.position.y) * 0.05;
        renderer.render(scene, camera);
    }
    
    animateCore();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      innerGeo.dispose();
      innerMat.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-32 h-32 relative -mt-4 pointer-events-none" id="ai-core-container"></div>;
};

export default AICore;
