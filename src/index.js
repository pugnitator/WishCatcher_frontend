import ReactDOM from 'react-dom/client';
import './index.css';
import App from './1_app/App';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource-variable/nunito';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>

);