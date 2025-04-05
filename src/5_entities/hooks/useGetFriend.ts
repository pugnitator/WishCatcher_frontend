import getUser from '../User/getUser';
import IUser from '../User/model/IUser';
import { useState, useEffect } from 'react';

export interface UseGetFriendProp {
  idFromParams: string;
}

export default function useGetFriend(prop: UseGetFriendProp) {
  const { idFromParams } = prop;
  console.log('Я в useGetFriend', idFromParams);

  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('USE GET USER', idFromParams);

    if (idFromParams) {
      getUser(idFromParams)
      .then((res) => {
        console.log('Данные пользователя получены:', res);
        setUser(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Ошибка в getUser:', err);
        setUser(null);
        setLoading(false);
      })
    } else {
      throw new Error('Нет id друга в параметре');
    }
  }, [idFromParams]);

  return { user, loading };
}
