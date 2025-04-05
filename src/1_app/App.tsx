import MainLayout from './layouts/MainLayout';
import { createContext, useState, useEffect } from 'react';
import checkToken from '../5_entities/User/asyncActions/checkToken';
import { useAppDispatch } from '../5_entities/hooks/useAppDispatch';
import { userSliceActions } from '../5_entities/User/userSlice';
import IWish from '../5_entities/Wish/model/IWish';
import getMyWishes from '../5_entities/Wish/getMyWishes';

interface AppContextType {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  isLoginForm: boolean | null; //true - вход, false - регистрация
  setIsLoginForm: (value: boolean | null) => void;
  wishes: IWish[]; // Список пожеланий
  setWishes: (wishes: IWish[]) => void;
  fetchWishes: () => void;
}

export const AppContext = createContext<AppContextType | null>(null);

function App() {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formType, setIsLoginForm] = useState<boolean | null>(null);
  const [isTokenVerificationComplete, setIsTokenVerificationComplete] = useState(false);
  const [wishes, setWishes] = useState<IWish[]>([]);

  const fetchWishes = () => {
    getMyWishes()
      .then((res) => {
        if (Array.isArray(res)) {
          setWishes(res);
        }
      })
      .catch((err) => {
        console.error('Ошибка при загрузке пожеланий:', err);
      });
  };

  useEffect(() => {
    checkToken().then((user) => {
      if (user) {
        console.log(user);
        dispatch(userSliceActions.setUser(user));
        fetchWishes();
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
        wishes,
        setWishes, 
        fetchWishes, 
      }}
    >
      {isTokenVerificationComplete && <MainLayout />}
    </AppContext.Provider>
  );
}

export default App;
