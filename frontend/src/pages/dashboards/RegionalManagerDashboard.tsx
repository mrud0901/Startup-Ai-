import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import AICore from '../../components/AICore';const RegionalManagerDashboard = () => {
  const [metrics, setMetrics] = useState<any>(null);
  const [topDealers, setTopDealers] = useState<any[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/dashboard').then(res => setMetrics(res.data)).catch(console.error);
    axios.get('http://localhost:8000/api/dealers?limit=4').then(res => setTopDealers(res.data)).catch(console.error);
  }, []);

  const activityData = [
    { name: 'Jan', disbursement: 45, collection: 38 },
    { name: 'Feb', disbursement: 52, collection: 41 },
    { name: 'Mar', disbursement: 48, collection: 45 },
    { name: 'Apr', disbursement: 61, collection: 50 },
    { name: 'May', disbursement: 55, collection: 52 },
    { name: 'Jun', disbursement: 67, collection: 58 },
    { name: 'Jul', disbursement: 72, collection: 65 },
    { name: 'Aug', disbursement: 85, collection: 70 },
  ];

  return (
    <div className="animate-fade-in relative flex flex-col gap-6">
      <section className="flex justify-between items-end">
        <div className="flex items-center gap-6">
          <div>
            <h2 className="text-[28px] font-bold text-on-surface tracking-tight leading-none">Regional Overview</h2>
            <p className="text-[14px] text-on-surface-variant mt-2">Southern Cluster performance is outperforming national averages by 12%.</p>
          </div>
          <div className="w-24 h-24 hidden md:block">
            <AICore />
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={() => alert('Exporting Regional Report...')} className="flex items-center gap-2 px-4 py-2 border border-outline-variant bg-white rounded-lg text-[13px] font-semibold hover:bg-surface-container transition-colors text-on-surface">
            <span className="material-symbols-outlined text-[18px]">download</span> Export Report
          </button>
          <button onClick={() => alert('Opening Dealer Onboarding Flow...')} className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg text-[13px] font-bold shadow-md hover:bg-primary/90 transition-colors">
            Onboard Dealer
          </button>
        </div>
      </section>

      {/* KPI Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Dealers', val: metrics?.total_dealers || '1,240', trend: '+12%', trendUp: true },
          { label: 'Active Dealers', val: metrics?.active_dealers || '980', trend: '+8%', trendUp: true },
          { label: 'At-Risk Dealers', val: metrics ? (metrics.total_dealers - metrics.active_dealers - metrics.inactive_dealers) : '45', trend: 'Needs Action', trendUp: false, alert: true },
          { label: 'Avg Health Score', val: metrics?.average_health_score || '68', trend: 'Stable', trendUp: true }
        ].map((kpi, i) => (
          <div key={i} className={`glass-card p-5 rounded-xl animate-fade-in-up stagger-${i+1} ${kpi.alert ? 'border-l-4 border-l-error' : ''}`}>
            <p className="text-[12px] font-bold text-on-surface-variant uppercase tracking-wider mb-2">{kpi.label}</p>
            <h3 className={`text-[32px] font-bold leading-none ${kpi.alert ? 'text-error' : 'text-primary'}`}>{kpi.val}</h3>
            <div className={`flex items-center gap-1 mt-3 text-[12px] font-semibold ${kpi.trendUp ? 'text-green-600' : 'text-error'}`}>
              <span className="material-symbols-outlined text-[14px]">{kpi.trendUp ? 'trending_up' : 'warning'}</span>
              {kpi.trend}
            </div>
          </div>
        ))}
      </section>

      {/* Main Charts Row */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card rounded-xl p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-[16px] font-bold text-on-surface">Regional Activity Trend</h4>
            <div className="flex gap-4">
              <span className="flex items-center gap-2 text-[12px] font-semibold text-primary"><span className="w-2 h-2 rounded-full bg-primary"></span> Disbursement</span>
              <span className="flex items-center gap-2 text-[12px] font-semibold text-secondary"><span className="w-2 h-2 rounded-full bg-secondary"></span> Collection</span>
            </div>
          </div>
          <div className="w-full flex-1 min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorDis" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00529b" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#00529b" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorCol" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#fc7728" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#fc7728" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 11, fontWeight: 600}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 11, fontWeight: 600}} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }} />
                <Area type="monotone" dataKey="collection" stroke="#fc7728" strokeWidth={3} fillOpacity={1} fill="url(#colorCol)" />
                <Area type="monotone" dataKey="disbursement" stroke="#00529b" strokeWidth={3} fillOpacity={1} fill="url(#colorDis)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-1 glass-card rounded-xl p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-error/5 rounded-bl-full pointer-events-none"></div>
          <div>
            <h4 className="text-[16px] font-bold text-on-surface mb-1">AI Smart Alert</h4>
            <p className="text-[13px] text-on-surface-variant">Regional anomaly detected.</p>
          </div>
          
          <div className="my-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-error text-[24px]">trending_down</span>
              <p className="text-[14px] font-semibold text-on-surface">15% Drop in CV Conversions</p>
            </div>
            <p className="text-[13px] text-on-surface-variant leading-relaxed">
              Dealers in Tamil Nadu are showing a sudden drop in Commercial Vehicle financing. Competitor X is running a 0.2% subvention scheme.
            </p>
          </div>
          
          <Link to="/copilot" className="w-full text-center py-2.5 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors rounded-lg text-[13px] font-bold block">
            Ask Copilot for Strategy
          </Link>
        </div>
      </section>

      {/* Data Table */}
      <section className="glass-card rounded-xl overflow-hidden">
        <div className="p-5 border-b border-outline-variant/30 flex justify-between items-center bg-surface/50">
          <h4 className="text-[16px] font-bold text-on-surface">Top Regional Dealers</h4>
          <Link to="/dealers" className="text-[13px] font-bold text-primary hover:underline">View All</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface/30">
                <th className="px-5 py-3 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Dealer</th>
                <th className="px-5 py-3 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Region</th>
                <th className="px-5 py-3 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Health</th>
                <th className="px-5 py-3 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Sales (Cr)</th>
                <th className="px-5 py-3 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {topDealers.length > 0 ? topDealers.map(dealer => (
                <tr key={dealer.id} className="hover:bg-surface/50 transition-colors">
                  <td className="px-5 py-4">
                    <Link to={`/dealers/${dealer.id}`} className="text-[14px] font-semibold text-on-surface hover:text-primary">{dealer.name}</Link>
                    <p className="text-[11px] text-on-surface-variant mt-0.5">ID: D-{10000 + dealer.id}</p>
                  </td>
                  <td className="px-5 py-4 text-[13px] text-on-surface">{dealer.region.name}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[12px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">{Math.round(dealer.metrics?.health_score || 0)}</span>
                      <div className="w-16 h-1.5 bg-surface-variant rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: `${dealer.metrics?.health_score || 0}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-[13px] font-bold">₹ {dealer.metrics?.loan_disbursement?.toFixed(1)} Cr</td>
                  <td className="px-5 py-4">
                    <span className={`px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wide ${dealer.status === 'Active' ? 'bg-primary/10 text-primary' : dealer.status === 'At Risk' ? 'bg-error/10 text-error' : 'bg-surface-variant text-on-surface-variant'}`}>{dealer.status}</span>
                  </td>
                </tr>
              )) : (
                <tr><td colSpan={5} className="p-4 text-center text-sm">Loading...</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default RegionalManagerDashboard;
