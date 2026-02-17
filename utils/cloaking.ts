
/**
 * Launches a URL inside a new about:blank window to hide browser history.
 * For the current site, it injects the HTML source directly to bypass 
 * 'X-Frame-Options: SAMEORIGIN' restrictions.
 */
export const launchInStealthMode = (url: string) => {
  const isSelf = !url || url === window.location.href || url === '/' || url === window.location.origin;
  const newWin = window.open('about:blank', '_blank');
  
  if (!newWin) {
    alert('Pop-up blocked! Please allow pop-ups for stealth mode to function.');
    return;
  }

  // Disguise the window
  const doc = newWin.document;
  doc.title = 'Google Drive - My Drive';
  
  // Add a fake favicon
  const link = doc.createElement('link');
  link.rel = 'icon';
  link.href = 'https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png';
  doc.head.appendChild(link);

  if (isSelf) {
    // Direct injection for current page to bypass all iframe restrictions
    const html = document.documentElement.outerHTML;
    doc.open();
    doc.write(html);
    // Ensure the base URL is correct for scripts and styles
    const base = doc.createElement('base');
    base.href = window.location.href;
    doc.head.appendChild(base);
    doc.close();
    return;
  }

  // For external URLs, we must use an iframe
  const style = doc.createElement('style');
  style.textContent = `
    body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: #000; }
    iframe { width: 100vw; height: 100vh; border: none; }
    .status-overlay {
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: #0a0a0b; color: #3b82f6; display: flex;
      align-items: center; justify-content: center; font-family: sans-serif;
      z-index: 9999; transition: opacity 0.4s;
    }
  `;
  doc.head.appendChild(style);

  const overlay = doc.createElement('div');
  overlay.className = 'status-overlay';
  overlay.innerHTML = '<div style="text-align:center;"><div style="font-weight:bold; letter-spacing: 2px;">SECURE TUNNEL INITIALIZING...</div><div style="font-size: 12px; margin-top: 8px; opacity: 0.5;">Wiping History Trails</div></div>';
  doc.body.appendChild(overlay);

  const iframe = doc.createElement('iframe');
  iframe.src = url;
  iframe.allow = "fullscreen; autoplay; camera; microphone; clipboard-read; clipboard-write";
  
  iframe.onload = () => {
    overlay.style.opacity = '0';
    setTimeout(() => overlay.remove(), 400);
  };

  doc.body.appendChild(iframe);
};

/**
 * Validates and transforms queries. 
 * DuckDuckGo is generally more iframe-friendly than Google/Yahoo.
 */
export const processSearchQuery = (query: string): string => {
  const trimmed = query.trim();
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }
  if (trimmed.includes('.') && !trimmed.includes(' ')) {
    return `https://${trimmed}`;
  }
  return `https://duckduckgo.com/?q=${encodeURIComponent(trimmed)}`;
};
