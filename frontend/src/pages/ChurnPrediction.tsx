import React from 'react';

const ChurnPrediction = () => {
  const highRiskDealers = [
    {
      id: 'SF-90210',
      name: 'Apex Motors Pvt Ltd',
      initials: 'AP',
      region: 'Chennai Cluster',
      probability: 87,
      trendWidth: '87%',
      riskFactors: ['Low Engagement', 'Volume Drop -22%'],
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7IgPdcDVFRvXTwhKtm8-S-r5iR1HG98s2FlWPELa8bEs2nEkBYUqYlRTEtmD_QK8lq5wkZxuWsE_XUqZYx7Y3UYFzi5T42aIQqNOIFSbDFQs_kVFCwAFFLUCmrxNGhn2Sh-HQ37b9AWKZ2oSYk2-Lvo7HKaPYtd_HC3PxXddcI3HJX8_TXTHuMB7fZcQJit-sh67QDhIpbJA83HuJztbIG-u4gLBGC5mNhxwH6AfGTrW0ZreOmXwNJDFhtMwQOuQ-iU4v3h_7gnU',
      riskColor: 'error',
      riskLabel: 'High Risk'
    },
    {
      id: 'SF-88211',
      name: 'Blue Moon Automotives',
      initials: 'BM',
      region: 'Madurai South',
      probability: 62,
      trendWidth: '62%',
      riskFactors: ['Competitor Entry', 'Delayed Payments'],
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkrkFnh4UP9ZDCOoskqaBKKj20ZnMhouTbo5nMzJNRUZY8f9fviCdYutHIjZP9r5ahASLMYVt-8nGfV64rUP2yayS03Ei8Yq26jCnUjJmooZShmhg0i0FHJEt7nMUTyKt9phY-qS176z8o6wKxuDT0TeU-IF8SHqgZSJcJw4L62UBlBZpXr-JkuLRdRN5LxHaQxiTIjVC4-vBrhNtucrYP4TzSI6lbT1hvdB6_wDWm-JPMYSRoQzf51Qkhz0v8TJojW6XMZlaRDgY',
      riskColor: 'secondary-container',
      riskLabel: 'Medium Risk'
    },
    {
      id: 'SF-77124',
      name: 'Sunrise Royal Hub',
      initials: 'SR',
      region: 'Coimbatore',
      probability: 79,
      trendWidth: '79%',
      riskFactors: ['Inventory Stagnation', 'Staff Turnover'],
      urgent: true,
      riskColor: 'error',
      riskLabel: 'High Risk'
    }
  ];

  return (
    <div className="space-y-gutter animate-fade-in-up">
      {/* Page Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary">Churn Prediction Analysis</h2>
          <p className="text-on-surface-variant text-body-lg">Proactive AI monitoring for high-risk dealer partnerships.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-2 border border-outline/30 rounded-lg font-label-lg flex items-center gap-2 hover:bg-white/50 backdrop-blur-sm transition-colors">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            Filter Risk
          </button>
          <button className="px-6 py-2 bg-primary text-on-primary rounded-lg font-label-lg flex items-center gap-2 hover:opacity-90 shadow-sm transition-all">
            <span className="material-symbols-outlined text-sm">download</span>
            Export Risk Report
          </button>
        </div>
      </div>

      {/* Risk Overview Cards */}
      <div className="grid grid-cols-12 gap-gutter mb-gutter">
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-gutter">
          <div className="glass-card p-6 rounded-xl border-l-4 border-error">
            <p className="text-on-surface-variant font-label-lg mb-2">CRITICAL RISK</p>
            <h3 className="text-headline-lg font-bold text-error">12</h3>
            <p className="text-body-md text-on-surface-variant mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-error text-sm">trending_up</span>
              +3 since last week
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl border-l-4 border-secondary-container">
            <p className="text-on-surface-variant font-label-lg mb-2">MODERATE RISK</p>
            <h3 className="text-headline-lg font-bold text-secondary-container">48</h3>
            <p className="text-body-md text-on-surface-variant mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-on-surface-variant text-sm">horizontal_rule</span>
              Stable trend
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl border-l-4 border-primary">
            <p className="text-on-surface-variant font-label-lg mb-2">RETENTION RATE</p>
            <h3 className="text-headline-lg font-bold text-primary">94.2%</h3>
            <p className="text-body-md text-on-surface-variant mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-primary text-sm">trending_up</span>
              Targeting 96%
            </p>
          </div>
        </div>

        {/* Prediction Confidence Animation */}
        <div className="col-span-12 lg:col-span-4 glass-card rounded-xl overflow-hidden relative min-h-[140px] flex items-center justify-center">
          <div className="relative z-10 text-center px-6">
            <p className="font-label-lg text-primary font-bold tracking-widest">AI ACCURACY</p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl font-black text-primary">98.4</span>
              <span className="text-lg font-bold text-primary">%</span>
            </div>
            <p className="text-[10px] text-on-surface-variant uppercase mt-1">Prediction Confidence Level</p>
          </div>
        </div>
      </div>

      {/* Main Content Area: Dealer Cards & AI Panel */}
      <div className="grid grid-cols-12 gap-gutter">
        {/* Dealer Prediction List */}
        <div className="col-span-12 lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between px-2">
            <h4 className="font-title-lg text-title-lg">High Risk Dealers</h4>
            <span className="text-label-md text-on-surface-variant uppercase tracking-wider">Sorted by Probability</span>
          </div>

          {highRiskDealers.map(dealer => (
            <div key={dealer.id} className="glass-card border border-outline-variant/30 rounded-xl p-6 hover:shadow-md transition-all group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-${dealer.riskColor === 'error' ? 'error-container' : 'secondary-container/20'} flex items-center justify-center text-${dealer.riskColor === 'error' ? 'error' : 'secondary'} font-bold`}>
                    {dealer.initials}
                  </div>
                  <div>
                    <h5 className="font-title-md text-title-md group-hover:text-primary transition-colors">{dealer.name}</h5>
                    <p className="text-label-md text-on-surface-variant">ID: {dealer.id} • {dealer.region}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`bg-${dealer.riskColor === 'error' ? 'error/10' : 'secondary-container/10'} text-${dealer.riskColor === 'error' ? 'error' : 'secondary'} text-[10px] font-bold px-2 py-1 rounded uppercase mb-1`}>{dealer.riskLabel}</div>
                  <div className="text-2xl font-black text-on-surface">{dealer.probability}%</div>
                  <p className="text-[10px] text-on-surface-variant">Probability</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <p className="text-label-md text-on-surface-variant mb-2">Churn Probability Trend</p>
                  <div className="w-full bg-surface-container/50 h-2 rounded-full overflow-hidden">
                    <div className={`bg-${dealer.riskColor === 'error' ? 'error' : 'secondary-container'} h-full rounded-full`} style={{ width: dealer.trendWidth }}></div>
                  </div>
                </div>
                <div>
                  <p className="text-label-md text-on-surface-variant mb-2">Primary Risk Factors</p>
                  <div className="flex flex-wrap gap-2">
                    {dealer.riskFactors.map(factor => (
                      <span key={factor} className="bg-white/50 text-on-surface-variant text-[11px] px-3 py-1 rounded-full border border-outline-variant/30">
                        {factor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-outline-variant/30 flex justify-between items-center">
                {dealer.urgent ? (
                  <span className="text-body-md text-error flex items-center gap-1 font-medium">
                    <span className="material-symbols-outlined text-sm">warning</span>
                    Urgent intervention suggested
                  </span>
                ) : (
                  <div className="flex -space-x-2">
                    {dealer.avatar && (
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 bg-cover bg-center" style={{ backgroundImage: `url('${dealer.avatar}')` }}></div>
                    )}
                    {!dealer.urgent && dealer.avatar && (
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-white/80 flex items-center justify-center text-[10px] text-on-surface font-bold backdrop-blur-sm">AI</div>
                    )}
                  </div>
                )}
                <button className="text-primary font-label-lg flex items-center gap-1 hover:underline">
                  View Full Analysis
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: AI Insights Panel */}
        <div className="col-span-12 lg:col-span-4">
          <div className="glass-card rounded-xl p-6 sticky top-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <h4 className="font-title-lg text-title-lg">AI Risk Insights</h4>
            </div>

            <div className="space-y-6">
              <div>
                <h5 className="text-label-lg font-bold text-primary flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  TOP CHURN DRIVERS
                </h5>
                <div className="space-y-4">
                  <div className="p-3 bg-white/40 rounded-lg border border-outline-variant/30">
                    <p className="font-title-md text-title-md mb-1">Declining Sales Volume</p>
                    <p className="text-body-md text-on-surface-variant">Accounts for 42% of churn across high-risk dealers. Average drop: 18% month-on-month.</p>
                  </div>
                  <div className="p-3 bg-white/40 rounded-lg border border-outline-variant/30">
                    <p className="font-title-md text-title-md mb-1">Interaction Frequency</p>
                    <p className="text-body-md text-on-surface-variant">Dealers with less than 2 contacts/month are 3.5x more likely to transition to critical risk.</p>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-label-lg font-bold text-secondary flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  ACTIONABLE ADVICE
                </h5>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                    <p className="text-body-md">Schedule a performance review for Apex Motors before Friday.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                    <p className="text-body-md">Issue a "Loyalty Incentive" package for Medium Risk dealers.</p>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-primary-container/10 border border-primary/20 rounded-xl">
                <p className="text-body-md italic text-on-surface mb-3">"AI has detected a cluster of churn in the South Region. This correlates with a new competitor launching financing offers."</p>
                <button className="w-full py-3 bg-primary text-on-primary rounded-lg font-label-lg hover:opacity-90 transition-opacity">Generate Counter-Offer Strategy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChurnPrediction;
