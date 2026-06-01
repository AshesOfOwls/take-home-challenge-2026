import { useCart } from '../../hooks/use-cart';
import { useProducts } from '../../hooks/use-products';
import { Line, Summary } from './cart-summary.styles';

export function CartSummary() {
  const { items } = useCart();
  const { data: products = [] } = useProducts();

  const entries = Object.entries(items);
  if (entries.length === 0) return null;

  return (
    <Summary data-testid='cart-summary'>
      {entries.map(([id, quantity]) => {
        const product = products.find((p) => p.id === id);
        if (!product) return "No products added yet.";
        return (
          <Line key={id}>
            {product.name}: {quantity}
          </Line>
        );
      })}
    </Summary>
  );
}
