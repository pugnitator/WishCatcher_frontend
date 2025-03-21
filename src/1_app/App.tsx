import { Provider } from 'react-redux';
import MainLayout from './layouts/MainLayout';
import store from '../5_entities/store';
import { createContext, useState } from 'react';

interface AppContextType {
  isModalActive: boolean;
  setIsModalOpen: (value: boolean) => void;
  isLoginForm: boolean | null; //true - вход, false - регистрация
  setIsLoginForm: (value: boolean | null) => void;
}

export const AppContext = createContext<AppContextType | null>(null);

function App() {
  const [isModalActive, setIsModalOpen] = useState<boolean>(false);
  const [formType, setIsLoginForm] = useState<boolean | null>(null);

  return (
    <Provider store={store}>
      <AppContext.Provider
        value={{
          isModalActive: isModalActive,
          setIsModalOpen: setIsModalOpen,
          isLoginForm: formType,
          setIsLoginForm: setIsLoginForm,
        }}
      >
        <MainLayout />
      </AppContext.Provider>
    </Provider>
  );
}

export default App;
