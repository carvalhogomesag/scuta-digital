import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // O motor da navegação
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Envolvemos a aplicação para que as rotas funcionem em todo o site */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);