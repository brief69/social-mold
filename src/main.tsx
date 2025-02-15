import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { registerSW } from 'virtual:pwa-register'

// Service Workerの登録
if ('serviceWorker' in navigator) {
  registerSW({
    onNeedRefresh() {
      // 新しいバージョンが利用可能な場合の処理
      if (confirm('新しいバージョンが利用可能です。更新しますか？')) {
        window.location.reload();
      }
    },
    onOfflineReady() {
      // オフライン準備完了時の処理
      console.log('アプリがオフラインで利用可能になりました。');
    },
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
