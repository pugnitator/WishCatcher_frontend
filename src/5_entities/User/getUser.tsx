const getUser = async (id: string) => {
  const token = sessionStorage.getItem('authToken');
  try {
    const response = await fetch(`/api/friend/${id}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) throw new Error('Ошибка запроса');

    const user = await response.json();

    return user;
  } catch (e) {
    return null;
  }
};

export default getUser;
