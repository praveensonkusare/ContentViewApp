import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div style={{ padding: '10px', textAlign: 'center' }}>
      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Search..."
        style={{ width: '80%', padding: '10px', fontSize: '16px' }}
      />
    </div>
  );
};

export default SearchBar;
