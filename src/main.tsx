import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { Provider } from 'react-redux'
import { store } from './store/configureStore.ts'
import { ToastCenter } from './components/toastCenter/ToastCenter.tsx'
import ModalProvider from './contexts/modal.context.tsx'
import "~/locales/i18n.ts"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <App />
      </ModalProvider>
      <ToastCenter />
    </Provider>
  </React.StrictMode>,
)
