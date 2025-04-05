const deleteWish = async (wishId: string) => {
  const token = sessionStorage.getItem('authToken');
  try {
    if (!token) {
      console.error('Пользователь не авторизован');
      return null;
    }

    console.log('wishId', wishId, typeof wishId);

    const response = await fetch(`http://localhost:3000/wish/${wishId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) throw new Error('Ошибка запроса');
    return await response.json();
  } catch (e) {
    return null;
  }
};

export default deleteWish;
