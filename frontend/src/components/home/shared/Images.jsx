import React from 'react';

const Image = ({ src, alt, text, className }) => {
  return (
    <div className={`relative ${className}`}>
    <img
      src={src}
      alt={alt}
      className="w-full h-75 object-cover rounded-lg shadow-lg"
    />
    {text && (
      <div className="absolute bottom-0 left-0 bg-gradient-to-r from-blue-100 to-purple-900 bg-opacity-50 w-full p-2 rounded-b-lg ">
        {/* <span className="text-clip bg-gradient-to-l from-black to-black text-transparent bg-clip-text text-lg font-bold">
            {text}
          </span> */}
          <p className='text-white font-extrabold '>{text}</p>
      </div>
    )}
  </div>
  );
};

export default Image;
