"use client";

import axios from "axios";
import { useState } from "react";

export function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handler() {
    await axios.post("http://localhost:3000/api/user", {
      email,
      password,
    });
  }

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="p-2 m-2"
            type="text"
            placeholder="email"
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

          <div className=" mt-4 flex justify-center">
            <button onClick={handler}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
