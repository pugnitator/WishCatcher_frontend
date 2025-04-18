export default async function checkToken() {
  const token = sessionStorage.getItem('authToken');
  try {
    const response = await fetch('/api/me', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });

    if(!response.ok) throw new Error("Ошибка запроса");

    const user = await response.json();

    return user.id ? user : null;
  } catch (e) {
    return null;
  }
}
