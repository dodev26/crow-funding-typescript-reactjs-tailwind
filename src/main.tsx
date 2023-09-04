import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { Provider } from 'react-redux'
import { store } from './store/configureStore.ts'
import { HelmetProvider } from 'react-helmet-async'
import { ToastCenter } from './components/toastCenter/ToastCenter.tsx'
import ModalProvider from './contexts/modal.context.tsx'
import '~/locales/i18n.ts'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <HelmetProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </HelmetProvider>
        <ToastCenter />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
