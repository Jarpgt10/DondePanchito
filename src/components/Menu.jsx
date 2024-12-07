import React, { useState } from 'react';
import menuData from '../data/dataMenu';

const Menu = () => {
  const [filterType, setFilterType] = useState('all');

  const handleFilterClick = (type) => {
    setFilterType(type);
  };

  const filteredItems = menuData.filter(item =>
    filterType === 'all' || item.type.toLowerCase() === filterType.toLowerCase()
  );

  return (
    <section id="menu" className="container mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold text-center mb-8">Nuestro Menú</h2>
      <div className=" justify-center gap-1 text-center mb-6 flex flex-wrap">
        <button
          className="filter-btn px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-600"
          onClick={() => handleFilterClick('all')}
        >
          Todo
        </button>
        <button
          className="filter-btn px-4 py-2 text-white bg-gray-700 rounded hover:bg-yellow-600"
          onClick={() => handleFilterClick('comida')}
        >
          Comida
        </button>
        <button
          className="filter-btn px-4 py-2 text-white bg-gray-700 rounded hover:bg-yellow-600"
          onClick={() => handleFilterClick('bebida')}
        >
          Bebida
        </button>
        <button
          className="filter-btn px-4 py-2 text-white bg-gray-700 rounded hover:bg-yellow-600"
          onClick={() => handleFilterClick('alcohol')}
        >
          Alcohol
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white" >
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="menu-item bg-gray-800 p-4 rounded-lg shadow-md"
            data-type={item.type}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{item.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{item.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-yellow-400 font-bold">
                ${item.price.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
