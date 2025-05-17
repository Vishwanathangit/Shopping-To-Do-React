import React, { useState } from 'react';

const ShoopingList = () => {
  const [mylist, setmylist] = useState(["Tomato", "Shirt", "Orange", "Grape", "Ball"]);
  const [item, setitem] = useState("");

  const handleChange = (event) => {
    setitem(event.target.value);
  };

  const handleAdd = () => {
    if (item.trim()) {
      setmylist([...mylist, item]);
      setitem("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-semibold text-center text-purple-700 mb-6">🛒 Shopping List</h1>
        
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={item}
            onChange={handleChange}
            placeholder="Enter an item"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition duration-200"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {mylist.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 bg-purple-100 text-purple-800 rounded-lg hover:bg-purple-200 transition duration-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoopingList;
