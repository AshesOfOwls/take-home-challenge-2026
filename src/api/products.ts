const API_URL = 'http://localhost:1337/get-products';

export async function fetchProducts() {
  const res = await fetch(API_URL);
  return res.json();
}
