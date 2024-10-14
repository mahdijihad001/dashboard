import { useState } from "react";

const NewItem = () => {
  const [itemName, setItemName] = useState('');
  const [unit, setUnit] = useState('');
  const [itemCategory, setItemCategory] = useState('');
  const [brand, setBrand] = useState('');

  const handleAddItem = () => {
    // Handle adding the new item logic here
    if (itemName && unit && itemCategory && brand) {
      console.log('New Item:', { itemName, unit, itemCategory, brand });
      // Clear form fields after adding
      setItemName('');
      setUnit('');
      setItemCategory('');
      setBrand('');
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 py-10">
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-yellow-600 mb-6 text-center">New Item</h2>

        <div className="flex justify-between mb-6">
          <a href="#" className="text-blue-600 text-sm hover:underline">+ Item Category</a>
          <a href="#" className="text-blue-600 text-sm hover:underline">Item List</a>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Item Name Field */}
          <div>
            <label className="block text-sm font-medium mb-1">Item Name</label>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter item name"
            />
          </div>

          {/* Unit Field */}
          <div>
            <label className="block text-sm font-medium mb-1">Unit</label>
            <input
              type="text"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter unit"
            />
          </div>

          {/* Item Category Field */}
          <div>
            <label className="block text-sm font-medium mb-1">Item Category</label>
            <select
              value={itemCategory}
              onChange={(e) => setItemCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">--Select Item Category--</option>
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
              <option value="Category 3">Category 3</option>
            </select>
          </div>

          {/* Brand Field */}
          <div>
            <label className="block text-sm font-medium mb-1">Brand</label>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">--Select Brand--</option>
              <option value="Brand A">Brand A</option>
              <option value="Brand B">Brand B</option>
              <option value="Brand C">Brand C</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleAddItem}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewItem;
