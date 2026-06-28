

const Reports = () => {


  const reports = [
    { id: 1, name: 'Q3 Regional Performance Review', date: 'Oct 15, 2026', type: 'Executive Summary', status: 'Ready' },
    { id: 2, name: 'Dealer Defection Risk Analysis', date: 'Oct 14, 2026', type: 'AI Predictive Model', status: 'Ready' },
    { id: 3, name: 'Commercial Vehicle Subvention Impact', date: 'Oct 10, 2026', type: 'Campaign Analysis', status: 'Archived' },
    { id: 4, name: 'Monthly Target Run-Rate (South)', date: 'Oct 01, 2026', type: 'Sales Metrics', status: 'Ready' },
  ];

  return (
    <div className="animate-fade-in flex flex-col gap-8 max-w-6xl mx-auto">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-[32px] font-bold text-on-surface tracking-tight leading-none">Intelligence Reports</h2>
          <p className="text-[14px] text-on-surface-variant mt-2">Access generated board reports, AI risk analysis, and historical performance data.</p>
        </div>
        <button onClick={() => alert('Opening Custom Report Builder...')} className="px-6 py-2.5 bg-[#1a1f36] text-white rounded-lg text-[13px] font-bold shadow-md hover:bg-[#1a1f36]/90 transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">add</span> Create Custom Report
        </button>
      </header>

      <div className="bg-white border border-outline-variant/40 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-outline-variant/30 flex gap-4 bg-surface/50">
          <div className="relative flex-1 max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
            <input type="text" placeholder="Search reports by name, type, or date..." className="w-full bg-white border border-outline-variant/50 rounded-lg py-2 pl-9 pr-4 text-[13px] focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
          </div>
          <button className="px-4 py-2 bg-white border border-outline-variant/50 rounded-lg text-[13px] font-semibold text-on-surface hover:bg-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">filter_list</span> Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface/30">
                <th className="px-6 py-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Report Name</th>
                <th className="px-6 py-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Date Generated</th>
                <th className="px-6 py-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {reports.map((report) => (
                <tr key={report.id} className="hover:bg-surface/50 transition-colors group">
                  <td className="px-6 py-4">
                    <p className="text-[14px] font-semibold text-on-surface">{report.name}</p>
                  </td>
                  <td className="px-6 py-4 text-[13px] text-on-surface-variant">{report.date}</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-surface-container rounded-md text-[11px] font-semibold text-on-surface-variant border border-outline-variant/30">{report.type}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`flex items-center gap-1.5 text-[12px] font-bold ${report.status === 'Ready' ? 'text-green-600' : 'text-on-surface-variant'}`}>
                      {report.status === 'Ready' && <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>}
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => alert('Downloading PDF...')} className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded-lg transition-colors tooltip-trigger" title="Download">
                        <span className="material-symbols-outlined text-[20px]">download</span>
                      </button>
                      <button onClick={() => alert('Opening Document Viewer...')} className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded-lg transition-colors tooltip-trigger" title="View">
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                      <button onClick={() => alert('Sharing report...')} className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded-lg transition-colors tooltip-trigger" title="Share">
                        <span className="material-symbols-outlined text-[20px]">share</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;
