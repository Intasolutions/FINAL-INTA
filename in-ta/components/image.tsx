import React from 'react';

const Image = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <img
        src="/images/example.jpg" // Replace with your image path
        alt="Example"
        className="rounded-lg shadow-lg w-64 h-64 object-cover"
      />
    </div>
  );
};

export default Image;
