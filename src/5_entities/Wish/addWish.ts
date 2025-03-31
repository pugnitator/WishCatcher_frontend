interface CreateWishProp {
  name: string;
  giftURL?: string;
  comment?: string;
}

const createWish = async (wish: CreateWishProp) => {
  const token = sessionStorage.getItem('authToken');
  try {
    if(!token) {
      console.error("Пользователь не авторизован");
      return null;
    }
    const response = await fetch('http://localhost:3000/wish/create', {
      method: 'POST',
      body: JSON.stringify(wish),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) throw new Error('Ошибка запроса');

    const wishes = await response.json();
    console.log('wihses', wishes);

    return wishes;
  } catch (e) {
    return null;
  }
};

export default createWish;
