import { createRoot } from 'react-dom/client';
import './index.css';
import App from './1_app/App';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource-variable/nunito';

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);