import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const DealerProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [dealer, setDealer] = useState<any>(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/dealers/${id}`)
      .then(res => setDealer(res.data))
      .catch(console.error);
  }, [id]);

  if (!dealer) return <div className="p-8 text-on-surface flex items-center gap-2"><span className="material-symbols-outlined animate-spin">sync</span> Loading intelligence profile...</div>;

  const isAtRisk = dealer.status === 'At Risk' || dealer.status === 'Inactive';

  return (
    <div className="animate-fade-in flex flex-col gap-6">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <Link to="/dealers" className="text-on-surface-variant hover:text-primary text-[13px] font-semibold flex items-center mb-4 transition-colors">
            <span className="material-symbols-outlined text-[16px] mr-1">arrow_back</span>
            Back to Directory
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-primary to-primary-container flex items-center justify-center text-white text-[24px] font-bold shadow-md">
              {dealer.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-[32px] font-bold text-[#1a1f36] tracking-tight flex items-center gap-3">
                {dealer.name}
                <span className={`px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-widest align-middle ${
                    dealer.status === 'Active' ? 'bg-primary/10 text-primary' :
                    isAtRisk ? 'bg-error/10 text-error' : 'bg-surface-variant text-on-surface-variant'
                  }`}>
                  {dealer.status}
                </span>
              </h2>
              <p className="text-[14px] text-on-surface-variant mt-1 flex items-center gap-2 font-medium">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                {dealer.region.name} • UID: D-{10000 + dealer.id}
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={() => alert('Opening Interaction Log...')} className="px-4 py-2 bg-white border border-outline-variant rounded-lg text-[13px] font-bold text-on-surface shadow-sm hover:bg-surface transition-colors">
            Log Interaction
          </button>
          <Link to="/copilot" className="px-4 py-2 bg-primary text-white rounded-lg text-[13px] font-bold shadow-md hover:bg-primary/90 transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">assistant</span>
            Copilot Analysis
          </Link>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center">
            <h3 className="text-[14px] font-bold text-on-surface-variant uppercase tracking-wider mb-6 w-full text-left">Health Intelligence</h3>
            
            <div className="relative inline-flex items-center justify-center w-40 h-40 rounded-full border-[12px] border-surface mb-6 shadow-inner">
              <div className={`absolute inset-0 rounded-full border-[12px] ${isAtRisk ? 'border-error' : 'border-primary'} border-l-transparent border-b-transparent rotate-[45deg]`}></div>
              <div className="text-center">
                <span className={`text-[40px] font-bold leading-none ${isAtRisk ? 'text-error' : 'text-primary'}`}>{Math.round(dealer.metrics?.health_score || 0)}</span>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">Score</p>
              </div>
            </div>
            
            <div className="w-full text-left bg-surface p-4 rounded-xl border border-outline-variant/30">
              <p className="text-[13px] font-bold text-on-surface flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-[16px] text-primary">insights</span> AI Summary
              </p>
              <p className="text-[12px] text-on-surface-variant leading-relaxed">
                {isAtRisk 
                  ? "Dealer is demonstrating severe drop in disbursement velocity. Immediate intervention required."
                  : "Performance is optimal. High conversion rate detected in recent month."}
              </p>
            </div>
          </div>

          <div className={`glass-card p-6 rounded-2xl border-l-4 ${isAtRisk ? 'border-error bg-error/5' : 'border-green-500'}`}>
            <h3 className="text-[14px] font-bold text-on-surface-variant uppercase tracking-wider mb-4">Churn Risk Prediction</h3>
            <div className="flex justify-between items-end mb-2">
              <span className="text-[13px] font-semibold text-on-surface">Probability</span>
              <span className={`text-[28px] font-bold leading-none ${isAtRisk ? 'text-error' : 'text-green-600'}`}>
                {dealer.status === 'At Risk' ? '68%' : dealer.status === 'Inactive' ? '99%' : '12%'}
              </span>
            </div>
            <div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden">
              <div className={`h-full ${dealer.status === 'At Risk' ? 'bg-error w-[68%]' : dealer.status === 'Inactive' ? 'bg-error w-full' : 'bg-green-500 w-[12%]'}`}></div>
            </div>
            <p className="text-[12px] text-on-surface-variant mt-4 leading-relaxed font-medium">
              Risk modeling based on comparative regional activity frequency and 90-day rolling sales volume.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-[14px] font-bold text-on-surface-variant uppercase tracking-wider mb-6">Key Performance Indicators</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { label: 'Loan Disbursement', val: `₹ ${(dealer.metrics?.loan_disbursement / 100000).toFixed(2)} L`, trend: '+4.2%' },
                { label: 'Lead Generation', val: dealer.metrics?.lead_generation, trend: '-2.1%' },
                { label: 'Conversion Rate', val: `${dealer.metrics?.conversion_rate.toFixed(1)}%`, trend: '+1.1%' },
                { label: 'Customer Rating', val: dealer.metrics?.customer_rating.toFixed(1), star: true },
                { label: 'Activity Frequency', val: dealer.metrics?.activity_frequency, trend: 'Stable' },
                { label: 'Network Rank', val: '#42', trend: 'Top 10%' },
              ].map((kpi, idx) => (
                <div key={idx} className="flex flex-col border-l-2 border-outline-variant/30 pl-4">
                  <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">{kpi.label}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-[20px] font-bold text-[#1a1f36]">{kpi.val}</p>
                    {kpi.star && <span className="material-symbols-outlined text-[16px] text-yellow-500">star</span>}
                  </div>
                  {kpi.trend && <p className="text-[11px] font-semibold text-green-600 mt-1">{kpi.trend}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl bg-[#1a1f36] text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <span className="material-symbols-outlined text-primary text-[28px]">psychology</span>
              <h3 className="text-[18px] font-bold tracking-tight">AI Strategy Recommendations</h3>
            </div>
            
            <div className="space-y-4 relative z-10">
              {isAtRisk ? (
                <>
                  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 flex justify-between items-center group hover:bg-white/15 transition-colors">
                    <div>
                      <p className="text-[14px] font-bold">Schedule Manager Intervention</p>
                      <p className="text-[12px] text-white/70 mt-1">Dealer sales dropped by 15% this quarter. High probability of defection to Competitor A.</p>
                    </div>
                    <button onClick={() => alert('Strategy successfully executed! Analytics will be updated in 24 hours.')} className="px-5 py-2 bg-white text-[#1a1f36] rounded-lg text-[12px] font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity">Execute</button>
                  </div>
                  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 flex justify-between items-center group hover:bg-white/15 transition-colors">
                    <div>
                      <p className="text-[14px] font-bold">Targeted Incentive Scheme</p>
                      <p className="text-[12px] text-white/70 mt-1">Provide a 0.5% subvention offer to boost conversions back to baseline.</p>
                    </div>
                    <button onClick={() => alert('Strategy successfully executed! Analytics will be updated in 24 hours.')} className="px-5 py-2 bg-white text-[#1a1f36] rounded-lg text-[12px] font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity">Execute</button>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 flex justify-between items-center group hover:bg-white/15 transition-colors">
                    <div>
                      <p className="text-[14px] font-bold">Upsell Commercial Vehicles</p>
                      <p className="text-[12px] text-white/70 mt-1">High conversion in retail. Dealer is ready for CV expansion based on market density.</p>
                    </div>
                    <button onClick={() => alert('Strategy successfully executed! Analytics will be updated in 24 hours.')} className="px-5 py-2 bg-white text-[#1a1f36] rounded-lg text-[12px] font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity">Execute</button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealerProfile;
