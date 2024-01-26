function SearchBar(props) {
  const { query, setQuery, inStock, setInStock } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '.5rem',
      }}
    >
      <div style={{ display: 'flex', gap: '.5rem' }}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          placeholder="Search..."
          id="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div style={{ display: 'flex' }}>
        <input type="checkbox" checked={inStock} onChange={(e) => setInStock(e.target.checked)} />
        <label htmlFor="inStock">Only show products in stock</label>
      </div>
    </div>
  );
}

export default SearchBar;
