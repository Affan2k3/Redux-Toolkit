"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseDispatch } from "react-redux";
import { removeUser } from "../redux/slice";
export default function DisplayUsers() {
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const userData = useSelector((data: any) => data.users);

  //   const userDispatch = (id: any) => {
  //     );
  //   };

  return (
    <div className="w-[30%]">
      <h2 className="font-semibold text-[20px] mt-10">User List</h2>
      {userData.map((i: any) => (
        <div
          key={i.id}
          className="flex justify-between bg-blue-200 w-full py-2 px-2 mt-2"
        >
          <span>{i.name}</span>{" "}
          <button
            onClick={() => {
              //   console.log(i.id);
              dispatch(removeUser(i.id));
            }}
            className=""
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
