import React, { useEffect, useState } from 'react';
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

  if (!dealer) return <div className="p-8">Loading dealer profile...</div>;

  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <section className="mb-8 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Link to="/dealers" className="text-primary hover:underline text-sm font-semibold flex items-center">
              <span className="material-symbols-outlined text-[16px] mr-1">arrow_back</span>
              Back to Directory
            </Link>
          </div>
          <h2 className="text-3xl font-bold text-on-surface flex items-center gap-4">
            {dealer.name}
            <span className={`px-3 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider ${
                dealer.status === 'Active' ? 'bg-primary-container text-on-primary-container' :
                dealer.status === 'At Risk' ? 'bg-error text-white' : 'bg-surface-variant text-on-surface-variant'
              }`}>
              {dealer.status}
            </span>
          </h2>
          <p className="text-base text-on-surface-variant mt-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">location_on</span>
            {dealer.region.name} | ID: D-{10000 + dealer.id}
          </p>
        </div>
      </section>

      {/* Grid Layout for Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Health Score & ML Predictions */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="glass-panel p-6 rounded-xl shadow-sm text-center">
            <h3 className="text-lg font-semibold text-on-surface mb-4">Dealer Health Score</h3>
            <div className="relative inline-flex items-center justify-center w-32 h-32 rounded-full border-[10px] border-surface-container-high">
              <div className="absolute inset-0 rounded-full border-[10px] border-green-500 border-l-transparent border-b-transparent rotate-[45deg]"></div>
              <div className="text-center">
                <span className="text-3xl font-bold text-on-surface">{Math.round(dealer.metrics?.health_score || 0)}</span>
              </div>
            </div>
            <p className="text-sm text-on-surface-variant mt-4">
              Performance is optimal. High conversion rate detected in recent month.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl shadow-sm border-t-4 border-error">
            <h3 className="text-lg font-semibold text-on-surface mb-2">Churn Risk Prediction</h3>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm font-semibold text-on-surface-variant">Probability</span>
              <span className="text-xl font-bold text-error">
                {dealer.status === 'At Risk' ? '68%' : dealer.status === 'Inactive' ? '99%' : '12%'}
              </span>
            </div>
            <div className="w-full bg-surface-container h-2 rounded-full mt-2">
              <div className={`h-full rounded-full ${dealer.status === 'At Risk' ? 'bg-error w-[68%]' : dealer.status === 'Inactive' ? 'bg-error w-full' : 'bg-green-500 w-[12%]'}`}></div>
            </div>
            <p className="text-xs text-on-surface-variant mt-4">
              Risk analysis based on activity frequency and recent sales volume.
            </p>
          </div>
        </div>

        {/* Right Column: Key Metrics & AI Recommendations */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="glass-panel p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-on-surface mb-6">Performance Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Lead Generation</p>
                <p className="text-xl font-bold text-on-surface">{dealer.metrics?.lead_generation}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Conversion Rate</p>
                <p className="text-xl font-bold text-on-surface">{dealer.metrics?.conversion_rate.toFixed(1)}%</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Customer Rating</p>
                <p className="text-xl font-bold text-on-surface flex items-center gap-1">
                  {dealer.metrics?.customer_rating.toFixed(1)}
                  <span className="material-symbols-outlined text-yellow-500 text-[18px]">star</span>
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Activity Frequency</p>
                <p className="text-xl font-bold text-on-surface">{dealer.metrics?.activity_frequency}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Loan Disbursement</p>
                <p className="text-xl font-bold text-on-surface">₹ {(dealer.metrics?.loan_disbursement / 100000).toFixed(2)} L</p>
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-xl shadow-sm bg-primary-fixed/20 border-primary-fixed">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary">psychology</span>
              <h3 className="text-lg font-semibold text-primary">AI Growth Recommendations</h3>
            </div>
            
            <div className="space-y-4">
              {dealer.status === 'At Risk' ? (
                <>
                  <div className="p-4 bg-surface rounded-lg border border-outline-variant flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-on-surface">Schedule Manager Visit</p>
                      <p className="text-sm text-on-surface-variant">Dealer sales dropped by 15% this quarter.</p>
                    </div>
                    <button className="px-4 py-2 bg-primary text-on-primary rounded-lg text-sm font-semibold">Action</button>
                  </div>
                  <div className="p-4 bg-surface rounded-lg border border-outline-variant flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-on-surface">Targeted Incentive Scheme</p>
                      <p className="text-sm text-on-surface-variant">Provide a 0.5% subvention offer to boost conversions.</p>
                    </div>
                    <button className="px-4 py-2 bg-primary text-on-primary rounded-lg text-sm font-semibold">Action</button>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-4 bg-surface rounded-lg border border-outline-variant flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-on-surface">Upsell Commercial Vehicles</p>
                      <p className="text-sm text-on-surface-variant">High conversion in retail. Ready for CV expansion.</p>
                    </div>
                    <button className="px-4 py-2 bg-primary text-on-primary rounded-lg text-sm font-semibold">Action</button>
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
