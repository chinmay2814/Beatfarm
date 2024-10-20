import React from 'react';
import BeatList from '../components/BeatList';

function AllBeatsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-[#4A3728]">All Beats</h1>
      <BeatList />
    </div>
  );
}

export default AllBeatsPage;
