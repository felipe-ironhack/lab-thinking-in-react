import React from 'react'

const ProductRow = ({ product }) => {
  const inStock = {
    backgroundColor: product.inStock ? 'rgba(50, 205, 50, 0.758)' : 'orangered'
  }
  return (
    <tr style={inStock}>
      <td> {product.name} </td>
      <td> {product.price} </td>
    </tr>
  )
}

export default ProductRow