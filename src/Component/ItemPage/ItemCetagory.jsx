import { useState } from "react";

const ItemCategory = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Equipment's" },
    { id: 2, name: 'Consulting' },
    { id: 3, name: 'Installation' }
  ]);

  const [newCategory, setNewCategory] = useState('');

  const addCategory = () => {
    if (newCategory.trim() !== '') {
      setCategories([...categories, { id: categories.length + 1, name: newCategory }]);
      setNewCategory('');
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 py-10">
      <div className="bg-white shadow-lg p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-yellow-600 mb-6 text-center">Item Category</h2>
        <div className="flex gap-10 items-center">
          {/* Add Item Category Section */}
          <div>
            <label className="block text-sm font-medium mb-2">+ Item Category</label>
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter category"
            />
            <button
              onClick={addCategory}
              className="mt-4 px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Add
            </button>
          </div>

          {/* Item Category List Section */}
          <div>
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 border text-left text-sm font-semibold text-gray-700">Sl.No</th>
                  <th className="px-4 py-2 border text-left text-sm font-semibold text-gray-700">Item Category</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, index) => (
                  <tr key={category.id} className="bg-gray-50 hover:bg-gray-100">
                    <td className="px-4 py-2 border text-sm text-gray-700">{String(index + 1).padStart(2, '0')}</td>
                    <td className="px-4 py-2 border text-sm text-gray-700">{category.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCategory;
