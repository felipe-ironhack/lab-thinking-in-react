function ProductRow(props) {
  const { product } = props;
  return (
    <tr className="table-row">
      <td className={`${!product.inStock && 'red-letters'}`}>{product.name} </td>
      <td>{product.price} </td>
    </tr>
  );
}

export default ProductRow;
