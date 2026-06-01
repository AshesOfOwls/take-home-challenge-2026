import React from 'react';
import { Link } from 'react-router-dom';

import type { Product } from '../../../data';
import { useCart } from '../../hooks/use-cart';
import { Brand, CardContainer, Image, Name, Price } from './product-card.styles';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <Link to={`/product/${product.id}`}>
      <CardContainer data-testid='product-card'>
        <Image src={product.image} alt={product.name} title={product.name} />
        <Brand>{product.brandName ?? 'Unknown Brand'}</Brand>
        <Name>{product.name}</Name>
        {product.prices.map((price) => (
          <Price key={price}>${price}</Price>
        ))}
        <button
          type='button'
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            addItem(product);
          }}
        >
          Add to cart
        </button>
      </CardContainer>
    </Link>
  );
};
