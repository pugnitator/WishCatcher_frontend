import MainLayout from './layouts/MainLayout';
import { createContext, useState, useEffect } from 'react';
import checkToken from '../5_entities/User/asyncActions/checkToken';
import { useAppDispatch } from '../5_entities/hooks/useAppDispatch';
import { userSliceActions } from '../5_entities/User/userSlice';
import IWish from '../5_entities/Wish/model/IWish';
import IUser from '../5_entities/User/model/IUser';

interface AppContextType {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  isLoginForm: boolean | null; //true - вход, false - регистрация
  setIsLoginForm: (value: boolean | null) => void;
}

export const AppContext = createContext<AppContextType | null>(null);

function App() {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formType, setIsLoginForm] = useState<boolean | null>(null);
  const [isTokenVerificationComplete, setIsTokenVerificationComplete] = useState(false);

  useEffect(() => {
    checkToken().then((user) => {
      if (user) {
        console.log(user);
        dispatch(userSliceActions.setUser(user));
      }
      setIsTokenVerificationComplete(true);
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        isModalOpen: isModalOpen,
        setIsModalOpen: setIsModalOpen,
        isLoginForm: formType,
        setIsLoginForm: setIsLoginForm,
      }}
    >
      {isTokenVerificationComplete && <MainLayout />}
    </AppContext.Provider>
  );
}

export default App;
