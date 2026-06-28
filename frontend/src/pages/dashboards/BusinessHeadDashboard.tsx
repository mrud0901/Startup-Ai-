
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BusinessHeadDashboard = () => {
  const revenueData = [
    { name: 'North', revenue: 450 },
    { name: 'South', revenue: 620 },
    { name: 'East', revenue: 380 },
    { name: 'West', revenue: 510 },
  ];

  return (
    <div className="animate-fade-in relative flex flex-col gap-6">
      <section className="flex justify-between items-end">
        <div>
          <h2 className="text-[28px] font-bold text-on-surface tracking-tight leading-none">National Overview</h2>
          <p className="text-[14px] text-on-surface-variant mt-2">Executive Summary: Q3 performance exceeding targets by 4%.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => alert('Generating Board Report...')} className="flex items-center gap-2 px-4 py-2 bg-[#1a1f36] text-white rounded-lg text-[13px] font-bold shadow-md hover:bg-[#1a1f36]/90 transition-colors">
            <span className="material-symbols-outlined text-[18px]">summarize</span> Board Report
          </button>
        </div>
      </section>

      {/* KPI Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total AUM', val: '₹ 4,250 Cr', trend: '+8.4% YTD', trendUp: true },
          { label: 'National Market Share', val: '18.2%', trend: '+1.1% QoQ', trendUp: true },
          { label: 'Overall Dealer Base', val: '14,205', trend: 'Growing', trendUp: true },
          { label: 'System Wide Risk', val: 'Medium', trend: 'Watch West', trendUp: false, alert: true }
        ].map((kpi, i) => (
          <div key={i} className={`glass-card p-5 rounded-xl animate-fade-in-up stagger-${i+1} ${kpi.alert ? 'border-l-4 border-l-secondary' : ''}`}>
            <p className="text-[12px] font-bold text-on-surface-variant uppercase tracking-wider mb-2">{kpi.label}</p>
            <h3 className={`text-[32px] font-bold leading-none ${kpi.alert ? 'text-secondary' : 'text-[#1a1f36]'}`}>{kpi.val}</h3>
            <div className={`flex items-center gap-1 mt-3 text-[12px] font-semibold ${kpi.trendUp ? 'text-green-600' : 'text-secondary'}`}>
              <span className="material-symbols-outlined text-[14px]">{kpi.trendUp ? 'trending_up' : 'trending_flat'}</span>
              {kpi.trend}
            </div>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card rounded-xl p-6 flex flex-col">
          <h4 className="text-[16px] font-bold text-on-surface mb-6">Regional Revenue Distribution (Cr)</h4>
          <div className="w-full flex-1 min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12, fontWeight: 600}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12, fontWeight: 600}} />
                <Tooltip cursor={{fill: '#f1f5f9'}} contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }} />
                <Bar dataKey="revenue" fill="#1a1f36" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6 bg-gradient-to-br from-primary to-primary-container text-white">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-[28px]">psychology</span>
            <h4 className="text-[18px] font-bold">Strategic AI Insights</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20">
              <h5 className="font-bold text-[14px] mb-1">Market Penetration Opportunity</h5>
              <p className="text-[13px] text-white/80 leading-relaxed">Our models predict a 22% surge in EV financing in the West zone next quarter. Recommending a proactive expansion of Tier 1 EV dealerships in Pune and Ahmedabad.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20">
              <h5 className="font-bold text-[14px] mb-1">Risk Mitigation Required</h5>
              <p className="text-[13px] text-white/80 leading-relaxed">System-wide NPA probability has slightly increased in the Northern heavy-duty segment. Adjusting risk weights is advised.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessHeadDashboard;
