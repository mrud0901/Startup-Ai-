import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import ShaderBackground from './ShaderBackground';
import * as THREE from 'three';
import { useAuth } from '../context/AuthContext';

const Layout = () => {
  const location = useLocation();
  const headerCoreRef = useRef<HTMLDivElement>(null);
  const { user, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

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
    { path: '/churn', label: 'Risk Analysis' },
    { path: '/insights', label: 'Market Intelligence' },
    { path: '/copilot', label: 'AI Copilot' },
    { path: '/reports', label: 'Reports' },
    { path: '/settings', label: 'Settings' }
  ];



  return (
    <div className="bg-background text-on-background min-h-screen relative font-sans">
      <ShaderBackground />
      
      {/* Immersive Premium Header */}
      <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-2xl border-b border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.03)] px-6 py-3">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="w-9 h-9 relative" ref={headerCoreRef}></div>
            <div className="flex flex-col">
              <h1 className="text-[18px] font-bold text-primary leading-none tracking-tight">Startup AI</h1>
              <p className="text-[10px] text-primary/70 uppercase tracking-widest leading-none mt-1 font-semibold">AI Platform</p>
            </div>
          </Link>
          
          {/* Main Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'bg-primary text-white shadow-md shadow-primary/20' 
                      : 'text-on-surface-variant hover:bg-surface hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          
          <div className="flex items-center gap-4">
            <div className="relative w-48 hidden xl:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
              <input 
                type="text" 
                placeholder="Search platform..." 
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    alert(`Simulated Search for: "${e.currentTarget.value}"`);
                    e.currentTarget.value = '';
                  }
                }}
                className="w-full bg-surface/80 border border-outline-variant/30 rounded-full py-1.5 pl-9 pr-4 text-[13px] focus:ring-2 focus:ring-primary/20 focus:border-primary/50 outline-none transition-all placeholder:text-on-surface-variant/50"
              />
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={() => alert("You have 3 unread AI alerts! (Simulated for Prototype)")}
                className="relative hover:bg-surface rounded-full p-1.5 text-on-surface-variant transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">notifications</span>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
              </button>
              
              {/* User Profile */}
              <div className="relative pl-3 border-l border-outline-variant/30">
                <button 
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-2 hover:bg-surface p-1 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-primary-container flex items-center justify-center text-white font-bold text-[11px] shadow-sm uppercase">
                    {user?.name.substring(0, 2) || 'SF'}
                  </div>
                  <div className="hidden xl:flex flex-col items-start text-left">
                    <span className="text-[12px] font-bold text-on-surface leading-none truncate max-w-[100px]">{user?.name || 'User'}</span>
                    <span className="text-[10px] text-on-surface-variant flex items-center gap-1 mt-0.5 truncate max-w-[100px]">
                      {user?.role || 'Guest'}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant ml-1">expand_more</span>
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-outline-variant/20 py-2 z-50 animate-fade-in-up">
                    <div className="px-4 py-2 mb-1 border-b border-outline-variant/10">
                      <p className="text-[12px] font-bold text-on-surface truncate">{user?.name}</p>
                      <p className="text-[10px] text-on-surface-variant truncate">{user?.email}</p>
                    </div>
                    <Link
                      to="/settings"
                      onClick={() => setShowProfileMenu(false)}
                      className="w-full text-left px-4 py-2 text-[13px] font-medium text-on-surface hover:bg-surface transition-colors flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[16px]">person</span> Profile
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setShowProfileMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 text-[13px] font-medium text-error hover:bg-error/10 transition-colors flex items-center gap-2 mt-1"
                    >
                      <span className="material-symbols-outlined text-[16px]">logout</span> Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Area */}
      <main className="max-w-[1600px] mx-auto min-h-[calc(100vh-60px)] p-6 relative z-10 pb-32">
        <Outlet />
      </main>

      {/* Floating AI Assistant Trigger */}
      <Link to="/copilot" className="fixed bottom-8 right-8 z-50 group">
        <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
        <div className="relative w-14 h-14 bg-gradient-to-br from-primary to-tertiary-container rounded-full flex items-center justify-center shadow-2xl border border-white/20 hover:scale-105 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-white text-[24px]">smart_toy</span>
        </div>
      </Link>
    </div>
  );
};

export default Layout;
