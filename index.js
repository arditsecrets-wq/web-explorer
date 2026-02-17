import htm from 'htm';
const html = htm.bind(window.React.createElement);

function App() {
  const [url, setUrl] = window.React.useState('');

  const launch = (target) => {
    const finalUrl = target.startsWith('http') ? target : `https://${target}`;
    const win = window.open('about:blank', '_blank');
    if (win) {
      const iframe = win.document.createElement('iframe');
      iframe.src = finalUrl;
      iframe.style.cssText = "position:fixed;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none;margin:0;padding:0;overflow:hidden;z-index:999999;";
      win.document.body.appendChild(iframe);
    }
  };

  return html`
    <div class="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0b] text-white p-4">
      <h1 class="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">StealthCloud Gateway</h1>
      
      <div class="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 w-full max-w-md">
        <input 
          class="w-full p-3 rounded bg-black/40 border border-white/20 mb-4 outline-none focus:border-blue-500" 
          placeholder="Search or URL..."
          value=${url}
          onInput=${(e) => setUrl(e.target.value)}
        />
        <button onclick=${() => launch(`https://www.google.com{url}`)} class="w-full py-3 bg-blue-600 rounded font-bold mb-4">Launch Stealth</button>
        <div class="h-px bg-white/10 my-4"></div>
        <button onclick=${() => launch('https://now.gg')} class="w-full py-3 bg-purple-600 rounded font-bold">Launch Roblox (Cloud)</button>
      </div>
    </div>
  `;
}

const root = window.ReactDOM.createRoot(document.getElementById('root'));
root.render(html`<${App} />`);
