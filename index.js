// We use a fallback to ensure React is loaded even if the importmap flickers
import htm from 'htm';
const React = window.React;
const ReactDOM = window.ReactDOM;

const html = htm.bind(React.createElement);

const App = () => {
  const [url, setUrl] = React.useState('');

  const launchStealth = (target) => {
    const finalUrl = target.startsWith('http') ? target : `https://${target}`;
    const win = window.open('about:blank', '_blank');
    if (win) {
      win.document.body.style.margin = '0';
      win.document.body.style.height = '100vh';
      const iframe = win.document.createElement('iframe');
      iframe.src = finalUrl;
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = 'none';
      win.document.body.appendChild(iframe);
    }
  };

  return html`
    <div class="min-h-screen flex flex-col items-center justify-center p-6 bg-[#0a0a0b] text-white">
      <h1 class="text-5xl font-black mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        StealthCloud
      </h1>
      
      <div class="bg-white/5 backdrop-blur-md p-8 rounded-2xl w-full max-w-md border border-white/10 shadow-2xl">
        <input 
          type="text" 
          placeholder="Enter URL or Search..." 
          class="w-full p-4 bg-black/50 border border-white/10 rounded-lg mb-4 outline-none focus:border-blue-500 transition text-white"
          value=${url}
          onInput=${(e) => setUrl(e.target.value)}
        />
        
        <button 
          onclick=${() => launchStealth(`https://www.google.com{url}`)}
          class="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold mb-4 transition">
          Launch Stealth Search
        </button>

        <div class="h-px bg-white/10 my-6"></div>

        <button 
          onclick=${() => launchStealth('https://now.gg')}
          class="w-full py-4 bg-purple-600 hover:bg-purple-500 rounded-lg font-bold transition">
          Launch Roblox (Cloud Moon)
        </button>
      </div>
      
      <p class="mt-8 text-white/30 text-sm font-mono uppercase tracking-widest">About:Blank Cloaking Active</p>
    </div>
  `;
};

// Use the standard way to mount React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(html`<${App} />`);
