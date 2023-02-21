import React from 'react'
import ProductRow from './ProductRow'

const ProductTable = ({ products }) => {

  return (
    <table>
      <thead>
       <tr>
        <td>Name</td>
        <td>Price</td>
       </tr>
      </thead>
      <tbody>
        { products.map(product => <ProductRow product={product} />) }
      </tbody>
    </table>
  )
}

export default ProductTable