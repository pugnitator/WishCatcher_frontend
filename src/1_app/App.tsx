import { Provider } from 'react-redux';
import MainLayout from './layouts/MainLayout';
import store from '../5_entities/store';
import { createContext, useState } from 'react';

interface AppContextType {
  isModalActive: boolean;
  setIsModalActive: (value: boolean) => void;
}

export const AppContext = createContext<AppContextType | null>(null);

function App() {
  const [isModalActive, setIsModalActive] = useState(false)
  return (
    <Provider store={store}>
      <AppContext.Provider value={{isModalActive: isModalActive, setIsModalActive: setIsModalActive}}>
        <MainLayout />
      </AppContext.Provider>
    </Provider>
  );
}

export default App;
