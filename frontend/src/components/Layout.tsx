import React, { useEffect, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import ShaderBackground from './ShaderBackground';
import * as THREE from 'three';

const Layout = () => {
  const location = useLocation();
  const headerCoreRef = useRef<HTMLDivElement>(null);

  // Initialize small header AI core
  useEffect(() => {
    const container = headerCoreRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const pointLight = new THREE.PointLight(0x00529b, 3);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    const geometry = new THREE.IcosahedronGeometry(1, 1);
    const material = new THREE.MeshPhongMaterial({
        color: 0x00529b,
        wireframe: true,
        transparent: true,
        opacity: 0.2
    });
    const core = new THREE.Mesh(geometry, material);
    core.scale.set(0.6, 0.6, 0.6);
    scene.add(core);

    const innerGeo = new THREE.IcosahedronGeometry(0.5, 0);
    const innerMat = new THREE.MeshPhongMaterial({
        color: 0xfc7728, // Brand Orange
        emissive: 0xfc7728,
        emissiveIntensity: 0.6
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    innerCore.scale.set(0.6, 0.6, 0.6);
    scene.add(innerCore);

    camera.position.z = 2.5;

    let animationFrameId: number;
    function animate() {
        animationFrameId = requestAnimationFrame(animate);
        core.rotation.y += 0.004;
        core.rotation.z += 0.002;
        innerCore.rotation.y -= 0.012;
        renderer.render(scene, camera);
    }
    animate();

    return () => {
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

  const navLinks = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/health', label: 'Dealer Health' },
    { path: '/churn', label: 'Churn' },
    { path: '/insights', label: 'Insights' },
    { path: '/dealers', label: 'Directory' }
  ];

  return (
    <div className="bg-background text-on-background min-h-screen relative">
      <ShaderBackground />
      
      {/* Immersive Header Overlay */}
      <header className="sticky top-0 z-40 w-full bg-white/60 backdrop-blur-xl border-b border-outline-variant px-8 py-3">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
            <div className="w-10 h-10 relative" ref={headerCoreRef}></div>
            <div className="flex flex-col">
              <h1 className="font-headline-md text-title-lg font-bold text-primary leading-tight">Dealer Growth</h1>
              <p className="font-label-lg text-[10px] text-on-surface-variant uppercase tracking-widest leading-none">AI Copilot • Sundaram Finance</p>
            </div>
          </Link>
          
          {/* Navigation Integrated into Header */}
          <nav className="hidden md:flex items-center gap-1 bg-surface-container-low/50 p-1 rounded-xl">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-label-lg text-sm transition-all ${
                    isActive ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          
          <div className="flex items-center gap-4">
            <div className="relative w-64 hidden lg:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-white/50 border-outline-variant rounded-full py-1.5 pl-10 pr-4 text-body-md focus:ring-2 focus:ring-primary-container"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="hover:bg-surface-container rounded-full p-2 text-on-surface-variant">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <div className="flex items-center gap-2 pl-2 border-l border-outline-variant">
                <div className="w-8 h-8 rounded-full bg-primary-fixed-dim flex items-center justify-center text-primary font-bold text-[12px]">RM</div>
                <span className="hidden xl:block font-label-md text-on-surface">Regional Manager</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Area */}
      <main className="max-w-[1440px] mx-auto min-h-[calc(100vh-64px)] flex flex-col relative z-10 pb-32">
        <Outlet />
      </main>

      {/* Subtle Floating Footer Navigation */}
      <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
        <div className="bg-white/70 backdrop-blur-2xl border border-white/50 px-8 py-4 rounded-3xl shadow-2xl flex items-center gap-8">
          <div className="flex items-center gap-3 pr-8 border-r border-outline-variant/30">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[18px]">psychology</span>
            </div>
            <p className="font-label-md text-on-surface font-medium whitespace-nowrap">AI Copilot Online</p>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/dashboard" className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all">home</Link>
            <Link to="/dealers" className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all">description</Link>
            <Link to="/health" className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all">query_stats</Link>
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all">settings</button>
          </div>
          <button className="w-12 h-12 bg-primary text-on-primary rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all">
            <span className="material-symbols-outlined">smart_toy</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
