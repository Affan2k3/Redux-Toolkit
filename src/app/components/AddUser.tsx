"use client";
import React, { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";
export default function AddUsers() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const userDispatch = () => {
    dispatch(addUser(name));
  };
  return (
    <div>
      <h3 className="text-[20px] font-semibold">Add User</h3>
      <input
        type="text"
        placeholder="Add a User"
        className="border border-black py-1 px-2"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        className=" border border-green-800 py-1 ml-2 px-1 my-2"
        onClick={() => {
          userDispatch();
        }}
      >
        Add User
      </button>
    </div>
  );
}
