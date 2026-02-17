import React from 'react';
import htm from 'htm';
import { Ghost, ShieldAlert, Cpu, Monitor } from 'lucide-react';
import { launchInStealthMode } from '../utils/cloaking.js';

const html = htm.bind(React.createElement);

const Hero = () => {
  const handleLaunchStealth = () => {
    launchInStealthMode(window.location.href);
  };

  return html`
    <section className="relative pt-40 pb-20 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-white/10 text-xs font-bold uppercase tracking-widest text-blue-400">
            <${ShieldAlert} className="w-4 h-4" />
            V3 Encryption Protocol Active
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
            Privacy <br /> 
            <span className="gradient-text">Without Limits</span>
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            The ultimate portal for discrete browsing and cloud gaming. No history, no logs, just pure performance.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <button 
              onClick=${handleLaunchStealth}
              className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-lg rounded-2xl shadow-xl shadow-blue-500/20 transition-all flex items-center gap-3 group"
            >
              <${Ghost} className="w-6 h-6 group-hover:animate-pulse" />
              Launch Stealth Mode
            </button>
            <button className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-bold text-lg rounded-2xl border border-white/10 transition-all">
              Learn More
            </button>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="relative z-10 p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 shadow-2xl">
            <div className="bg-zinc-950 rounded-[2.2rem] overflow-hidden p-2">
              <div className="bg-zinc-900/50 rounded-3xl p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="text-xs font-mono text-zinc-500">status: connected</div>
                </div>
                
                <div className="space-y-4 font-mono">
                  <div className="text-sm text-blue-400">root@stealth-portal:~$ launch --mode stealth</div>
                  <div className="text-sm text-zinc-500">Loading modules... OK</div>
                  <div className="text-sm text-zinc-500">Initializing about:blank host... OK</div>
                  <div className="text-sm text-zinc-500">Injecting encrypted iframe... OK</div>
                  <div className="text-sm text-emerald-400">System Ready. Redirecting to shadow layer.</div>
                </div>

                <div className="pt-6 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl glass-effect border border-white/5 space-y-2">
                    <${Cpu} className="w-5 h-5 text-zinc-500" />
                    <div className="text-xs text-zinc-400">System Load</div>
                    <div className="text-lg font-bold">14.2%</div>
                  </div>
                  <div className="p-4 rounded-2xl glass-effect border border-white/5 space-y-2">
                    <${Monitor} className="w-5 h-5 text-zinc-500" />
                    <div className="text-xs text-zinc-400">Network Speed</div>
                    <div className="text-lg font-bold">1.2 Gbps</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/20 blur-[100px] -z-10 animate-pulse"></div>
        </div>
      </div>
    </section>
  `;
};

export default Hero;