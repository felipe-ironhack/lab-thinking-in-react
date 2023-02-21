import React from 'react'

const SearchBar = ({ query, setQuery, setInStock}) => {
 
  return (
    <div className='search-bar'>
      <label>
        Search:
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <label>
        <input type="checkbox" onChange={(e) => setInStock(e.target.checked)} />
        Only show items in stock
      </label>
    </div>
  )
}

export default SearchBar