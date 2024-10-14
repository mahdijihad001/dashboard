const ItemList = () => {
  const items = [
    { id: 1, name: 'JA 545W Panels', unit: '', category: '', brand: '' },
    { id: 2, name: 'Fronius Tauro 100kW', unit: '', category: '', brand: '' },
    { id: 3, name: 'Smart Meter, 3 Phase (Export Control)', unit: '', category: '', brand: '' },
    { id: 4, name: 'Freight', unit: '', category: '', brand: '' },
    { id: 5, name: 'Installation of Turnkey, Balance of System and Cabling', unit: '', category: '', brand: '' },
    { id: 6, name: 'FE Consulting and Design fees', unit: '', category: '', brand: '' },
  ];

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 py-10">
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-5xl">
        <h2 className="text-2xl font-semibold text-yellow-600 mb-6 text-center">Item List</h2>

        <div className="flex justify-between mb-6">
          <a href="#" className="flex items-center gap-2 text-blue-600 text-sm hover:underline">
            <span className="material-icons">table_rows</span> Item List
          </a>
          <a href="#" className="text-blue-600 text-sm hover:underline">+ New Item</a>
        </div>

        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border text-left text-sm font-semibold text-gray-700">Sl No</th>
              <th className="px-4 py-2 border text-left text-sm font-semibold text-gray-700">Item Name</th>
              <th className="px-4 py-2 border text-left text-sm font-semibold text-gray-700">Unit</th>
              <th className="px-4 py-2 border text-left text-sm font-semibold text-gray-700">Item Category</th>
              <th className="px-4 py-2 border text-left text-sm font-semibold text-gray-700">Brand</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id} className="odd:bg-gray-100 even:bg-gray-50 hover:bg-gray-200">
                <td className="px-4 py-2 border text-sm text-gray-700">{String(index + 1).padStart(2, '0')}</td>
                <td className="px-4 py-2 border text-sm text-gray-700">{item.name}</td>
                <td className="px-4 py-2 border text-sm text-gray-700">{item.unit}</td>
                <td className="px-4 py-2 border text-sm text-gray-700">{item.category}</td>
                <td className="px-4 py-2 border text-sm text-gray-700">{item.brand}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemList;
