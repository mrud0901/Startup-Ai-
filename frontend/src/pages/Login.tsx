import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AICore from '../components/AICore';

const Login = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Derive name from email (e.g. mrudula.makar@... -> Mrudula Makar)
    const namePart = email.split('@')[0];
    const derivedName = namePart.split(/[\.\-_]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    login({ name: derivedName || 'User', email, role: 'Regional Manager' });
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] flex items-center justify-center relative overflow-hidden font-sans">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="flex flex-col lg:flex-row w-full max-w-[1000px] bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-outline-variant/30 animate-fade-in-up">
        {/* Left Side: Branding */}
        <div className="flex-1 bg-[#1a1f36] p-12 text-white flex flex-col justify-between relative overflow-hidden hidden md:flex">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="relative z-10">
            <Link to="/" className="flex items-center gap-3 w-fit">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-primary-container flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-white text-[18px]">show_chart</span>
              </div>
              <span className="text-[20px] font-bold tracking-tight">Startup AI</span>
            </Link>
          </div>
          
          <div className="relative z-10 mt-16 mb-8 flex-1 flex items-center justify-center">
            <div className="w-64 h-64">
              <AICore />
            </div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-[24px] font-bold leading-tight mb-2">Welcome Back.</h3>
            <p className="text-[14px] text-white/70">Access your personalized insights, track dealer health, and command the AI Copilot.</p>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="flex-1 p-12 flex flex-col justify-center relative min-h-[500px]">
          
          {/* Stepper Progress */}
          <div className="absolute top-12 left-12 right-12 flex gap-2">
            <div className="h-1 flex-1 bg-primary rounded-full transition-all duration-500"></div>
            <div className={`h-1 flex-1 rounded-full transition-all duration-500 ${step >= 2 ? 'bg-primary' : 'bg-surface-variant'}`}></div>
          </div>

          <div className="mt-8 mb-8">
            <h2 className="text-[32px] font-bold text-on-surface tracking-tight leading-none mb-2">Sign in</h2>
            <p className="text-[14px] text-on-surface-variant">
              {step === 1 ? "Enter your email to continue." : "Enter your password to securely sign in."}
            </p>
          </div>

          {step === 1 ? (
            <form onSubmit={handleNext} className="flex flex-col gap-5 animate-fade-in">
              <div>
                <label className="block text-[12px] font-bold text-on-surface-variant mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  autoFocus
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
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 animate-fade-in">
              <div className="flex items-center gap-3 p-3 bg-surface rounded-xl border border-outline-variant/30">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {email.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-[13px] font-bold text-on-surface truncate">{email}</p>
                  <p className="text-[11px] text-on-surface-variant">Personal Account</p>
                </div>
                <button type="button" onClick={() => setStep(1)} className="text-[12px] font-semibold text-primary hover:underline px-2">Edit</button>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[12px] font-bold text-on-surface-variant">Password</label>
                  <a href="#" className="text-[12px] font-semibold text-primary hover:underline">Forgot password?</a>
                </div>
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
              
              <button type="submit" className="w-full py-3 mt-4 bg-[#1a1f36] text-white rounded-xl text-[14px] font-bold shadow-md hover:bg-[#1a1f36]/90 transition-colors">
                Sign In
              </button>
            </form>
          )}

          <p className="text-[13px] text-center text-on-surface-variant mt-8 font-medium">
            Don't have an account? <Link to="/signup" className="text-primary font-bold hover:underline">Request Access</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
