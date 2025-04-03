export const deleteFriend = async (friendId: string) => {
  const token = sessionStorage.getItem('authToken');
  try {
    if (!token) {
      console.error('Пользователь не авторизован');
      return null;
    }
    const response = await fetch(`http://localhost:3000/deleteFriend/${friendId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) throw new Error('Ошибка запроса');
    return await response.json();
  } catch (e) {
    return null;
  }
};
