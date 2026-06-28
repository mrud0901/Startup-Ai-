import { Link } from 'react-router-dom';
import AICore from '../components/AICore';
import ShaderBackground from '../components/ShaderBackground';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#fafbfc]/90 text-on-surface font-sans selection:bg-primary selection:text-white relative">
      <ShaderBackground />
      {/* Premium Header - Kept exactly as you liked it */}
      <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-2xl border-b border-outline-variant/30 px-6 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-primary-container flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-white text-[18px]">show_chart</span>
            </div>
            <span className="text-[20px] font-bold text-primary tracking-tight">Startup AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[14px] font-semibold text-on-surface-variant hover:text-primary transition-colors">Platform Features</a>
            <a href="#benefits" className="text-[14px] font-semibold text-on-surface-variant hover:text-primary transition-colors">Enterprise Benefits</a>
            <a href="#insights" className="text-[14px] font-semibold text-on-surface-variant hover:text-primary transition-colors">AI Copilot</a>
            <a href="#technology" className="text-[14px] font-semibold text-on-surface-variant hover:text-primary transition-colors">Technology</a>
          </div>
          <Link to="/dashboard" className="px-6 py-2.5 bg-[#1a1f36] text-white rounded-lg text-[14px] font-semibold shadow-md shadow-[#1a1f36]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            Open Platform
          </Link>
        </div>
      </header>

      {/* Hero Section - Kept exactly as you liked it */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] max-w-[1400px] opacity-40 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[120px]"></div>
          <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-tertiary-container/30 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 animate-fade-in-up stagger-1">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[12px] font-bold uppercase tracking-widest">Enterprise AI Edition V2.0</span>
            </div>
            
            <h1 className="text-[56px] lg:text-[72px] leading-[1.1] font-bold text-[#1a1f36] tracking-tight mb-6 animate-fade-in-up stagger-2">
              The AI-Powered <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Dealer Intelligence</span> Platform
            </h1>
            
            <p className="text-[18px] text-on-surface-variant leading-relaxed max-w-xl mb-10 animate-fade-in-up stagger-3">
              Startup AI transforms fragmented regional data into actionable growth strategies. Predict dealer risk, improve activation rates, and increase market penetration with our executive-grade copilot.
            </p>

            <div className="flex items-center gap-4 animate-fade-in-up stagger-4">
              <Link to="/dashboard" className="px-8 py-4 bg-[#1a1f36] text-white rounded-xl text-[16px] font-bold shadow-2xl hover:shadow-[#1a1f36]/30 hover:-translate-y-1 transition-all flex items-center gap-2 group">
                Enter Dashboard
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <a href="#features" className="px-8 py-4 bg-white border border-outline-variant rounded-xl text-[16px] font-bold text-on-surface hover:bg-surface transition-all">
                Explore Features
              </a>
            </div>
          </div>

          <div className="flex-1 relative w-full flex justify-center animate-fade-in-up stagger-5">
             <div className="relative w-[400px] h-[400px]">
               {/* 3D Core Visualization embedded in Hero */}
               <AICore />
             </div>

             {/* Floating KPI Cards */}
             <div className="absolute top-10 -left-12 glass-panel p-4 rounded-xl shadow-xl w-48 animate-[float_4s_ease-in-out_infinite] bg-white border border-outline-variant/50">
                <p className="text-[11px] font-bold text-on-surface-variant uppercase">Predictive Churn</p>
                <p className="text-[24px] font-bold text-error mt-1">4.5% <span className="text-[12px] text-on-surface-variant font-normal">Risk</span></p>
                <div className="w-full h-1 bg-surface-variant mt-2 rounded-full overflow-hidden">
                  <div className="w-[15%] h-full bg-error"></div>
                </div>
             </div>

             <div className="absolute bottom-20 -right-8 glass-panel p-4 rounded-xl shadow-xl w-56 animate-[float_5s_ease-in-out_infinite_reverse] bg-white border border-outline-variant/50">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-[11px] font-bold text-on-surface-variant uppercase">Dealer Activation</p>
                  <span className="material-symbols-outlined text-green-500 text-[16px]">trending_up</span>
                </div>
                <p className="text-[28px] font-bold text-primary">82.4%</p>
                <p className="text-[12px] text-green-600 font-semibold mt-1">+4.2% from last month</p>
             </div>
          </div>
        </div>
      </section>

      {/* FULL FEATURES SECTION */}
      <section id="features" className="py-24 bg-white border-t border-outline-variant/30">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-[36px] font-bold tracking-tight text-[#1a1f36]">Executive Intelligence. <br/>Delivered Daily.</h2>
            <p className="text-[16px] text-on-surface-variant mt-4">Stop guessing. Start acting. Our ML models analyze thousands of dealer signals to surface the exact actions you need to take today.</p>
          </div>

          {/* Expanded 8-Card Grid based on your prompt */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'health_and_safety', title: 'Dealer Health Monitoring', desc: 'Composite scoring based on disbursement volume and conversion velocity.' },
              { icon: 'radar', title: 'AI Churn Prediction', desc: 'Early warning systems alerting you to high-risk dealer behaviors.' },
              { icon: 'map', title: 'Market Intelligence', desc: 'Geospatial mapping to identify low-penetration territories.' },
              { icon: 'query_stats', title: 'Dealer Performance', desc: 'Real-time tracking of portfolio quality and sales conversions.' },
              { icon: 'smart_toy', title: 'AI Copilot', desc: 'Conversational assistant for instant data querying and strategy generation.' },
              { icon: 'pie_chart', title: 'Regional Analytics', desc: 'Macro-level overviews for National and Regional Business Heads.' },
              { icon: 'lightbulb', title: 'Smart Recommendations', desc: 'Automated strategic prescriptions based on historical success models.' },
              { icon: 'description', title: 'Reports & Insights', desc: 'One-click generation of board-ready executive summaries.' },
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-[#fafbfc] border border-outline-variant/50 hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">{feature.icon}</span>
                </div>
                <h3 className="text-[18px] font-bold mb-3 text-[#1a1f36]">{feature.title}</h3>
                <p className="text-[14px] text-on-surface-variant leading-relaxed mb-4">{feature.desc}</p>
                <button className="text-[13px] font-bold text-primary flex items-center gap-1 group-hover:underline">
                  Learn More <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-24 bg-[#fafbfc] border-t border-outline-variant/30">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[36px] font-bold tracking-tight mb-4 text-[#1a1f36]">How The Platform Works</h2>
            <p className="text-[16px] text-on-surface-variant">From raw regional data to actionable business strategy in milliseconds.</p>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 -translate-y-1/2 rounded-full"></div>
            
            {[
              { icon: 'database', title: 'Dealer Data', desc: 'Ingestion of CRM & sales data' },
              { icon: 'psychology', title: 'AI Processing', desc: 'ML models analyze patterns' },
              { icon: 'health_and_safety', title: 'Health Score', desc: 'Real-time performance rating' },
              { icon: 'warning', title: 'Prediction', desc: 'Churn & opportunities flagged' },
              { icon: 'recommend', title: 'Business Growth', desc: 'Strategies delivered to managers' }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center max-w-[200px]">
                <div className="w-16 h-16 bg-white border-4 border-[#fafbfc] rounded-full flex items-center justify-center shadow-lg mb-4 text-[#1a1f36]">
                  <span className="material-symbols-outlined text-[28px]">{step.icon}</span>
                </div>
                <h3 className="text-[16px] font-bold mb-1">{step.title}</h3>
                <p className="text-[12px] text-on-surface-variant">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENTERPRISE BENEFITS / BUSINESS IMPACT */}
      <section id="benefits" className="py-24 bg-white border-t border-outline-variant/30">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-[36px] font-bold tracking-tight text-[#1a1f36]">Business Impact</h2>
            <p className="text-[16px] text-on-surface-variant mt-4">Measurable outcomes that drive growth and reduce risk across your entire dealer network.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-[#fafbfc] p-8 rounded-2xl border border-outline-variant/50 shadow-sm">
              <p className="text-[48px] font-extrabold text-primary mb-2">3x</p>
              <h3 className="text-[18px] font-bold mb-2">Faster Decision Making</h3>
              <p className="text-[14px] text-on-surface-variant">Automated reporting eliminates manual spreadsheet consolidation.</p>
            </div>
            <div className="bg-[#fafbfc] p-8 rounded-2xl border border-outline-variant/50 shadow-sm">
              <p className="text-[48px] font-extrabold text-primary mb-2">+24%</p>
              <h3 className="text-[18px] font-bold mb-2">Higher Activation Rate</h3>
              <p className="text-[14px] text-on-surface-variant">Identify and engage dormant dealers before they churn.</p>
            </div>
            <div className="bg-[#fafbfc] p-8 rounded-2xl border border-outline-variant/50 shadow-sm">
              <p className="text-[48px] font-extrabold text-primary mb-2">15hrs</p>
              <h3 className="text-[18px] font-bold mb-2">Reduced Operational Effort</h3>
              <p className="text-[14px] text-on-surface-variant">Saved per week per manager by utilizing AI summaries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COPILOT SHOWCASE */}
      <section id="insights" className="py-24 bg-[#1a1f36] text-white overflow-hidden relative">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="flex-1">
            <h2 className="text-[36px] font-bold tracking-tight mb-6">Meet Your AI Copilot</h2>
            <p className="text-[16px] text-white/70 mb-8 max-w-xl">
              Stop digging through reports. Chat directly with your data to instantly uncover regional insights, generate incentive schemes, and receive smart recommendations.
            </p>
            <div className="flex flex-col gap-3">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-colors cursor-default">
                <span className="material-symbols-outlined text-primary">chat_bubble</span>
                <span className="text-[14px]">"Which dealers in the South are at highest risk?"</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-colors cursor-default">
                <span className="material-symbols-outlined text-primary">chat_bubble</span>
                <span className="text-[14px]">"Show low penetration regions for CVs."</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-colors cursor-default">
                <span className="material-symbols-outlined text-primary">chat_bubble</span>
                <span className="text-[14px]">"Generate activation strategy for North Region."</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full bg-surface rounded-2xl border border-outline-variant/30 p-6 shadow-2xl text-on-surface">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-outline-variant/30">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[16px]">smart_toy</span>
              </div>
              <div>
                <p className="text-[14px] font-bold">Startup AI</p>
                <p className="text-[11px] text-green-600 font-bold">Online</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-3 flex-row-reverse">
                <div className="p-3 bg-[#1a1f36] text-white rounded-xl text-[13px] max-w-[80%]">
                  Suggest dealer incentives for the Northern zone.
                </div>
              </div>
              <div className="flex gap-3">
                <div className="p-4 bg-[#fafbfc] border border-outline-variant/50 rounded-xl text-[13px] leading-relaxed max-w-[90%]">
                  Based on historical trends, applying a <strong>0.5% subvention bonus</strong> in the Northern region has a 78% probability of increasing loan originations by ₹12Cr next quarter. 
                  <br/><br/>
                  Would you like me to draft the proposal?
                </div>
              </div>
            </div>

            <Link to="/copilot" className="mt-6 inline-block text-[14px] font-bold text-primary hover:underline">
              Try it now &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* MARKET INTELLIGENCE (Map Concept) */}
      <section className="py-24 bg-white border-y border-outline-variant/30">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-[36px] font-bold tracking-tight mb-4 text-[#1a1f36]">Uncover Market Blindspots</h2>
          <p className="text-[16px] text-on-surface-variant max-w-2xl mx-auto mb-16">
            Interactive geospatial intelligence highlights low penetration areas and visualizes dealer density to drive strategic expansion.
          </p>
          
          <div className="relative w-full max-w-[1000px] h-[400px] mx-auto bg-[#fafbfc] border border-outline-variant/50 rounded-3xl overflow-hidden shadow-md flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/connected.png')]">
             <div className="absolute inset-0 bg-gradient-to-t from-[#fafbfc] to-transparent"></div>
             
             {/* Map Markers */}
             <div className="absolute top-[30%] left-[40%] flex flex-col items-center animate-bounce">
               <div className="bg-[#1a1f36] text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg mb-1">Growth +12%</div>
               <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--color-primary),0.8)] border-2 border-white"></div>
             </div>
             
             <div className="absolute top-[60%] left-[30%] flex flex-col items-center">
               <div className="bg-error text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg mb-1">High Churn</div>
               <div className="w-4 h-4 bg-error rounded-full shadow-[0_0_15px_rgba(var(--color-error),0.8)] border-2 border-white animate-pulse"></div>
             </div>
             
             <div className="absolute top-[45%] right-[35%] flex flex-col items-center animate-bounce" style={{animationDelay: '1s'}}>
               <div className="bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg mb-1">Opportunity</div>
               <div className="w-4 h-4 bg-green-500 rounded-full shadow-[0_0_15px_rgba(74,222,128,0.8)] border-2 border-white"></div>
             </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section id="technology" className="py-24 bg-[#fafbfc]">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-[20px] font-bold tracking-tight text-on-surface-variant uppercase mb-12">Powered by Enterprise Technology</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {['React', 'TypeScript', 'Tailwind CSS', 'Three.js', 'FastAPI', 'Python', 'SQLAlchemy', 'Scikit-learn', 'Pandas'].map((tech, idx) => (
              <div key={idx} className="px-5 py-2.5 bg-white border border-outline-variant/50 shadow-sm rounded-full font-bold text-[13px] text-[#1a1f36] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 bg-[#1a1f36] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-[800px] mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-8 flex items-center justify-center shadow-2xl">
            <span className="material-symbols-outlined text-white text-[32px]">rocket_launch</span>
          </div>
          <h2 className="text-[40px] md:text-[48px] font-bold text-white tracking-tight mb-6">Ready to scale regional performance?</h2>
          <p className="text-[18px] text-white/70 mb-10 max-w-xl">Join forward-thinking executives at Startup AI who are leveraging AI to dominate their markets.</p>
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="px-10 py-4 bg-white text-[#1a1f36] rounded-xl text-[16px] font-bold shadow-xl hover:scale-105 transition-transform">
              Launch Platform
            </Link>
            <Link to="/signup" className="px-10 py-4 bg-transparent border border-white/30 text-white rounded-xl text-[16px] font-bold hover:bg-white/10 transition-colors">
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
