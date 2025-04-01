// interface DeleteWishProp {
//   wishId: string;
// }

const deleteWish = async (wishId: string) => {
  const token = sessionStorage.getItem('authToken');
  try {
    console.log('wishId', wishId, typeof(wishId));

    const response = await fetch(`http://localhost:3000/wish/id:${wishId}`, {
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
