import React from 'react';
import htm from 'htm';
import { Shield, Ghost, Menu } from 'lucide-react';

const html = htm.bind(React.createElement);

const Header = () => {
  return html`
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <${Shield} className="w-8 h-8 text-blue-500" />
          <span className="text-xl font-bold tracking-tight">Stealth<span className="text-blue-500">Cloud</span></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Dashboard</a>
          <a href="#gaming" className="hover:text-white transition-colors">Cloud Gaming</a>
          <a href="#proxy" className="hover:text-white transition-colors">Web Proxy</a>
          <a href="#settings" className="hover:text-white transition-colors">Settings</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400">
            <${Ghost} className="w-3 h-3" />
            Encryption Active
          </div>
          <button className="md:hidden text-zinc-400">
            <${Menu} className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  `;
};

export default Header;