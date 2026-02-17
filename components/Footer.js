import React from 'react';
import htm from 'htm';
import { Shield, Github, Twitter, Cpu } from 'lucide-react';

const html = htm.bind(React.createElement);

const Footer = () => {
  return html`
    <footer className="py-20 px-6 border-t border-white/5 bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <${Shield} className="w-6 h-6 text-blue-500" />
            <span className="text-lg font-bold tracking-tight">StealthCloud</span>
          </div>
          <p className="text-zinc-500 text-sm max-w-xs">
            Built for privacy advocates worldwide. High-performance cloud gaming portal.
          </p>
        </div>

        <div className="flex gap-12">
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Product</h4>
            <ul className="text-sm space-y-2 text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Legal</h4>
            <ul className="text-sm space-y-2 text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="p-3 rounded-full glass-effect border border-white/5 hover:border-white/20 text-zinc-400 hover:text-white transition-all">
            <${Github} className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 rounded-full glass-effect border border-white/5 hover:border-white/20 text-zinc-400 hover:text-white transition-all">
            <${Twitter} className="w-5 h-5" />
          </a>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2 text-emerald-500 text-xs font-mono">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              Network Status: Nominal
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600 font-mono">
        <div>© 2024 STEALTHCLOUD SYSTEMS INC.</div>
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><${Cpu} className="w-3 h-3" /> Encrypted Connection</span>
          <span>//</span>
          <span>SECURE GATEWAY ENHANCED</span>
        </div>
      </div>
    </footer>
  `;
};

export default Footer;