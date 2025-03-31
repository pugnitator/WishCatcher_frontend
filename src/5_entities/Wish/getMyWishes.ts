const getMyWishes = async () => {
  const token = sessionStorage.getItem('authToken');
  try {
    const response = await fetch('http://localhost:3000/wish/myWishes', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) throw new Error('Ошибка запроса');

    const wishes = await response.json();
    console.log('wihses', wishes);

    return wishes;
  } catch (e) {
    return null;
  }
};

export default getMyWishes;