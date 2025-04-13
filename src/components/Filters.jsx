import React from 'react';

const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {/* Brand */}
      <select
        name="brand"
        value={filters.brand}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <option value="">All Brands</option>
        <option value="Toyota">Toyota</option>
        <option value="Honda">Honda</option>
        <option value="BMW">BMW</option>
        <option value="Tata">Tata</option>
      </select>

      {/* Fuel Type */}
      <select
        name="fuel"
        value={filters.fuel}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <option value="">All Fuel Types</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
        <option value="Electric">Electric</option>
      </select>

      {/* Seating */}
      <select
        name="seating"
        value={filters.seating}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <option value="">Any Seating</option>
        <option value="4">4 Seater</option>
        <option value="5">5 Seater</option>
        <option value="7">7 Seater</option>
      </select>

      {/* Price Range */}
      <select
        name="price"
        value={filters.price}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <option value="">Any Price</option>
        <option value="0-10000">Below ₹10,000</option>
        <option value="10000-50000">₹10,000–₹50,000</option>
        <option value="50000-100000">₹50,000–₹1,00,000</option>
      </select>

      {/* Sort */}
      <select
        name="sort"
        value={filters.sort}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <option value="">Sort by Price</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
};

export default Filters;
