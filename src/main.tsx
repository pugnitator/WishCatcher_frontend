import { createRoot } from 'react-dom/client';
import App from './1_app/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);