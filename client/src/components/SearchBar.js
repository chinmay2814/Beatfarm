import React from 'react';

function SearchBar() {
  return (
    <div className="flex justify-center p-4">
      <input
        type="text"
        placeholder="Search for beats..."
        className="border-2 border-[#4A3728] p-2 w-1/2"
      />
      <button className="bg-[#00A4E4] text-white px-4">Search</button>
    </div>
  );
}

export default SearchBar;
