const MarginSetting = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Container */}
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-yellow-600 mb-4 text-center">Margin Setting</h1>
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          {/* Item List */}
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18m-7 5h7" />
            </svg>
            <span className="ml-2 text-gray-700 font-medium">Item List</span>
          </div>
          {/* New Item Link */}
          <a href="#" className="text-blue-600 hover:underline">+ New Item</a>
        </div>
        
        {/* Dropdown */}
        <div className="flex flex-col">
          <label className="text-gray-700 mb-2">Select Item</label>
          <select className="border border-gray-300 rounded-md p-2">
            <option>--Select Item--</option>
            {/* Add options dynamically */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default MarginSetting;
