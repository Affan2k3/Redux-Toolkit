"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiUsers } from "../redux/slice";

export default function page() {
  const dispatch = useDispatch();
  const userApiData = useSelector((data: any) => {
    return data.usersData.userApiData;
  });

  useEffect(() => {
    dispatch(fetchApiUsers());
  });

  return (
    <div>
      <h1>User List from API</h1>
      <button onClick={() => {}}>Load Users</button>
      <div>
        {userApiData.map((i: any) => (
          <div key={i.id}>
            <h2>{i.id}</h2>
            <h1>{i.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
