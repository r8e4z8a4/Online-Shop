export const getDisplayPrice = (sellers) => {
  if (!sellers || sellers.length === 0) return null;
  const price = sellers.map((seller) => seller.price);
  const minPrice = Math.min(...price);
  return minPrice.toLocaleString("fa-IR")
};