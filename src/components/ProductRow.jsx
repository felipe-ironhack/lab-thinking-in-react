import React from 'react';

const ProductRow = ({ product }) => {

  return (
    <tr className={product.inStock ? 'available' : 'not-available'}>
      <td> {product.name} </td>
      <td> {product.price} </td>
    </tr>
  );
};

export default ProductRow;
