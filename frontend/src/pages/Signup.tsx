import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, type UserRole } from '../context/AuthContext';
import AICore from '../components/AICore';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<UserRole>('Regional Manager');
  const [password, setPassword] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleNextStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) setStep(2);
  };

  const handleNextStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (role) setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ name, email, role });
    navigate('/dashboard', { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] flex items-center justify-center relative overflow-hidden font-sans py-12">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse w-full max-w-[1000px] bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-outline-variant/30 animate-fade-in-up">
        {/* Right Side: Branding (reversed) */}
        <div className="flex-1 bg-[#1a1f36] p-12 text-white flex flex-col justify-between relative overflow-hidden hidden md:flex">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="relative z-10 flex justify-end">
            <Link to="/" className="flex items-center gap-3 w-fit">
              <span className="text-[20px] font-bold tracking-tight">Startup AI</span>
              <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-primary-container flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-white text-[18px]">show_chart</span>
              </div>
            </Link>
          </div>
          
          <div className="relative z-10 mt-16 mb-8 flex-1 flex items-center justify-center">
            <div className="w-64 h-64">
              <AICore />
            </div>
          </div>
          
          <div className="relative z-10 text-right">
            <h3 className="text-[24px] font-bold leading-tight mb-2">Join the Future.</h3>
            <p className="text-[14px] text-white/70">Experience the power of proactive intelligence and automated dealer management.</p>
          </div>
        </div>

        {/* Left Side: Signup Form */}
        <div className="flex-1 p-12 flex flex-col justify-center relative min-h-[550px]">
          
          {/* Stepper Progress */}
          <div className="absolute top-12 left-12 right-12 flex gap-2">
            <div className={`h-1 flex-1 rounded-full transition-all duration-500 bg-primary`}></div>
            <div className={`h-1 flex-1 rounded-full transition-all duration-500 ${step >= 2 ? 'bg-primary' : 'bg-surface-variant'}`}></div>
            <div className={`h-1 flex-1 rounded-full transition-all duration-500 ${step >= 3 ? 'bg-primary' : 'bg-surface-variant'}`}></div>
          </div>

          <div className="mt-8 mb-8">
            <h2 className="text-[32px] font-bold text-on-surface tracking-tight leading-none mb-2">
              {step === 1 ? "Create Account" : step === 2 ? "Select Role" : "Secure Account"}
            </h2>
            <p className="text-[14px] text-on-surface-variant">
              {step === 1 ? "Set up your profile to access the platform." 
               : step === 2 ? "Choose your organizational level to personalize your dashboard." 
               : "Choose a strong password to protect your data."}
            </p>
          </div>

          {step === 1 && (
            <form onSubmit={handleNextStep1} className="flex flex-col gap-5 animate-fade-in">
              <div>
                <label className="block text-[12px] font-bold text-on-surface-variant mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  autoFocus
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Arjun Menon" 
                  className="w-full bg-surface border border-outline-variant/50 rounded-xl px-4 py-3 text-[14px] text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" 
                />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-on-surface-variant mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="name@startupai.com" 
                  className="w-full bg-surface border border-outline-variant/50 rounded-xl px-4 py-3 text-[14px] text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" 
                />
              </div>
              
              <button type="submit" className="w-full py-3 mt-4 bg-[#1a1f36] text-white rounded-xl text-[14px] font-bold shadow-md hover:bg-[#1a1f36]/90 transition-colors flex items-center justify-center gap-2">
                Continue <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleNextStep2} className="flex flex-col gap-5 animate-fade-in">
              <div className="flex flex-col gap-3">
                {[
                  { value: 'Regional Manager', label: 'Regional Manager', desc: 'Manage multiple territories and aggregate reports.' },
                  { value: 'Business Head', label: 'National Business Head', desc: 'Executive overview and macro-level strategy.' },
                  { value: 'Sales Executive', label: 'Field Sales Executive', desc: 'On-the-ground dealer interactions and visits.' }
                ].map(r => (
                  <label key={r.value} className={`relative flex items-center p-4 cursor-pointer rounded-xl border transition-all ${role === r.value ? 'bg-primary/5 border-primary shadow-sm' : 'bg-surface border-outline-variant/50 hover:bg-surface-container'}`}>
                    <input 
                      type="radio" 
                      name="role" 
                      value={r.value} 
                      checked={role === r.value}
                      onChange={() => setRole(r.value as UserRole)}
                      className="sr-only" 
                    />
                    <div className="flex-1">
                      <p className={`text-[14px] font-bold ${role === r.value ? 'text-primary' : 'text-on-surface'}`}>{r.label}</p>
                      <p className="text-[11px] text-on-surface-variant mt-0.5">{r.desc}</p>
                    </div>
                    {role === r.value && (
                      <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                    )}
                  </label>
                ))}
              </div>

              <div className="flex gap-3 mt-4">
                <button type="button" onClick={() => setStep(1)} className="px-6 py-3 border border-outline-variant/50 text-on-surface rounded-xl text-[14px] font-bold hover:bg-surface transition-colors">
                  Back
                </button>
                <button type="submit" className="flex-1 py-3 bg-[#1a1f36] text-white rounded-xl text-[14px] font-bold shadow-md hover:bg-[#1a1f36]/90 transition-colors flex items-center justify-center gap-2">
                  Continue <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 animate-fade-in">
              <div className="p-4 bg-surface rounded-xl border border-outline-variant/30 mb-2">
                <p className="text-[11px] text-on-surface-variant uppercase tracking-wider font-bold mb-2">Account Summary</p>
                <p className="text-[13px] font-bold text-on-surface">{name}</p>
                <p className="text-[12px] text-on-surface-variant">{email}</p>
                <div className="mt-2 inline-block px-2 py-1 bg-primary/10 text-primary rounded text-[11px] font-bold">
                  {role}
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-bold text-on-surface-variant mb-2">Password</label>
                <input 
                  type="password" 
                  required
                  autoFocus
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full bg-surface border border-outline-variant/50 rounded-xl px-4 py-3 text-[14px] text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" 
                />
              </div>
              
              <div className="flex gap-3 mt-4">
                <button type="button" onClick={() => setStep(2)} className="px-6 py-3 border border-outline-variant/50 text-on-surface rounded-xl text-[14px] font-bold hover:bg-surface transition-colors">
                  Back
                </button>
                <button type="submit" className="flex-1 py-3 bg-primary text-white rounded-xl text-[14px] font-bold shadow-md hover:bg-primary/90 transition-colors">
                  Complete Setup
                </button>
              </div>
            </form>
          )}

          {step === 1 && (
            <p className="text-[13px] text-center text-on-surface-variant mt-8 font-medium">
              Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Sign In</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
