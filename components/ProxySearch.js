import React, { useState } from 'react';
import htm from 'htm';
import { Search, Globe, ShieldCheck, AlertCircle, Copy, Check } from 'lucide-react';
import { launchInStealthMode, processSearchQuery } from '../utils/cloaking.js';

const html = htm.bind(React.createElement);

const ProxySearch = () => {
  const [query, setQuery] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    const finalUrl = processSearchQuery(query);
    launchInStealthMode(finalUrl);
  };

  const handleCopyLink = () => {
    const url = "https://web.cloudmoonapp.com";
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return html`
    <section id="proxy" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Anonymous <span className="gradient-text">Web Proxy</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Browse through a privacy-hardened tunnel. Results open in a clean about:blank instance to wipe your local breadcrumbs.
          </p>
        </div>

        <div className="space-y-6">
          <form onSubmit=${handleSearch} className="relative group max-w-2xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative flex items-center bg-zinc-900 rounded-xl overflow-hidden p-1.5 shadow-2xl border border-white/5">
              <div className="pl-4 text-zinc-500">
                <${Globe} className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                value=${query}
                onInput=${(e) => setQuery(e.target.value)}
                placeholder="Enter URL or search term..."
                className="flex-1 bg-transparent px-4 py-3 outline-none text-zinc-100 placeholder:text-zinc-600 text-lg"
              />
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3 rounded-lg transition-all flex items-center gap-2 group"
              >
                <span>Proxy Launch</span>
                <${Search} className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </form>

          <div className="max-w-md mx-auto">
            <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] mb-3">Featured Gaming Portal</div>
            <div 
              onClick=${handleCopyLink}
              className=${`group relative flex items-center justify-between gap-4 p-3 rounded-xl border transition-all cursor-pointer ${
                copied 
                ? 'bg-emerald-500/10 border-emerald-500/30' 
                : 'bg-white/5 border-white/10 hover:border-blue-500/30 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <div className=${`p-2 rounded-lg ${copied ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'}`}>
                  <${Globe} className="w-4 h-4" />
                </div>
                <code className=${`text-sm font-mono truncate ${copied ? 'text-emerald-400' : 'text-zinc-300'}`}>
                  https://web.cloudmoonapp.com
                </code>
              </div>
              <div className="flex items-center gap-2">
                <span className=${`text-[10px] font-bold uppercase transition-opacity duration-300 ${copied ? 'opacity-100 text-emerald-400' : 'opacity-0'}`}>
                  Copied!
                </span>
                ${copied ? html`<${Check} className="w-4 h-4 text-emerald-400" />` : html`<${Copy} className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />`}
              </div>
              ${!copied && html`<div className="absolute inset-0 rounded-xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>`}
            </div>
          </div>

          <button 
            onClick=${() => setShowWarning(!showWarning)}
            className="text-xs text-zinc-500 hover:text-blue-400 transition-colors flex items-center gap-1 mx-auto"
          >
            <${AlertCircle} className="w-3 h-3" />
            Why do some sites show "Refused to connect"?
          </button>

          ${showWarning && html`
            <div className="max-w-xl mx-auto p-5 rounded-2xl bg-blue-500/5 border border-blue-500/10 text-xs text-zinc-400 leading-relaxed text-left animate-in fade-in slide-in-from-top-2 duration-300">
              <strong className="text-blue-400 block mb-2 text-sm uppercase tracking-wider">Security Alert: X-Frame-Options</strong>
              Many major sites forbid being displayed in a "Shadow Window".
              <div className="mt-2 space-y-2">
                <p>• <strong>The Fix:</strong> Use frame-friendly search engines like DuckDuckGo (default).</p>
                <p>• <strong>Advanced:</strong> If a site fails, try visiting it directly or use a dedicated Web Unblocker.</p>
              </div>
            </div>
          `}
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md glass-effect border border-white/5">
            <${ShieldCheck} className="w-3.5 h-3.5 text-emerald-500" />
            No History Tracking
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md glass-effect border border-white/5">
            <${ShieldCheck} className="w-3.5 h-3.5 text-emerald-500" />
            IP Masking
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md glass-effect border border-white/5">
            <${ShieldCheck} className="w-3.5 h-3.5 text-emerald-500" />
            SSL Enforcement
          </div>
        </div>
      </div>
    </section>
  `;
};

export default ProxySearch;