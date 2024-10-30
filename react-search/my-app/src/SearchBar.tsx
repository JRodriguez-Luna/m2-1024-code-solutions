import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';
import React from 'react';

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function SearchBar({ onChange }: Props) {
  return (
    <div className="search-bar-container">
      <label htmlFor="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          className="search-bar"
          name="search-bar"
          placeholder="search"
          onChange={onChange}
        />
      </label>
    </div>
  );
}
