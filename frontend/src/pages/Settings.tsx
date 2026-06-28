import { useState } from 'react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'My Profile', icon: 'person' },
    { id: 'preferences', label: 'Preferences', icon: 'tune' },
    { id: 'notifications', label: 'Notifications', icon: 'notifications' },
    { id: 'security', label: 'Security', icon: 'shield' },
    { id: 'team', label: 'Team Management', icon: 'group' },
    { id: 'billing', label: 'Billing & Plans', icon: 'credit_card' },
  ];

  return (
    <div className="animate-fade-in relative flex flex-col gap-8 max-w-6xl mx-auto">
      <header>
        <h2 className="text-[32px] font-bold text-on-surface tracking-tight leading-none">Settings</h2>
        <p className="text-[14px] text-on-surface-variant mt-2">Manage your account settings, team preferences, and security configurations.</p>
      </header>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 flex-shrink-0 flex flex-col gap-1">
          {tabs.map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-semibold transition-all ${
                activeTab === tab.id 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </aside>

        {/* Content Area */}
        <main className="flex-1 w-full bg-white border border-outline-variant/40 rounded-2xl shadow-sm overflow-hidden min-h-[500px]">
          {activeTab === 'profile' && (
            <div className="p-8 animate-fade-in">
              <h3 className="text-[20px] font-bold text-on-surface mb-6">Profile Settings</h3>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-primary to-primary-container flex items-center justify-center text-white font-bold text-[24px] shadow-lg">
                  RM
                </div>
                <div>
                  <button onClick={() => alert('Uploading photo...')} className="px-4 py-2 bg-surface border border-outline-variant rounded-lg text-[13px] font-bold text-on-surface shadow-sm hover:bg-surface-container transition-colors">
                    Upload new photo
                  </button>
                  <p className="text-[11px] text-on-surface-variant mt-2">At least 800x800 px recommended. JPG or PNG.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[12px] font-bold text-on-surface-variant mb-2">First Name</label>
                  <input type="text" defaultValue="Arjun" className="w-full bg-surface border border-outline-variant/50 rounded-lg px-4 py-2.5 text-[14px] text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-on-surface-variant mb-2">Last Name</label>
                  <input type="text" defaultValue="Menon" className="w-full bg-surface border border-outline-variant/50 rounded-lg px-4 py-2.5 text-[14px] text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[12px] font-bold text-on-surface-variant mb-2">Email Address</label>
                  <input type="email" defaultValue="arjun.menon@startupai.com" className="w-full bg-surface border border-outline-variant/50 rounded-lg px-4 py-2.5 text-[14px] text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[12px] font-bold text-on-surface-variant mb-2">Role & Title</label>
                  <input type="text" defaultValue="Regional Manager - South" disabled className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-2.5 text-[14px] text-on-surface-variant opacity-70 cursor-not-allowed" />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-outline-variant/30 flex justify-end gap-3">
                <button className="px-5 py-2.5 border border-outline-variant rounded-lg text-[13px] font-bold text-on-surface hover:bg-surface transition-colors">Cancel</button>
                <button onClick={() => alert('Profile updated successfully!')} className="px-5 py-2.5 bg-primary text-white rounded-lg text-[13px] font-bold shadow-md hover:bg-primary/90 transition-colors">Save Changes</button>
              </div>
            </div>
          )}

          {activeTab !== 'profile' && (
            <div className="p-8 h-full flex flex-col items-center justify-center text-center animate-fade-in opacity-60">
              <span className="material-symbols-outlined text-[64px] text-primary mb-4">{tabs.find(t => t.id === activeTab)?.icon}</span>
              <h3 className="text-[20px] font-bold text-on-surface mb-2">{tabs.find(t => t.id === activeTab)?.label} Configuration</h3>
              <p className="text-[14px] text-on-surface-variant max-w-sm">This section is currently locked for this demo environment. Contact an administrator to modify these settings.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Settings;
