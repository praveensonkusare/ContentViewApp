import React, { useState } from 'react';
import ContentGrid from './components/ContentGrid';
import SearchBar from './components/SearchBar';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ContentGrid searchQuery={searchQuery} />
    </div>
  );
};

export default App;
