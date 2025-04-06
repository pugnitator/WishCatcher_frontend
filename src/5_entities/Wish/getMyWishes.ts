import IWish from "./model/IWish";

const getMyWishes = async () : Promise<IWish[] | null> => {
  const token = sessionStorage.getItem('authToken');
  try {
    const response = await fetch('/api/wish/list/me', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) throw new Error('Ошибка запроса');

    const wishes = await response.json();

    return wishes;
  } catch (e) {
    return null;
  }
};

export default getMyWishes;