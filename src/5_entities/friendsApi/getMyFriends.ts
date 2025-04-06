export const getMyFriends = async () => {
    const token = sessionStorage.getItem('authToken');
    try {
      if(!token) {
        console.error("Пользователь не авторизован");
        return null;
      }
      const response = await fetch('/api/friends', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) throw new Error('Ошибка запроса');
  
      const wishes = await response.json();
  
      return wishes;
    } catch (e) {
      return null;
    }
}