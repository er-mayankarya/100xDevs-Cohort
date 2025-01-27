"use client";

import axios from "axios";
import { useState } from "react";

export function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="p-10 border rounded">
          <br />
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="p-2 m-2 "
            type="text"
            placeholder="username"
          />
          <br />

          <br />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="p-2 m-2"
            type="password"
            placeholder="password"
          />
          <br />
          <div className="mt-4 flex justify-center ">
            <button
              onClick={() => {
                axios.post("http://localhost:3000/api/user"),
                  {
                    username,
                    password,
                  };
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
