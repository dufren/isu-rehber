import React from "react";

function Navigation({ onSearch, searchTerm }) {
  return (
    <div className=" justify-between my-6">
      <form>
        <input
          value={searchTerm}
          onChange={onSearch}
          className="shadow pl-5 rounded w-full py-1"
          type="text"
          placeholder="Ara"
        />
      </form>
    </div>
  );
}

export default Navigation;
