"use client";
import React from "react";
import { useSelector } from "react-redux";

export default function DisplayUsers() {
  const userData = useSelector((data: any) => data.users);
  console.log(userData);
  return (
    <div className="w-[30%]">
      <h2 className="font-semibold text-[20px] mt-10">User List</h2>
      {userData.map((i: any) => (
        <div key={i.id} className="bg-blue-200 w-full py-2 px-2 mt-2">
          {i.name}
        </div>
      ))}
    </div>
  );
}
