import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DealerDirectory = () => {
  const [dealers, setDealers] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');

  const fetchDealers = () => {
    let url = 'http://localhost:8000/api/dealers?limit=100';
    if (search) url += `&search=${search}`;
    if (status) url += `&status=${status}`;
    
    axios.get(url)
      .then(res => setDealers(res.data))
      .catch(console.error);
  };

  useEffect(() => {
    fetchDealers();
  }, [search, status]);

  return (
    <div className="animate-fade-in">
      <section className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-semibold text-on-surface">Dealer Directory</h2>
          <p className="text-base text-on-surface-variant mt-1">Manage and monitor your regional dealer network.</p>
        </div>
      </section>

      <section className="glass-panel p-6 rounded-xl shadow-sm mb-6 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          <input 
            className="w-full bg-surface-container-low border border-outline-variant rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary-container outline-none" 
            placeholder="Search dealers by name..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <select 
          className="bg-surface-container-low border border-outline-variant rounded-full py-2 px-4 text-sm outline-none"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="At Risk">At Risk</option>
        </select>
        
        <button className="flex items-center gap-2 px-6 py-2 bg-primary text-on-primary rounded-full text-sm font-semibold shadow-md ml-auto hover:opacity-90 transition-opacity">
          <span className="material-symbols-outlined text-[20px]">filter_list</span>
          Advanced Filters
        </button>
      </section>

      <section className="glass-panel rounded-xl shadow-sm overflow-hidden mb-12">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="px-6 py-4 text-xs font-semibold text-on-surface-variant">Dealer Name</th>
                <th className="px-6 py-4 text-xs font-semibold text-on-surface-variant">Region</th>
                <th className="px-6 py-4 text-xs font-semibold text-on-surface-variant">Health Score</th>
                <th className="px-6 py-4 text-xs font-semibold text-on-surface-variant">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-on-surface-variant text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-high">
              {dealers.map(dealer => (
                <tr key={dealer.id} className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-fixed-dim overflow-hidden flex items-center justify-center text-primary font-bold">
                        {dealer.name.charAt(0)}
                      </div>
                      <div>
                        <Link to={`/dealers/${dealer.id}`} className="text-sm font-semibold text-primary hover:underline">{dealer.name}</Link>
                        <p className="text-[11px] text-on-surface-variant">ID: D-{10000 + dealer.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-on-surface">{dealer.region.name}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-[11px] font-bold">
                        {dealer.metrics ? Math.round(dealer.metrics.health_score) : 0}/100
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase ${
                      dealer.status === 'Active' ? 'bg-primary-container text-on-primary-container' :
                      dealer.status === 'At Risk' ? 'bg-error text-white' : 'bg-surface-variant text-on-surface-variant'
                    }`}>
                      {dealer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link to={`/dealers/${dealer.id}`}>
                      <button className="material-symbols-outlined text-primary hover:text-primary-container">arrow_forward</button>
                    </Link>
                  </td>
                </tr>
              ))}
              {dealers.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-on-surface-variant">
                    No dealers found matching your search criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default DealerDirectory;
