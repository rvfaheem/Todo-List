import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Viewlist = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:4000/user/list`);
      setData(response.data.map(item => ({ ...item, showEditFields: false }))); // Add showEditFields to each item
      console.log(response.data);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const response = await axios.delete(`http://localhost:4000/user/delete/${id}`);
    console.log(response);
    setData(prevData => prevData.filter(item => item._id !== id));  // Remove deleted item from the state
  };

  const toggleEditFields = (id) => {
    setData(prevData => 
      prevData.map(item => item._id === id ? { ...item, showEditFields: !item.showEditFields } : item)
    );
  };

  const handleUpdate = async (id, updatedFields) => {
    try {
      const response = await axios.put(`http://localhost:4000/user/update/${id}`, updatedFields);
      console.log(response);
      setData(prevData => 
        prevData.map(item => 
          item._id === id ? { ...item, ...updatedFields, showEditFields: false } : item
        )
      );
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <div className="Image">
      {data && (
        <div className='bg-teal-100 min-h-screen w-screen flex justify-center items-center'>
          <div>
            {data.map((item) => (
              <div key={item._id} className='bg-green-400 w-96 p-6 h-auto shadow-md rounded-xl mb-4'>
                
                {item.showEditFields ? (
                  // Editable fields shown only when in edit mode
                  <>
                    <input
                      type="text"
                      defaultValue={item.name}
                      onChange={(e) => item.name = e.target.value}
                      className='w-full mb-2 p-2 border border-gray-300 rounded'
                    />
                    <input
                      type="text"
                      defaultValue={item.title}
                      onChange={(e) => item.title = e.target.value}
                      className='w-full mb-2 p-2 border border-gray-300 rounded'
                    />
                    <textarea
                      defaultValue={item.description}
                      onChange={(e) => item.description = e.target.value}
                      className='w-full p-2 border border-gray-300 rounded'
                    />
                    <button
                      onClick={() => handleUpdate(item._id, { name: item.name, title: item.title, description: item.description })}
                      className='bg-blue-500 p-2 m-2 rounded-lg'
                    >
                      Save
                    </button>
                    <button
                      onClick={() => toggleEditFields(item._id)}
                      className='bg-gray-500 p-2 m-2 rounded-lg'
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  // Display data when not in edit mode
                  <>
                    <h1 className='text-2xl font-medium text-center'>{item.name}</h1><br />
                    <h1 className='text-2xl font-medium text-center'>{item.title}</h1><br />
                    <h1 className='text-2xl font-medium text-center'>{item.description}</h1><br />
                    <button
                      onClick={() => toggleEditFields(item._id)}
                      className='bg-green-700 p-2 m-2 rounded-lg'
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className='bg-red-600 p-2 rounded-lg'
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

