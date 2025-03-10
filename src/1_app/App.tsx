import { Provider } from 'react-redux';
import MainLayout from './layouts/MainLayout';
import store from '../5_entities/store';

function App() {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
}

export default App;
