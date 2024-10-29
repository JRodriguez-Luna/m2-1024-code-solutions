import { SearchBar } from './SearchBar';
import { Items } from './Items';
import React, { useState } from 'react';

type Props = {
  lists: string[];
};

export function SearchableList({ lists }: Props) {
  const [search, setSearch] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.currentTarget.value);
  }

  const filteredItems = lists.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="centered-container">
      <SearchBar onChange={handleChange} />
      <Items items={filteredItems} />
    </div>
  );
}
