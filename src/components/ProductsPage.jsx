import React, { useState } from 'react'
import jsonData from '../data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData)
  const [query, setQuery] = useState('')
  const [inStock, setInStock] = useState(false)

  console.log(inStock)
  const productsToShow = products.filter(product => {
    if (inStock) {
      return product.name.toLowerCase().includes(query.toLowerCase()) && product.inStock
    }
    return product.name.toLowerCase().includes(query.toLowerCase())
  })
  return (
    <>
      <h1>IronStore</h1>
      <SearchBar query={query} setQuery={setQuery} setInStock={setInStock} />
      <ProductTable products={productsToShow} />
      <div className='legend'>
        <div className='available square'></div>
        <p> available products</p>
      </div>
      <div className='legend'>
        <div className='not-available square'></div>
        <p> not avalaible products </p>
      </div>
    </>
  )
}

export default ProductsPage