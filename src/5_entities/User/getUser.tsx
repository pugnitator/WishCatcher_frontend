const getUser = async (id: string) => {
  const token = sessionStorage.getItem('authToken');
  try {
    console.log('id в getUser', id);
    const response = await fetch(`http://localhost:3000/friend/${id}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) throw new Error('Ошибка запроса');

    const user = await response.json();
    console.log('user', user);

    return user;
  } catch (e) {
    return null;
  }
};

export default getUser;
