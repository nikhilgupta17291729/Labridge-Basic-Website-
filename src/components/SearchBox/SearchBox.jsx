import { useState, useRef, useEffect } from 'react';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Mock medical data - replace with your actual API data later
  const sampleSuggestions = [
    { id: 1, name: 'Complete Blood Count (CBC)', type: 'Test' },
    { id: 2, name: 'Lipid Profile (Cholesterol)', type: 'Test' },
    { id: 3, name: 'Liver Function Test (LFT)', type: 'Test' },
    { id: 4, name: 'Thyroid Profile (T3, T4, TSH)', type: 'Test' },
    { id: 5, name: 'HbA1c (Diabetes Monitoring)', type: 'Test' },
    { id: 6, name: 'Home Blood Sample Collection', type: 'Service' },
  ];

  // Filter recommendations based on user input
  const filteredSuggestions = sampleSuggestions.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

  // Close dropdown when clicking anywhere outside the search box
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative flex items-center justify-center rounded-xl border-b border-gray-500/30 bg-linear-to-r from-cyan-100 to-blue-100 h-80 overflow-visible max-w-3xl mt-8 mb-15 mx-auto px-6">
      <div className="absolute top-4 left-4">
        <img
          src="https://labridge.in/images/labridge-logo.png"
          alt="Labridge Healthcare"
          className="h-20 w-auto object-contain"
        />
      </div>

      
      <div>
        
       </div>

      {/* Main Search Container */}
      <div ref={dropdownRef} className="relative max-w-xl w-full z-20">
        <div className="flex items-center gap-3 w-full bg-white rounded-full px-2 py-2 shadow-md border border-gray-100 focus-within:border-indigo-400 transition-colors">
          <div className="flex items-center justify-center w-20 h-10 rounded-full bg-blue-100">
            <svg
              xmlns="http://w3.org"
              width="24"
              height="24"
              viewBox="0 0 30 30"
              fill="#6B7280"
            >
              <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
            </svg>
          </div>

          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder="Search Tests and Services"
            className="w-full h-full outline-none placeholder-gray-500 text-gray-700 bg-transparent text-sm"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 transition-colors w-35 h-9 rounded-full text-sm text-white shrink-0 cursor-pointer"
          >
            Search
          </button>
        </div>

        {/* Suggestion Dropdown Panel */}
        {isOpen && query.trim() !== '' && (
          <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-h-60 overflow-y-auto">
            {filteredSuggestions.length > 0 ? (
              filteredSuggestions.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setQuery(item.name);
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-5 py-3 hover:bg-blue-200 flex items-center justify-between text-sm text-gray-700 border-b border-gray-50 last:border-b-0 cursor-pointer transition-colors"
                >
                  <span className="font-medium">{item.name}</span>
                  <span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">
                    {item.type}
                  </span>
                </button>
              ))
            ) : (
              <div className="px-5 py-4 text-sm text-gray-400 text-center">
                No matching tests found
              </div>
            )}
          </div>
        )}
      </div>

      
      {/*Boxes */}
      <div className="absolute grid grid-cols-3 gap-4 place-items-center text-cyan-500 text-sm bottom-7 left-1/2 transform -translate-x-1/2 w-full max-w-3xl px-6 ">
        
        <div className="flex flex-col gap-2 px-4 py-2 w-full items-center justify-center rounded-sm bg-blue-200 h-20 group hover:scale-105 cursor-pointer">
          <div className="bg-white px-2 py-2 rounded-2xl duration-700 [animation-duration:0.7s] ease-in-out  group-hover:scale-110 text-transparent">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/report-icon-svg-download-png-11693845.png?f=webp&w=512"
              alt="Health Checkup"
              className="h-5 w-8 object-contain"
            />
          </div>

          <div>
            <p className="text-black text-md font-medium">Download Report</p>
          </div>
        </div>
         
        <div className="flex flex-col gap-2 px-4 py-2 w-full items-center justify-center rounded-sm bg-red-200 h-20 group hover:scale-105 cursor-pointer">
          <div className="bg-white px-2 py-2 rounded-2xl duration-700 [animation-duration:0.7s] ease-in-out  group-hover:scale-110 text-transparent">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/prescription-icon-svg-download-png-4316773.png?f=webp&w=512"
              alt="Health Checkup"
              className="h-5 w-8 object-contain"
            />
          </div>

          <div>
            <p className="text-black text-md font-medium">
              Prescription Upload
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-4 py-2 w-full items-center justify-center rounded-sm bg-yellow-200 h-20 group hover:scale-105 cursor-pointer">
          <div className="bg-white px-2 py-2 rounded-2xl duration-700 [animation-duration:0.7s] ease-in-out  group-hover:scale-110 text-transparent">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/find-icon-svg-download-png-9680808.png?f=webp&w=512"
              alt="Health Checkup"
              className="h-5 w-8 object-contain"
            />
          </div>

          <div>
            <p className="text-black text-md font-medium">Download Report</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
