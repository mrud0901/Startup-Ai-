

const SalesExecutiveDashboard = () => {
  return (
    <div className="animate-fade-in relative flex flex-col gap-6">
      <section className="flex justify-between items-end">
        <div>
          <h2 className="text-[28px] font-bold text-on-surface tracking-tight leading-none">My Territory</h2>
          <p className="text-[14px] text-on-surface-variant mt-2">You have 4 pending actions today. You are 85% to your monthly target.</p>
        </div>
        <button onClick={() => alert('Initiating Field Visit Tracker...')} className="px-6 py-2 bg-primary text-white rounded-lg text-[13px] font-bold shadow-md hover:bg-primary/90 transition-colors">
          Start Field Visit
        </button>
      </section>

      {/* Action Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'Assigned Dealers', val: '42', icon: 'storefront', color: 'text-primary', bg: 'bg-primary/10' },
          { label: 'Today\'s Visits', val: '5', icon: 'directions_car', color: 'text-secondary', bg: 'bg-secondary/10' },
          { label: 'Target Achieved', val: '85%', icon: 'task_alt', color: 'text-green-600', bg: 'bg-green-100' },
        ].map((kpi, i) => (
          <div key={i} className={`glass-card p-5 rounded-xl animate-fade-in-up stagger-${i+1} flex items-center gap-4`}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${kpi.bg}`}>
              <span className={`material-symbols-outlined ${kpi.color}`}>{kpi.icon}</span>
            </div>
            <div>
              <p className="text-[12px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">{kpi.label}</p>
              <h3 className="text-[24px] font-bold text-on-surface leading-none">{kpi.val}</h3>
            </div>
          </div>
        ))}
      </section>

      {/* AI Task List */}
      <section className="glass-card rounded-xl overflow-hidden animate-fade-in-up stagger-4">
        <div className="p-5 border-b border-outline-variant/30 flex justify-between items-center bg-surface/50">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">smart_toy</span>
            <h4 className="text-[16px] font-bold text-on-surface">AI Prioritized Tasks</h4>
          </div>
        </div>
        <div className="divide-y divide-outline-variant/20">
          {[
            { dealer: 'Kumar Autos', action: 'Immediate Visit', reason: 'High Churn Risk Predicted', tag: 'Critical', tagColor: 'bg-error/10 text-error' },
            { dealer: 'Balaji Motors', action: 'Pitch CV Loan', reason: 'Ready for Upsell', tag: 'Opportunity', tagColor: 'bg-green-100 text-green-700' },
            { dealer: 'Sri Ram Dealers', action: 'Document Collection', reason: 'Pending KYC for 3 days', tag: 'Routine', tagColor: 'bg-surface-variant text-on-surface-variant' },
          ].map((task, i) => (
            <div key={i} className="p-5 hover:bg-surface/50 transition-colors flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${task.tagColor}`}>{task.tag}</span>
                  <p className="text-[14px] font-bold text-on-surface">{task.dealer}</p>
                </div>
                <p className="text-[13px] text-on-surface-variant"><span className="font-semibold text-primary">{task.action}:</span> {task.reason}</p>
              </div>
              <button onClick={() => alert('Task Marked as Complete!')} className="p-2 hover:bg-surface-container rounded-full text-on-surface-variant transition-colors">
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SalesExecutiveDashboard;
