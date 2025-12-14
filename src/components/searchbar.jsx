import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-container max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-600" size={24} />
        <input
          type="text"
          placeholder="Search courses by name or category..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-14 pr-6 py-4 rounded-full border-2 border-orange-200 focus:border-orange-500 focus:outline-none text-lg shadow-md transition-all"
        />
      </div>
    </div>
  );
};

export default SearchBar;