import ProductTable from './ProductTable.jsx';
import SearchBar from './SearchBar.jsx';
import productsJSON from '../data.json';
import { useState } from 'react';

function ProductsPage() {
  const [products, setProducts] = useState(productsJSON);
  const [query, setQuery] = useState('');
  const [inStock, setInStock] = useState(false);

  const productsToShow = products.filter((product) => {
    if (inStock) {
      return product.name.toLowerCase().includes(query.toLowerCase()) && product.inStock;
    }
    return product.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
      <h1>Iron Store</h1>
      <SearchBar
        query={query}
        setQuery={setQuery}
        inStock={inStock}
        setInStock={setInStock}
      />
      <ProductTable products={productsToShow} />
    </>
  );
}

export default ProductsPage;
 