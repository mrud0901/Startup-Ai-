import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AICore from '../components/AICore';

const Dashboard = () => {
  const [metrics, setMetrics] = useState<any>(null);
  const [topDealers, setTopDealers] = useState<any[]>([]);

  useEffect(() => {
    // Fetch dashboard KPIs
    axios.get('http://localhost:8000/api/dashboard')
      .then(res => setMetrics(res.data))
      .catch(console.error);

    // Fetch top dealers (just taking the first 4 to match UI)
    axios.get('http://localhost:8000/api/dealers?limit=4')
      .then(res => setTopDealers(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="animate-fade-in relative">
      {/* Header Section */}
      <section className="mb-10 flex justify-between items-start">
        <div className="flex items-center gap-6">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Regional Overview</h2>
            <p className="font-body-lg text-on-surface-variant">Welcome back. Your dealer network is showing high growth potential in the southern cluster.</p>
          </div>
          {/* 3D AI Core Centerpiece */}
          <AICore />
        </div>
        <div className="flex gap-3 mt-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-outline bg-white/50 backdrop-blur-sm rounded-lg font-label-lg text-primary hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-[20px]">calendar_today</span>
            Last 30 Days
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-primary text-on-primary rounded-lg font-label-lg shadow-md hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-[20px]">add</span>
            Onboard Dealer
          </button>
        </div>
      </section>

      {/* KPI Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-gutter mb-gutter">
        {/* Total Dealers */}
        <div className="glass-card p-5 rounded-xl shadow-sm animate-fade-in-up stagger-1">
          <p className="font-label-lg text-on-surface-variant mb-1">Total Dealers</p>
          <h3 className="font-headline-md text-headline-md text-on-surface">{metrics ? metrics.total_dealers : '1,240'}</h3>
          <div className="flex items-center gap-1 text-secondary mt-2">
            <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
            <span className="font-label-md">12% vs last mo</span>
          </div>
        </div>

        {/* Active Dealers */}
        <div className="glass-card p-5 rounded-xl shadow-sm animate-fade-in-up stagger-2">
          <p className="font-label-lg text-on-surface-variant mb-1">Active Dealers</p>
          <h3 className="font-headline-md text-headline-md text-on-surface">{metrics ? metrics.active_dealers : '980'}</h3>
          <div className="flex items-center gap-1 text-secondary mt-2">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            <span className="font-label-md">8% growth</span>
          </div>
        </div>

        {/* At-Risk Dealers */}
        <div className="glass-card p-5 rounded-xl shadow-sm border-l-4 border-error animate-fade-in-up stagger-3">
          <p className="font-label-lg text-on-surface-variant mb-1">At-Risk Dealers</p>
          <h3 className="font-headline-md text-headline-md text-error">{metrics ? metrics.total_dealers - metrics.active_dealers - metrics.inactive_dealers : '45'}</h3>
          <div className="flex items-center gap-1 text-error mt-2">
            <span className="material-symbols-outlined text-[16px]">warning</span>
            <span className="font-label-md">Requires action</span>
          </div>
        </div>

        {/* Inactive */}
        <div className="glass-card p-5 rounded-xl shadow-sm animate-fade-in-up stagger-4">
          <p className="font-label-lg text-on-surface-variant mb-1">Inactive</p>
          <h3 className="font-headline-md text-headline-md text-on-surface-variant">{metrics ? metrics.inactive_dealers : '215'}</h3>
          <div className="flex items-center gap-1 text-outline mt-2">
            <span className="material-symbols-outlined text-[16px]">pause_circle</span>
            <span className="font-label-md">Stable</span>
          </div>
        </div>

        {/* Activation Rate */}
        <div className="glass-card p-5 rounded-xl shadow-sm animate-fade-in-up stagger-5">
          <p className="font-label-lg text-on-surface-variant mb-1">Activation Rate</p>
          <h3 className="font-headline-md text-headline-md text-primary">{metrics ? metrics.dealer_activation_percentage : '79'}%</h3>
          <div className="w-full bg-surface-container h-1.5 rounded-full mt-3">
            <div className="bg-primary h-full rounded-full" style={{ width: `${metrics?.dealer_activation_percentage || 79}%` }}></div>
          </div>
        </div>

        {/* Market Penetration */}
        <div className="glass-card p-5 rounded-xl shadow-sm animate-fade-in-up stagger-6">
          <p className="font-label-lg text-on-surface-variant mb-1">Market Score</p>
          <h3 className="font-headline-md text-headline-md text-tertiary">{metrics ? metrics.average_health_score : '68'}<span className="text-label-lg font-normal text-on-surface-variant">/100</span></h3>
          <div className="flex items-center gap-1 text-tertiary mt-2">
            <span className="material-symbols-outlined text-[16px]">military_tech</span>
            <span className="font-label-md">Top Tier Regional</span>
          </div>
        </div>
      </section>

      {/* Main Charts Row */}
      <section className="bento-grid mb-gutter">
        {/* Dealer Activity Trend */}
        <div className="col-span-12 lg:col-span-8 glass-card rounded-xl p-6 shadow-sm overflow-hidden relative min-h-[400px]">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-title-lg text-title-lg text-on-surface">Dealer Activity Trend</h4>
            <div className="flex gap-2">
              <span className="flex items-center gap-1 font-label-md text-primary"><span className="w-2 h-2 rounded-full bg-primary"></span> Disbursement</span>
              <span className="flex items-center gap-1 font-label-md text-secondary"><span className="w-2 h-2 rounded-full bg-secondary"></span> Collection</span>
            </div>
          </div>
          <div className="w-full h-64 relative">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 800 250">
              <path className="drop-shadow-lg" d="M0,200 Q100,180 200,120 T400,100 T600,150 T800,80" fill="none" stroke="#003b72" strokeWidth="3"></path>
              <path d="M0,220 Q150,200 300,180 T600,160 T800,190" fill="none" stroke="#a04100" strokeDasharray="4" strokeWidth="2"></path>
              <rect fill="url(#grid)" height="250" width="800"></rect>
              <defs>
                <pattern height="50" id="grid" patternUnits="userSpaceOnUse" width="100">
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#f1f5f9" strokeWidth="1"></path>
                </pattern>
              </defs>
            </svg>
          </div>
          <div className="grid grid-cols-8 gap-2 mt-4 px-2">
            {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'].map((m) => (
              <div key={m} className="text-center font-label-md text-on-surface-variant">{m}</div>
            ))}
          </div>
        </div>

        {/* Churn Risk Overview */}
        <div className="col-span-12 lg:col-span-4 glass-card rounded-xl p-6 shadow-sm flex flex-col">
          <h4 className="font-title-lg text-title-lg text-on-surface mb-6">Churn Risk Overview</h4>
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <div className="w-48 h-48 rounded-full border-[20px] border-surface-container-high/50 relative flex items-center justify-center">
              <div className="absolute inset-[-20px] rounded-full border-[20px] border-primary border-r-transparent border-b-transparent rotate-[45deg]"></div>
              <div className="absolute inset-[-20px] rounded-full border-[20px] border-error border-l-transparent border-b-transparent border-t-transparent rotate-[160deg]"></div>
              <div className="text-center">
                <p className="font-headline-md text-headline-md text-on-surface">4.5%</p>
                <p className="font-label-md text-on-surface-variant">Churn Prob.</p>
              </div>
            </div>
            <div className="w-full mt-10 space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span className="font-label-lg text-on-surface">Healthy</span>
                </div>
                <span className="font-label-lg text-on-surface">84%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-secondary-container"></span>
                  <span className="font-label-lg text-on-surface">Concern</span>
                </div>
                <span className="font-label-lg text-on-surface">11.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-error"></span>
                  <span className="font-label-lg text-on-surface">High Risk</span>
                </div>
                <span className="font-label-lg text-on-surface">4.5%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Row */}
      <section className="bento-grid mb-gutter">
        {/* Dealer Health Segments */}
        <div className="col-span-12 lg:col-span-4 glass-card rounded-xl p-6 shadow-sm">
          <h4 className="font-title-lg text-title-lg text-on-surface mb-6">Dealer Health Segments</h4>
          <div className="space-y-6">
            {[
              { label: 'Platinum Tier', count: '124 Dealers', color: 'bg-primary', w: '30%', text: 'text-primary' },
              { label: 'Gold Tier', count: '412 Dealers', color: 'bg-secondary', w: '55%', text: 'text-secondary' },
              { label: 'Silver Tier', count: '589 Dealers', color: 'bg-outline', w: '75%', text: 'text-on-surface-variant' },
              { label: 'Trial / New', count: '115 Dealers', color: 'bg-tertiary', w: '15%', text: 'text-tertiary' }
            ].map((tier, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="font-label-lg text-on-surface">{tier.label}</span>
                  <span className={`font-label-lg ${tier.text}`}>{tier.count}</span>
                </div>
                <div className="h-3 bg-surface-container/50 rounded-full overflow-hidden">
                  <div className={`h-full ${tier.color}`} style={{ width: tier.w }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sales Performance by Month */}
        <div className="col-span-12 lg:col-span-8 glass-card rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-title-lg text-title-lg text-on-surface">Sales Performance (₹ Cr)</h4>
            <div className="bg-surface-container-low/50 p-1 rounded-lg flex">
              <button className="px-3 py-1 bg-white shadow-sm rounded-md text-label-md text-primary">Volume</button>
              <button className="px-3 py-1 text-label-md text-on-surface-variant">Yield</button>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-4 px-4">
            {[
              { m: 'Jan', h: '40%', bg: 'bg-primary-fixed-dim' },
              { m: 'Feb', h: '55%', bg: 'bg-primary-fixed-dim' },
              { m: 'Mar', h: '75%', bg: 'bg-primary-fixed-dim' },
              { m: 'Apr', h: '95%', bg: 'bg-primary' },
              { m: 'May', h: '80%', bg: 'bg-primary-fixed-dim' },
              { m: 'Jun', h: '60%', bg: 'bg-primary-fixed-dim' },
              { m: 'Jul', h: '85%', bg: 'bg-primary-fixed-dim' }
            ].map((bar, i) => (
              <div key={i} className="flex flex-col items-center gap-2 w-full h-full justify-end">
                <div className={`w-full ${bar.bg} hover:bg-primary-container transition-colors rounded-t-lg`} style={{ height: bar.h }}></div>
                <span className="font-label-md text-on-surface-variant">{bar.m}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Table Section */}
      <section className="glass-card rounded-xl shadow-sm overflow-hidden mb-12">
        <div className="p-6 border-b border-surface-container-high/50 flex justify-between items-center">
          <h4 className="font-title-lg text-title-lg text-on-surface">Top Performing Dealers</h4>
          <Link to="/dealers" className="text-primary font-label-lg hover:underline">View All Dealers</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low/50">
                <th className="px-6 py-4 font-label-lg text-on-surface-variant">Dealer Name</th>
                <th className="px-6 py-4 font-label-lg text-on-surface-variant">Region</th>
                <th className="px-6 py-4 font-label-lg text-on-surface-variant">Health Score</th>
                <th className="px-6 py-4 font-label-lg text-on-surface-variant">Monthly Sales</th>
                <th className="px-6 py-4 font-label-lg text-on-surface-variant">Status</th>
                <th className="px-6 py-4 font-label-lg text-on-surface-variant text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-high/50">
              {topDealers.length > 0 ? topDealers.map((dealer, i) => {
                const colors = ['bg-primary-fixed-dim text-primary', 'bg-secondary-fixed-dim text-secondary', 'bg-surface-variant text-on-surface-variant', 'bg-error-container text-error'];
                const badgeColor = colors[i % colors.length];
                return (
                  <tr key={dealer.id} className="hover:bg-surface-container-low/40 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full ${badgeColor} overflow-hidden flex items-center justify-center font-bold`}>
                          {dealer.name.charAt(0)}
                        </div>
                        <div>
                          <Link to={`/dealers/${dealer.id}`} className="font-label-lg text-on-surface hover:text-primary">{dealer.name}</Link>
                          <p className="text-[11px] text-on-surface-variant">ID: D-{10000 + dealer.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-body-md text-on-surface">{dealer.region.name}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-[11px] font-bold">
                          {Math.round(dealer.metrics?.health_score || 0)}/100
                        </span>
                        <div className="w-12 h-1 bg-surface-container rounded-full">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: `${dealer.metrics?.health_score || 0}%` }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-body-md text-on-surface font-semibold">₹ {(Math.random() * 5 + 1).toFixed(1)} Cr</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase ${
                        dealer.status === 'Active' ? 'bg-primary-container text-on-primary-container' :
                        dealer.status === 'At Risk' ? 'bg-error text-white' : 'bg-surface-variant text-on-surface-variant'
                      }`}>
                        {dealer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="material-symbols-outlined text-on-surface-variant hover:text-primary">more_vert</button>
                    </td>
                  </tr>
                )
              }) : (
                <tr><td colSpan={6} className="px-6 py-4 text-center">Loading...</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
