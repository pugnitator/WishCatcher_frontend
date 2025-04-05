import { createRoot } from 'react-dom/client';
import App from './1_app/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '../src/styles/index.css';
import store from './5_entities/store';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
