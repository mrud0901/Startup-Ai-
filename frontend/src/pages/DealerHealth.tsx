import React, { useState } from 'react';

const DealerHealth = () => {
  const [selectedDealer, setSelectedDealer] = useState<any>(null);

  const dealers = [
    { id: 'DLR-99212', name: 'Sri Vinayaka Motors', initials: 'SV', region: 'South - Bangalore', score: 92, disbursement: '₹4.2 Cr', delinquency: '0.8%', activity: '2 hrs ago', statusColor: 'green' },
    { id: 'DLR-88123', name: 'Precision Wheels', initials: 'PW', region: 'North - Delhi', score: 42, disbursement: '₹1.1 Cr', delinquency: '4.5%', activity: '1 day ago', statusColor: 'red' },
    { id: 'DLR-77543', name: 'Classic Automotives', initials: 'CA', region: 'West - Mumbai', score: 68, disbursement: '₹2.8 Cr', delinquency: '1.9%', activity: '5 hrs ago', statusColor: 'yellow' }
  ];

  const getStatusBadge = (score: number) => {
    if (score >= 80) return { label: 'HEALTHY STATUS', color: 'green', text: 'green' };
    if (score >= 50) return { label: 'STABLE STATUS', color: 'yellow', text: 'yellow' };
    return { label: 'CRITICAL RISK', color: 'red', text: 'red' };
  };

  const offset = selectedDealer ? 553 - (553 * selectedDealer.score / 100) : 553;
  const status = selectedDealer ? getStatusBadge(selectedDealer.score) : { label: '', color: 'gray', text: 'gray' };

  return (
    <div className="space-y-gutter animate-fade-in-up">
      {/* Page Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Dealer Health Monitoring</h2>
          <p className="text-on-surface-variant font-body-md">AI-driven diagnostics and performance tracking for dealer network.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-surface/50 border border-outline-variant rounded-lg p-1 flex gap-1 backdrop-blur-md">
            <select className="bg-transparent border-none text-label-lg font-label-lg focus:ring-0 cursor-pointer text-on-surface">
              <option>All Regions</option>
              <option>North</option>
              <option>South</option>
            </select>
            <div className="w-[1px] bg-outline-variant my-1"></div>
            <select className="bg-transparent border-none text-label-lg font-label-lg focus:ring-0 cursor-pointer text-on-surface">
              <option>Performance</option>
              <option>High (80-100)</option>
              <option>At Risk (&lt;50)</option>
            </select>
          </div>
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-lg flex items-center gap-2 shadow-sm hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-sm">download</span>
            Export Report
          </button>
        </div>
      </div>

      {/* Dashboard Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        <div className="glass-card rounded-xl p-6 flex flex-col gap-2 transition-transform hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <span className="p-2 bg-green-50 text-green-600 rounded-lg material-symbols-outlined">health_and_safety</span>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">+4.2%</span>
          </div>
          <span className="font-label-lg text-on-surface-variant">Network Avg Health</span>
          <span className="font-headline-md text-headline-md">78.5</span>
        </div>
        <div className="glass-card rounded-xl p-6 flex flex-col gap-2 transition-transform hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <span className="p-2 bg-blue-50 text-primary rounded-lg material-symbols-outlined">trending_up</span>
            <span className="text-xs font-bold text-primary bg-blue-50 px-2 py-1 rounded">82 Dealers</span>
          </div>
          <span className="font-label-lg text-on-surface-variant">Growing Portfolio</span>
          <span className="font-headline-md text-headline-md">₹142.4Cr</span>
        </div>
        <div className="glass-card rounded-xl p-6 flex flex-col gap-2 transition-transform hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <span className="p-2 bg-orange-50 text-secondary rounded-lg material-symbols-outlined">warning</span>
            <span className="text-xs font-bold text-secondary bg-orange-50 px-2 py-1 rounded">12 Critical</span>
          </div>
          <span className="font-label-lg text-on-surface-variant">Churn Risk Identified</span>
          <span className="font-headline-md text-headline-md">14</span>
        </div>
        <div className="glass-card rounded-xl p-6 flex flex-col gap-2 transition-transform hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <span className="p-2 bg-purple-50 text-tertiary rounded-lg material-symbols-outlined">bolt</span>
            <span className="text-xs font-bold text-tertiary bg-purple-50 px-2 py-1 rounded">Active</span>
          </div>
          <span className="font-label-lg text-on-surface-variant">AI Interventions</span>
          <span className="font-headline-md text-headline-md">256</span>
        </div>
      </div>

      {/* Dealer Table Container */}
      <div className="glass-card border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-outline-variant/30 flex justify-between items-center bg-white/40">
          <h3 className="font-title-md text-title-md">Dealer Performance Index</h3>
          <div className="flex items-center gap-2 text-on-surface-variant text-label-lg">
            <span className="w-3 h-3 rounded-full bg-green-500"></span> Healthy
            <span className="w-3 h-3 rounded-full bg-yellow-500 ml-2"></span> At Risk
            <span className="w-3 h-3 rounded-full bg-red-500 ml-2"></span> Critical
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/20 text-on-surface-variant font-label-lg">
                <th className="px-6 py-4 font-semibold uppercase tracking-wider">Dealer Name</th>
                <th className="px-6 py-4 font-semibold uppercase tracking-wider">Region</th>
                <th className="px-6 py-4 font-semibold uppercase tracking-wider">Health Score</th>
                <th className="px-6 py-4 font-semibold uppercase tracking-wider">Monthly Disbursement</th>
                <th className="px-6 py-4 font-semibold uppercase tracking-wider">Delinquency Rate</th>
                <th className="px-6 py-4 font-semibold uppercase tracking-wider">Last Activity</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30">
              {dealers.map(dealer => (
                <tr 
                  key={dealer.id} 
                  className="hover:bg-white/40 transition-colors cursor-pointer group"
                  onClick={() => setSelectedDealer(dealer)}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full bg-${dealer.statusColor === 'green' ? 'primary' : dealer.statusColor === 'yellow' ? 'surface' : 'secondary'}-container flex items-center justify-center font-bold`}>
                        {dealer.initials}
                      </div>
                      <div>
                        <div className="font-title-md text-on-surface">{dealer.name}</div>
                        <div className="text-xs text-outline">ID: {dealer.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-body-md">{dealer.region}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-surface-container h-1.5 rounded-full overflow-hidden">
                        <div className={`bg-${dealer.statusColor}-500 h-full`} style={{ width: `${dealer.score}%` }}></div>
                      </div>
                      <span className={`font-bold text-${dealer.statusColor}-600`}>{dealer.score}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-body-md font-medium">{dealer.disbursement}</td>
                  <td className="px-6 py-4 text-body-md text-green-600">{dealer.delinquency}</td>
                  <td className="px-6 py-4 text-body-md text-outline">{dealer.activity}</td>
                  <td className="px-6 py-4 text-right">
                    <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">chevron_right</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Side Detailed Insight Panel */}
      <div className={`fixed top-0 right-0 h-screen w-full md:w-[500px] bg-white/95 backdrop-blur-3xl z-50 shadow-2xl transform transition-transform duration-300 ease-in-out border-l border-outline-variant overflow-y-auto ${selectedDealer ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Close & Header */}
        <div className="sticky top-0 bg-white/80 backdrop-blur-md z-10 px-8 py-6 border-b border-outline-variant flex justify-between items-center">
          <div>
            <h3 className="font-headline-md text-headline-md text-on-surface">{selectedDealer?.name || 'Dealer Insights'}</h3>
            <p className="text-on-surface-variant font-label-lg uppercase tracking-wider">Detailed Diagnostic Report</p>
          </div>
          <button className="p-2 hover:bg-surface-container rounded-full transition-colors" onClick={() => setSelectedDealer(null)}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        {selectedDealer && (
          <div className="p-8 space-y-8 animate-fade-in">
            {/* Health Gauge Section */}
            <div className="flex flex-col items-center gap-6 p-6 bg-surface/50 rounded-2xl border border-outline-variant shadow-sm">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className="text-surface-container-highest" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="12"></circle>
                  <circle 
                    className={`text-${status.color}-500 transition-all duration-1000`}
                    cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" 
                    strokeDasharray="553" strokeDashoffset={offset} strokeLinecap="round" strokeWidth="12">
                  </circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-black text-on-surface">{selectedDealer.score}</span>
                  <span className="text-label-lg text-outline font-bold">SCORE</span>
                </div>
              </div>
              <div className="text-center">
                <div className={`inline-block px-4 py-1.5 bg-${status.color}-50 text-${status.text}-700 rounded-full font-bold text-label-lg mb-2`}>{status.label}</div>
                <p className="text-body-md text-on-surface-variant">The AI predicts a 94% retention probability for this dealer based on recent activity.</p>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/60 border border-outline-variant rounded-xl">
                <p className="text-label-lg text-on-surface-variant mb-1">Delinquency</p>
                <p className="text-title-lg font-bold text-green-600">{selectedDealer.delinquency}</p>
                <p className="text-[10px] text-green-500">↓ 12% vs last month</p>
              </div>
              <div className="p-4 bg-white/60 border border-outline-variant rounded-xl">
                <p className="text-label-lg text-on-surface-variant mb-1">Stock Turnover</p>
                <p className="text-title-lg font-bold text-primary">18 Days</p>
                <p className="text-[10px] text-primary">Excellent liquidity</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-outline-variant flex gap-3">
              <button className="flex-1 py-3 bg-primary text-on-primary rounded-xl font-bold text-label-lg shadow-lg">Schedule Visit</button>
              <button className="flex-1 py-3 border border-outline-variant rounded-xl font-bold text-label-lg hover:bg-surface-container transition-colors">Call Dealer</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DealerHealth;
