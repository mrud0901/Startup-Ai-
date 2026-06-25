import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  // Add animation class to glass panels on load
  useEffect(() => {
    const panels = document.querySelectorAll('.glass-panel');
    panels.forEach((panel, i) => {
      setTimeout(() => {
        (panel as HTMLElement).style.opacity = '1';
        (panel as HTMLElement).style.transform = 'translateY(0)';
      }, i * 200);
    });
  }, []);

  return (
    <div className="text-on-surface bg-background">
      {/* TopNavBar */}
      <header className="flex justify-between items-center w-full px-margin-desktop py-base sticky top-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm">
        <div className="flex items-center gap-base">
          <span className="font-display-lg text-display-lg font-bold text-primary">EquiVision AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-lg">
          <a className="text-on-surface-variant hover:text-primary transition-colors font-title-md text-title-md" href="#">Portfolio</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-title-md text-title-md" href="#">Risk Analysis</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-title-md text-title-md" href="#">Markets</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-title-md text-title-md" href="#">Compliance</a>
        </nav>
        <div className="flex items-center gap-md">
          <button className="material-symbols-outlined p-xs text-on-surface-variant hover:bg-surface-container-low/50 transition-colors duration-200 rounded-full cursor-pointer active:scale-95">notifications</button>
          <button className="material-symbols-outlined p-xs text-on-surface-variant hover:bg-surface-container-low/50 transition-colors duration-200 rounded-full cursor-pointer active:scale-95">settings</button>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-fixed cursor-pointer">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNu1uhRS8u5PtgDiPLh3xRvpOv8S8dXsuAZJw_ycAf99Yc7TEAfZmkFkjliBecGBSNtR2l25ainKHGbw7rsNMsUAmR_qY1ZhOvQAcbOawCPHXHc5a_ChjZNbxKU0vcWGRluem4vZ7rmkppN6bhJpgpC5gn8UH7jkZwKR-nQULVcTohekTX5lEGU3d_PPelNGFsk88EmrlRxbQkd2mqHPw6sI4OPelTYn8BmUkjY5LvLNGF7126lpLYxKup3wdvwHP7taeQpeEX_Eo" />
          </div>
        </div>
      </header>

      <main className="relative">
        {/* Hero Section */}
        <section className="relative min-h-[800px] flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop hero-gradient overflow-hidden">
          <div className="max-w-max-width w-full grid grid-cols-1 md:grid-cols-2 items-center gap-xl relative z-10">
            <div className="flex flex-col gap-md">
              <div className="inline-flex items-center gap-xs px-sm py-xs bg-primary-fixed/30 rounded-full border border-primary-fixed w-fit">
                <span className="material-symbols-outlined text-[18px] text-primary">auto_awesome</span>
                <span className="font-label-lg text-label-lg text-primary uppercase tracking-widest">Next-Gen Intelligence</span>
              </div>
              <h1 className="font-display-lg text-display-lg text-primary max-w-lg leading-tight">Empowering Regional Managers with AI Precision</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">EquiVision AI transforms fragmented dealer data into actionable growth strategies. Experience an executive-grade copilot designed for the future of regional automotive leadership.</p>
              
              <div className="flex flex-wrap gap-md mt-sm">
                <Link to="/dashboard" className="bg-primary text-on-primary px-lg py-md rounded-xl font-title-md text-title-md hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 flex items-center gap-sm group">
                  Enter Dashboard
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <button className="border border-outline text-on-surface px-lg py-md rounded-xl font-title-md text-title-md hover:bg-surface-container-low transition-all active:scale-95">
                  Watch Vision Film
                </button>
              </div>
            </div>

            <div className="relative flex justify-center items-center h-[500px]">
              <div className="relative w-full h-full flex justify-center items-center">
                {/* Orbital Glass Cards */}
                <div className="absolute top-0 right-0 glass-panel p-md rounded-xl shadow-xl max-w-[200px] -rotate-6 z-20 transition-all duration-700 opacity-0 translate-y-5">
                  <div className="flex items-center gap-xs mb-xs">
                    <span className="material-symbols-outlined text-secondary">trending_up</span>
                    <span className="font-label-lg text-label-lg text-secondary">Efficiency +24%</span>
                  </div>
                  <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="bg-secondary h-full w-3/4"></div>
                  </div>
                </div>

                <div className="absolute bottom-10 left-0 glass-panel p-md rounded-xl shadow-xl max-w-[200px] rotate-3 z-20 transition-all duration-700 opacity-0 translate-y-5">
                  <div className="flex items-center gap-xs mb-xs">
                    <span className="material-symbols-outlined text-primary">monitoring</span>
                    <span className="font-label-lg text-label-lg text-primary">Regional Health</span>
                  </div>
                  <span className="font-title-lg text-title-lg text-primary">Optimal</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personalized Executive Experience Section */}
        <section className="py-xl px-margin-mobile md:px-margin-desktop bg-surface-container-lowest/80 backdrop-blur-md relative z-10 border-t border-outline-variant/30">
          <div className="max-w-max-width mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-md mb-xl">
              <div className="flex flex-col gap-sm">
                <h2 className="font-headline-lg text-headline-lg text-primary">Personalized Executive Experience</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Tailored specifically to your regional oversight, EquiVision adapts to your workflow, preferences, and priority benchmarks.</p>
              </div>
              <button className="text-primary font-title-md text-title-md flex items-center gap-xs hover:underline decoration-2 underline-offset-4">
                Manage Profile Settings <span className="material-symbols-outlined">north_east</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              {/* Profile Card */}
              <div className="md:col-span-4 glass-panel p-lg rounded-xl flex flex-col items-center text-center gap-md hover:shadow-md transition-all duration-700 opacity-0 translate-y-5">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full border-4 border-primary-fixed p-1">
                    <img className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_LcGqdFD9-CNq9LO0s1-d7BxKwrAdLfGa3xo-dmhPUpDnhk94HYRPDYAxiuiDRW9REjpDCBOqUKJcH-u8evHM6jkAUrPlLpX6V2aThVju5W-FaLtsdFYH4nsyRynxYg25jVFmpZEXaOB_nFoLRnNCBnBbLQrPWmk8mcji-VbxErCOTI6jQ6KGfMPeZ2is8H145i9jygFHM3nvaOOI8P0rexWQ5JGtCyVtpRxtxgQ5-AbEv7fRAfRzAwc7iSyw7n13hiluGHWR0NA" />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-primary text-on-primary p-2 rounded-full shadow-lg border-2 border-surface">
                    <span className="material-symbols-outlined text-[16px]">edit</span>
                  </button>
                </div>
                <div>
                  <h3 className="font-title-lg text-title-lg text-primary">Jameson Sterling</h3>
                  <p className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider">VP of Regional Operations</p>
                </div>
                <div className="w-full h-px bg-outline-variant/30"></div>
                <div className="w-full flex flex-col gap-sm text-left">
                  <div className="flex justify-between items-center">
                    <span className="font-body-md text-body-md text-on-surface-variant">Focus Territory</span>
                    <span className="font-title-md text-title-md text-primary">Northwest Region</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-body-md text-body-md text-on-surface-variant">Primary KPI</span>
                    <span className="font-title-md text-title-md text-primary">Inventory Velocity</span>
                  </div>
                </div>
              </div>

              {/* Regional Preferences */}
              <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div className="glass-panel p-lg rounded-xl flex flex-col gap-md relative overflow-hidden group transition-all duration-700 opacity-0 translate-y-5">
                  <div className="absolute top-0 right-0 p-lg opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-[120px]">map</span>
                  </div>
                  <div className="flex items-center gap-sm">
                    <div className="bg-primary-container/20 p-sm rounded-lg">
                      <span className="material-symbols-outlined text-primary">location_on</span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary">Regional Focus</h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">Customize your dashboard to auto-load Northwest territories with emphasis on urban high-volume dealerships.</p>
                  <div className="flex flex-wrap gap-xs mt-auto">
                    <span className="bg-surface-container px-sm py-xs rounded-full font-label-md text-label-md text-on-surface-variant">Seattle Metro</span>
                    <span className="bg-surface-container px-sm py-xs rounded-full font-label-md text-label-md text-on-surface-variant">Portland Hub</span>
                    <span className="bg-surface-container px-sm py-xs rounded-full font-label-md text-label-md text-on-surface-variant">+4 More</span>
                  </div>
                </div>

                <div className="glass-panel p-lg rounded-xl flex flex-col gap-md relative overflow-hidden group transition-all duration-700 opacity-0 translate-y-5">
                  <div className="absolute top-0 right-0 p-lg opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-[120px]">notifications_active</span>
                  </div>
                  <div className="flex items-center gap-sm">
                    <div className="bg-secondary-container/20 p-sm rounded-lg">
                      <span className="material-symbols-outlined text-secondary">bolt</span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary">Smart Notifications</h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">AI-curated alerts for liquidity shifts, inventory bottlenecks, and competitor pricing fluctuations.</p>
                  <div className="flex items-center gap-sm mt-auto">
                    <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
                      <div className="bg-secondary h-full w-2/3"></div>
                    </div>
                    <span className="font-label-md text-label-md text-secondary">High Priority</span>
                  </div>
                </div>

                <div className="md:col-span-2 glass-panel p-lg rounded-xl flex items-center justify-between gap-xl transition-all duration-700 opacity-0 translate-y-5">
                  <div className="flex flex-col gap-xs">
                    <h3 className="font-title-md text-title-md text-primary">Automated Intelligence Reports</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">Receive personalized 8:00 AM summaries directly to your executive portal.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA & Footer */}
        <section className="py-xl px-margin-mobile md:px-margin-desktop flex flex-col items-center text-center gap-lg">
          <div className="flex flex-col gap-sm max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg text-primary">Ready to scale your regional performance?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Join the league of forward-thinking automotive executives leveraging EquiVision AI.</p>
          </div>
          <Link to="/dashboard" className="bg-primary text-on-primary px-xl py-lg rounded-full font-title-lg text-title-lg shadow-xl shadow-primary/10 hover:shadow-primary/30 transition-all active:scale-95">
            Get Started Today
          </Link>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
