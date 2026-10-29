import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

function ExpandableSearch({ onSearch }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef(null);

  // Close the search bar if user clicks outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        if (!searchTerm) setIsExpanded(false); // Only collapse if empty
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchTerm]);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div ref={searchRef} className="relative flex items-center">
      {/* Expanded Input View */}
      {isExpanded ? (
        <div className="flex items-center animate-fadeIn">
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="border border-gray-300 bg-gray-50 focus:bg-white px-4 py-1.5 pr-10 rounded-xl text-sm outline-none transition-all w-48 sm:w-64 shadow-inner"
          />
          <button
            type="button"
            onClick={handleToggle}
            className="absolute right-2 text-gray-500 hover:text-gray-800 p-1 cursor-pointer transition-colors"
          >
            <FaSearch size={14} />
          </button>
        </div>
      ) : (
        /* Collapsed Icon View */
        <button
          type="button"
          onClick={handleToggle}
          className="p-2.5 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200 cursor-pointer text-gray-700 hover:text-black flex items-center justify-center"
          title="Open Search"
        >
          <FaSearch size={16} />
        </button>
      )}
    </div>
  );
}

export default ExpandableSearch;
