import React from 'react';

function FilterTags() {
  const tags = ["Hip Hop", "Lo-Fi", "Chill", "R&B", "Trap"];
  return (
    <div className="p-4">
      {tags.map((tag, index) => (
        <button key={index} className="mr-2 bg-[#E8D6C0] text-[#4A3728] px-4 py-2 rounded">
          {tag}
        </button>
      ))}
    </div>
  );
}

export default FilterTags;
