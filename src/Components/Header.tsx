import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex flex-row justify-between border-b-2 bg-[#f0ead2] border-amber-800 h-14 p-2">
      <h2 className="font-bold text-amber-900 text-2xl">Bookshelf</h2>
      <div className="flex flex-row gap-2">
        <button className="p-2 bg-yellow-800 text-amber-50  rounded-xl">
          Logout
        </button>
        <div className="w-10 h-10 bg-amber-100 rounded-full border-amber-900 border-2"></div>
      </div>
    </div>
  );
};

export default Header;
