

const MarketInsights = () => {
  return (
    <div className="space-y-gutter animate-fade-in-up">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Market & Geographic Insights</h2>
          <p className="text-on-surface-variant font-body-md">Real-time macro-economic data, territory penetration, and competitor tracking.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-surface border border-outline-variant rounded-lg font-label-lg hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            Q3 2024
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg font-label-lg shadow-sm hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-[18px]">add_location</span>
            New Territory Analysis
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        
        {/* Left Column - Map and Quick Stats */}
        <div className="lg:col-span-2 space-y-gutter">
          {/* Main Map Card */}
          <div className="glass-card rounded-xl border border-outline-variant overflow-hidden flex flex-col h-[500px]">
            <div className="p-4 border-b border-outline-variant/30 flex justify-between items-center bg-white/40">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">map</span>
                <h3 className="font-title-md text-title-md">Territory Penetration (South Region)</h3>
              </div>
              <div className="flex gap-2">
                <button className="p-1.5 bg-primary-container text-on-primary-container rounded-md"><span className="material-symbols-outlined text-[18px]">zoom_in</span></button>
                <button className="p-1.5 bg-surface text-on-surface-variant border border-outline-variant rounded-md"><span className="material-symbols-outlined text-[18px]">zoom_out</span></button>
              </div>
            </div>
            <div className="flex-1 relative bg-surface-container-lowest/50 flex items-center justify-center p-8">
              {/* Abstract Map Representation */}
              <div className="w-full h-full relative max-w-2xl">
                {/* SVG Abstract Map Base */}
                <svg viewBox="0 0 400 300" className="w-full h-full text-surface-variant drop-shadow-md">
                  <path fill="currentColor" d="M50,100 Q100,50 150,80 T250,120 T350,90 L380,200 Q300,250 200,220 T80,280 Z" />
                  <path fill="none" stroke="#c2c6d3" strokeWidth="2" strokeDasharray="5,5" d="M150,80 Q200,150 250,120" />
                </svg>
                
                {/* Data Points (Hotspots) */}
                <div className="absolute top-[30%] left-[25%] group cursor-pointer">
                  <div className="w-6 h-6 bg-primary/20 rounded-full animate-ping absolute -inset-1"></div>
                  <div className="w-4 h-4 bg-primary rounded-full relative z-10 border-2 border-white shadow-md"></div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-surface-container-highest rounded-lg p-3 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                    <p className="font-title-md text-title-md text-on-surface">Bangalore Hub</p>
                    <div className="flex justify-between mt-1 text-label-md">
                      <span className="text-on-surface-variant">Penetration:</span>
                      <span className="text-primary font-bold">42%</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-[60%] left-[45%] group cursor-pointer">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full animate-ping absolute -inset-2"></div>
                  <div className="w-4 h-4 bg-secondary rounded-full relative z-10 border-2 border-white shadow-md"></div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-surface-container-highest rounded-lg p-3 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                    <p className="font-title-md text-title-md text-on-surface">Coimbatore Area</p>
                    <div className="flex justify-between mt-1 text-label-md">
                      <span className="text-on-surface-variant">Competitor Growth:</span>
                      <span className="text-secondary font-bold">+15%</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-[40%] left-[65%] group cursor-pointer">
                  <div className="w-5 h-5 bg-tertiary/20 rounded-full animate-ping absolute -inset-0.5"></div>
                  <div className="w-4 h-4 bg-tertiary rounded-full relative z-10 border-2 border-white shadow-md"></div>
                </div>
              </div>
              
              {/* Map Legend */}
              <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md p-3 rounded-lg border border-outline-variant shadow-sm text-label-md space-y-2">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-primary"></span> High Penetration</div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-secondary"></span> High Competition</div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-tertiary"></span> Emerging Market</div>
              </div>
            </div>
          </div>

          {/* Macro Economic Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter">
            <div className="glass-card rounded-xl p-5">
              <div className="flex items-center gap-2 text-on-surface-variant mb-2">
                <span className="material-symbols-outlined text-[20px]">account_balance</span>
                <h4 className="font-label-lg">Repo Rate Trend</h4>
              </div>
              <div className="flex items-end gap-2 mb-1">
                <span className="font-headline-md text-headline-md text-on-surface">6.50%</span>
                <span className="font-label-md text-outline">Stable</span>
              </div>
              <div className="w-full bg-surface-container h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-primary w-2/3 h-full"></div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-5">
              <div className="flex items-center gap-2 text-on-surface-variant mb-2">
                <span className="material-symbols-outlined text-[20px]">agriculture</span>
                <h4 className="font-label-lg">Rural Demand Index</h4>
              </div>
              <div className="flex items-end gap-2 mb-1">
                <span className="font-headline-md text-headline-md text-green-600">112.4</span>
                <span className="font-label-md text-green-600 flex items-center"><span className="material-symbols-outlined text-[14px]">arrow_upward</span> 4.2%</span>
              </div>
              <p className="text-[10px] text-outline mt-2">Strong tractor sales projected</p>
            </div>

            <div className="glass-card rounded-xl p-5">
              <div className="flex items-center gap-2 text-on-surface-variant mb-2">
                <span className="material-symbols-outlined text-[20px]">directions_car</span>
                <h4 className="font-label-lg">CV Registration (YoY)</h4>
              </div>
              <div className="flex items-end gap-2 mb-1">
                <span className="font-headline-md text-headline-md text-secondary">8.2%</span>
                <span className="font-label-md text-secondary flex items-center"><span className="material-symbols-outlined text-[14px]">arrow_downward</span> 1.1%</span>
              </div>
              <p className="text-[10px] text-outline mt-2">Slight dip in heavy commercial</p>
            </div>
          </div>
        </div>

        {/* Right Column - AI Insights & Competitors */}
        <div className="space-y-gutter">
          {/* AI Strategic Insights */}
          <div className="glass-card rounded-xl border border-primary/20 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[18px]">psychology</span>
                </div>
                <h3 className="font-title-md text-title-md text-primary">AI Market Intelligence</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">campaign</span>
                  <div>
                    <h4 className="font-label-lg text-on-surface font-bold">Competitor Aggression</h4>
                    <p className="text-body-md text-on-surface-variant mt-1">Cholamandalam has increased LTV ratios by 5% in the Madurai cluster. Expect pressure on margins.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-green-600 text-[20px] mt-0.5">trending_up</span>
                  <div>
                    <h4 className="font-label-lg text-on-surface font-bold">Opportunity Spotted</h4>
                    <p className="text-body-md text-on-surface-variant mt-1">Above-average monsoon in North Karnataka indicates a 15% potential spike in farm equipment financing next quarter.</p>
                  </div>
                </li>
              </ul>
              
              <button className="w-full mt-5 py-2 border border-primary text-primary rounded-lg font-label-lg hover:bg-primary-container/20 transition-colors">
                Generate Strategy Report
              </button>
            </div>
          </div>

          {/* Top Competitor Watchlist */}
          <div className="glass-card rounded-xl p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-title-md text-title-md text-on-surface">Competitor Watchlist</h3>
              <button className="text-primary hover:underline text-label-md">View All</button>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-surface-container-lowest rounded-lg border border-outline-variant/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#0055A5] text-white flex items-center justify-center font-bold text-xs">CH</div>
                  <div>
                    <h4 className="font-label-lg text-on-surface">Cholamandalam</h4>
                    <p className="text-[10px] text-on-surface-variant">Strong in CV</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-label-lg text-error flex items-center"><span className="material-symbols-outlined text-[14px]">arrow_upward</span> 2.4%</span>
                  <p className="text-[10px] text-outline">Market Share</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-surface-container-lowest rounded-lg border border-outline-variant/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#E31837] text-white flex items-center justify-center font-bold text-xs">MM</div>
                  <div>
                    <h4 className="font-label-lg text-on-surface">M&M Financial</h4>
                    <p className="text-[10px] text-on-surface-variant">Rural Focus</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-label-lg text-green-600 flex items-center"><span className="material-symbols-outlined text-[14px]">arrow_downward</span> 0.8%</span>
                  <p className="text-[10px] text-outline">Market Share</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-surface-container-lowest rounded-lg border border-outline-variant/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#F9A01B] text-white flex items-center justify-center font-bold text-xs">SF</div>
                  <div>
                    <h4 className="font-label-lg text-on-surface">Shriram Finance</h4>
                    <p className="text-[10px] text-on-surface-variant">Used Vehicles</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-label-lg text-on-surface-variant flex items-center"><span className="material-symbols-outlined text-[14px]">horizontal_rule</span> 0.0%</span>
                  <p className="text-[10px] text-outline">Market Share</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MarketInsights;
