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
      const response = await fetch('/api/wish/create', {
        method: 'POST',
        body: JSON.stringify(wish),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error('Ошибка запроса');

      const data = await response.json();

      return data.wish;
    } catch (e) {
      return null;
    }
  };

export default createWish;
