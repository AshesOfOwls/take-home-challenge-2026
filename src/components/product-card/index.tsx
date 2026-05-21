import React from 'react';
import { Link } from 'react-router-dom';

import type { Product } from '../../../data';
import { CardContainer, Image } from './product-card.styles';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={'/product'}>
      <CardContainer>
        <Image src={product.image} alt={product.name} title={product.name} />
        {product.name}
      </CardContainer>
    </Link>
  );
};
