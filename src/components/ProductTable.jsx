import ProductRow from './ProductRow.jsx'

function ProductTable(props) {
  const { products } = props;
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {products.map(product => <ProductRow key={product.id} product={product}/>)}
      </tbody>
    </table>
  );
}

export default ProductTable;
