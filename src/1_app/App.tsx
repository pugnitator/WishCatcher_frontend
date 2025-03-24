import MainLayout from './layouts/MainLayout';
import { createContext, useState, useEffect } from 'react';
import checkToken from '../5_entities/User/asyncActions/checkToken';
import { useAppDispatch } from '../5_entities/hooks/useAppDispatch';
import { userSliceActions } from '../5_entities/User/userSlice';

interface AppContextType {
  isModalActive: boolean;
  setIsModalOpen: (value: boolean) => void;
  isLoginForm: boolean | null; //true - вход, false - регистрация
  setIsLoginForm: (value: boolean | null) => void;
}

export const AppContext = createContext<AppContextType | null>(null);

function App() {
  const dispatch = useAppDispatch();
  const [isModalActive, setIsModalOpen] = useState<boolean>(false);
  const [formType, setIsLoginForm] = useState<boolean | null>(null);
  
  useEffect(() => {
    checkToken().then((user) => {
      if (user) {
        console.log(user);
        dispatch(userSliceActions.setUser(user));
      }
    });
  }, []);

  return (
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
  );
}

export default App;
