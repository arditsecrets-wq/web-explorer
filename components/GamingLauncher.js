
import React from 'react';
import htm from 'htm';
import { Gamepad2, Zap, ExternalLink, Info, ShieldOff } from 'lucide-react';
import { launchInStealthMode } from '../utils/cloaking.js';

const html = htm.bind(React.createElement);

const games = [
  {
    title: "Roblox",
    description: "Join millions of experiences. Play directly in your browser without installs via now.gg.",
    url: "https://now.gg/apps/roblox-corporation/5349/roblox.html",
    imageUrl: "https://picsum.photos/seed/roblox/600/400"
  },
  {
    title: "Minecraft",
    description: "Classic exploration in the cloud. Optimized for low-spec browser environments.",
    url: "https://now.gg/apps/mojang/2534/minecraft.html",
    imageUrl: "https://picsum.photos/seed/mc/600/400"
  },
  {
    title: "Cloud Moon Games",
    description: "Access a library of Android titles directly through the Cloud Moon web portal.",
    url: "https://now.gg/apps/cloud-moon/9999/cloud-moon.html",
    imageUrl: "https://picsum.photos/seed/cloudmoon/600/400"
  }
];

const GamingLauncher = () => {
  return html`
    <section id="gaming" className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-sm">
              <${Gamepad2} className="w-5 h-5" />
              Available Platforms
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              Cloud <span className="gradient-text">Gaming Hub</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl">
              Each session is hosted in an isolated shadow window. If a cloud provider blocks the connection, use the "Direct Link" option.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl glass-effect border border-white/10 flex items-center gap-3">
              <${Zap} className="w-5 h-5 text-yellow-500" />
              <div>
                <div className="text-xs text-zinc-500 font-bold uppercase">Cloud Latency</div>
                <div className="text-sm font-bold">12ms (Optimal)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${games.map((game, idx) => html`
            <div 
              key=${idx}
              className="group relative flex flex-col bg-zinc-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src=${game.imageUrl} 
                  alt=${game.title} 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">${game.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">
                    ${game.description}
                  </p>
                </div>
                
                <div className="mt-8 space-y-3">
                  <button 
                    onClick=${() => launchInStealthMode(game.url)}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Shadow Launch</span>
                    <${ExternalLink} className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <a 
                    href=${game.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white text-xs font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 border border-white/5"
                  >
                    <${ShieldOff} className="w-3 h-3" />
                    Direct Link Fallback
                  </a>
                  <div className="flex items-center gap-1.5 text-[10px] text-zinc-600 justify-center">
                    <${Info} className="w-3 h-3" />
                    Shadow window wipes local history
                  </div>
                </div>
              </div>
            </div>
          `)}
        </div>
      </div>
    </section>
  `;
};

export default GamingLauncher;
