import React from 'react';
import { Link } from 'react-router-dom';

import type { Product } from '../../../data';
import { Brand, CardContainer, Image, Name, Price } from './product-card.styles';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`}>
      <CardContainer data-testid='product-card'>
        <Image src={product.image} alt={product.name} title={product.name} />
        <Brand>{product.brandName ?? 'Unknown Brand'}</Brand>
        <Name>{product.name}</Name>
        {product.prices.map((price) => (
          <Price key={price}>${price}</Price>
        ))}
      </CardContainer>
    </Link>
  );
};
