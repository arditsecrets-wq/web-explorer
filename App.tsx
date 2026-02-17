
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProxySearch from './components/ProxySearch';
import GamingLauncher from './components/GamingLauncher';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-blue-500 selection:text-white">
      {/* Background gradients for overall atmosphere */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[150px] rounded-full"></div>
      </div>

      <Header />
      
      <main className="relative">
        <Hero />
        
        {/* Separator Line */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>
        
        <ProxySearch />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>
        
        <GamingLauncher />
      </main>

      <Footer />
      
      {/* Floating Status Indicator */}
      <div className="fixed bottom-6 left-6 z-[60] hidden sm:block">
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl glass-effect border border-white/10 shadow-2xl">
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-ping absolute inset-0"></div>
            <div className="w-3 h-3 rounded-full bg-blue-500 relative"></div>
          </div>
          <div>
            <div className="text-[10px] text-zinc-500 font-bold uppercase leading-none mb-1">Stealth Mode</div>
            <div className="text-xs font-bold leading-none">READY FOR INJECTION</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
