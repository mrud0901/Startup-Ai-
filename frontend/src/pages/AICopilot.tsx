import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

interface ChatMessage {
  role: 'ai' | 'user';
  text: string;
}

const AICopilot = () => {
  const { user } = useAuth();
  const [query, setQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { role: 'ai', text: `Good morning, ${user?.name || 'team'}. I have analyzed the overnight data. Region South has a 12% drop in conversion rates, while 3 dealers in Region West are marked as high churn risk. How would you like to proceed?` }
  ]);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory, isTyping]);

  const generateResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('churn') || lowerInput.includes('risk') || lowerInput.includes('defec')) {
      return `I've analyzed the churn models. Dealers 'Sai Motors' and 'Lakshmi Auto' show a 78% probability of defection in the next 30 days due to delayed payouts and competitor subvention schemes. I recommend scheduling an immediate retention call and approving a 0.5% bonus payout.`;
    } 
    else if (lowerInput.includes('region') || lowerInput.includes('south') || lowerInput.includes('west')) {
      return `The Southern region's 12% drop is heavily correlated with a recent aggressive campaign by Competitor B in Tamil Nadu. However, our Commercial Vehicle portfolio is still outperforming target by 4%. Shall I draft a targeted counter-campaign for the affected zones?`;
    }
    else if (lowerInput.includes('report') || lowerInput.includes('export') || lowerInput.includes('board')) {
      return `I am compiling the data now. The Executive Board Report will be available in the Reports tab shortly. It highlights our 85% goal completion and recommends a shift in Q4 focus toward rural tractor financing.`;
    }
    else if (lowerInput.includes('health') || lowerInput.includes('sales') || lowerInput.includes('performance')) {
      return `Overall dealer health index is at 82/100 (Stable). We have 14 dealers in the 'Excellent' tier who are eligible for the Platinum Rewards program. Do you want me to initiate their automatic upgrades?`;
    }
    else {
      return `Based on my current analysis of the CRM and market intelligence feeds, that approach aligns with our Q3 objectives. Let me run a deeper simulation on the financial impact. I will have the results ready in 2 minutes.`;
    }
  };

  const handleSend = () => {
    if (!query.trim()) return;
    
    const userMessage = query;
    setChatHistory(prev => [...prev, { role: 'user', text: userMessage }]);
    setQuery('');
    setIsTyping(true);
    
    // Simulate thinking/processing time
    setTimeout(() => {
      setIsTyping(false);
      setChatHistory(prev => [...prev, { role: 'ai', text: generateResponse(userMessage) }]);
    }, 1500 + Math.random() * 1000); // 1.5 - 2.5 seconds delay
  };

  return (
    <div className="h-full flex flex-col lg:flex-row gap-6 animate-fade-in">
      {/* Left Column: Chat Interface */}
      <div className="flex-1 flex flex-col bg-white rounded-2xl border border-outline-variant/50 shadow-sm overflow-hidden h-[calc(100vh-120px)]">
        <div className="p-4 border-b border-outline-variant/30 flex justify-between items-center bg-surface">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[20px]">psychology</span>
            </div>
            <div>
              <h2 className="font-semibold text-[15px] text-on-surface">Startup AI Copilot</h2>
              <p className="text-[11px] text-on-surface-variant flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> System Online & connected to Database
              </p>
            </div>
          </div>
          <button className="text-on-surface-variant hover:text-primary transition-colors material-symbols-outlined">more_horiz</button>
        </div>

        <div className="flex-1 p-6 overflow-y-auto bg-[#fafbfc] flex flex-col gap-6 scroll-smooth">
          {chatHistory.map((msg, idx) => (
            <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'animate-fade-in-up'}`}>
              <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center shadow-sm ${msg.role === 'ai' ? 'bg-primary text-white' : 'bg-[#1a1f36] text-white'}`}>
                <span className="material-symbols-outlined text-[16px]">{msg.role === 'ai' ? 'smart_toy' : 'person'}</span>
              </div>
              <div className={`p-4 rounded-2xl max-w-[80%] text-[14px] leading-relaxed ${msg.role === 'ai' ? 'bg-white border border-outline-variant/30 text-on-surface' : 'bg-surface text-on-surface'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-4 animate-fade-in-up">
              <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center shadow-sm bg-primary text-white">
                <span className="material-symbols-outlined text-[16px]">smart_toy</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-outline-variant/30 text-on-surface flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{animationDelay: '0ms'}}></span>
                <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{animationDelay: '150ms'}}></span>
                <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{animationDelay: '300ms'}}></span>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="p-4 bg-white border-t border-outline-variant/30">
          <div className="relative">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              disabled={isTyping}
              placeholder={isTyping ? "Copilot is thinking..." : "Ask Copilot to analyze regions, dealers, or predict churn..."}
              className="w-full bg-surface border border-outline-variant/50 rounded-xl py-3 pl-4 pr-12 text-[14px] focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-on-surface-variant/60 disabled:opacity-50"
            />
            <button 
              onClick={handleSend}
              disabled={isTyping}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Column: AI Context Panel */}
      <div className="w-full lg:w-[400px] flex flex-col gap-4 overflow-y-auto h-[calc(100vh-120px)] scroll-hide">
        {/* Suggested Queries */}
        <div className="glass-card p-5 rounded-2xl">
          <h3 className="text-[13px] font-bold text-on-surface-variant uppercase tracking-wider mb-3">Suggested Queries</h3>
          <div className="flex flex-col gap-2">
            {[
              "Which dealers require immediate intervention?",
              "What region has the highest churn risk?",
              "Generate activation strategy for South Region"
            ].map((q, i) => (
              <button key={i} onClick={() => {setQuery(q); setTimeout(() => handleSend(), 100);}} disabled={isTyping} className="text-left p-3 rounded-lg border border-outline-variant/30 hover:border-primary/50 hover:bg-primary/5 transition-colors text-[13px] text-on-surface flex items-center gap-2 group disabled:opacity-50">
                <span className="material-symbols-outlined text-[16px] text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Business Recommendations */}
        <div className="glass-card p-5 rounded-2xl border-l-4 border-l-secondary">
          <h3 className="text-[13px] font-bold text-on-surface-variant uppercase tracking-wider mb-3">Live Insights</h3>
          <div className="space-y-4">
            <div>
              <p className="text-[14px] font-semibold text-on-surface">Growth Opportunity Detected</p>
              <p className="text-[13px] text-on-surface-variant mt-1">Commercial Vehicle financing shows a 14% gap in Western districts. Recommending focused campaigns.</p>
              <button className="mt-2 text-[12px] font-semibold text-primary hover:underline">Deploy Campaign</button>
            </div>
            <div className="h-[1px] bg-outline-variant/30"></div>
            <div>
              <p className="text-[14px] font-semibold text-error">Critical At-Risk Dealers</p>
              <p className="text-[13px] text-on-surface-variant mt-1">3 top-tier dealers in Tamil Nadu showing predictive churn patterns. Immediate action required.</p>
              <button className="mt-2 text-[12px] font-semibold text-primary hover:underline">View Dealers</button>
            </div>
          </div>
        </div>
        
        {/* AI Confidence Status */}
        <div className="glass-card p-5 rounded-2xl flex items-center justify-between">
          <div>
            <h3 className="text-[13px] font-bold text-on-surface-variant uppercase tracking-wider">Model Accuracy</h3>
            <p className="text-[24px] font-bold text-primary mt-1">94.2%</p>
          </div>
          <div className="w-12 h-12 rounded-full border-4 border-primary border-t-primary-container animate-spin" style={{animationDuration: '3s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default AICopilot;
