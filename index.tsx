/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
  import('workbox-window').then(({ Workbox }) => {
    const wb = new Workbox('/sw.js');
    
    wb.addEventListener('installed', (event) => {
      if (event.isUpdate) {
        if (confirm('New content is available! Click OK to refresh.')) {
          window.location.reload();
        }
      }
    });
    
    wb.register();
  });
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);