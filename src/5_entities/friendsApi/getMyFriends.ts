export const getMyFriends = async () => {
    const token = sessionStorage.getItem('authToken');
    try {
      if(!token) {
        console.error("Пользователь не авторизован");
        return null;
      }
      const response = await fetch('http://localhost:3000/friends', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) throw new Error('Ошибка запроса');
  
      const wishes = await response.json();
      console.log('friends', wishes);
  
      return wishes;
    } catch (e) {
      return null;
    }
}