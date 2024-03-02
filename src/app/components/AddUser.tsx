import React from "react";

export default function AddUser() {
  return (
    <div>
      <h3 className="text-[20px] font-semibold">Add User</h3>
      <input
        type="text"
        placeholder="Add a User"
        className="border border-black py-1 px-2"
      />
      <button className="border border-green-800 py-1 ml-2 px-1 my-2">
        Add User
      </button>
    </div>
  );
}
