'use client'

import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { User } from "@/models";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [userName, setUserName] = useState("");
  const [newUser, setNewUser] = useState(false);
  const router = useRouter();

  const addUser = async () => {
    try {
      // Query for existing user with the entered username
      const existingUser = await DataStore.query(User, u => u.username.eq(userName));

      if (existingUser.length > 0) {
        // User already exists
        Swal.fire({
          icon: "error",
          title: "User already exists please login",
        });
        setUserName("");
      } else {
        // Save new user
        const data = await DataStore.save(new User({ username: userName }));
        if (data) {
          // Successfully registered
          Swal.fire({
            icon: "success",
            title: "User created successfully",
          });
          setUserName("");
          localStorage.setItem("id", data?.id);
          router.push('/todos');
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getUser = async (e: any) => {
    e.preventDefault;
    try {
      // Query for existing user
      const data = await DataStore.query(User, u => u.username.eq(userName));
      console.log("getUser :", data);
      if (data.length > 0) {
        // User exists
        setUserName("");
        Swal.fire({
          icon: "success",
          title: "Login Successfull",
          showConfirmButton: false,
          timer: 1500
        });
        localStorage.setItem("id", data[0].id);
        router.push('/todos');
      } else {
        // User doesn't exist
        setUserName("");
        Swal.fire({
          icon: "warning",
          title: "User doesn't exist please register",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className={`flex min-h-full items-center justify-center p-24 ${inter.className}`}
    >
      <div className={`max-w-xl py-6 px-8 mt-20 border border-[#e4e4e7] rounded shadow-md ${newUser ? 'hidden' : ''}`}>
        <h1 className="text-2xl font-bold mb-4">Login User</h1>
        <form >
          <div className="">
            <label typeof="name" className="block font-medium">Enter Your Username</label>
            <input type="text" placeholder="Jhon Doe" onChange={(e) => setUserName(e.target.value)} value={userName} className="w-full border focus:border-[#27272a] border-[#ededee] bg-inherit text-[#2f2f31] py-2 pl-3 rounded mt-2 outline-none" />
          </div>
          <button type="button" className="cursor-pointer py-2 px-4 my-4 block bg-[#18181b] hover:bg-[#2f2f31] font-bold w-full text-center rounded text-[#efefef] transition-all" onClick={getUser}>Login</button>
          <p className="underline cursor-pointer hover:underline-offset-2" onClick={() => setNewUser(true)}>Register New User</p>
        </form>
      </div>

      <div className={`max-w-xl py-6 px-8 mt-20 border-2 border-[#e4e4e7] rounded shadow-md ${newUser ? '' : 'hidden'}`}>
        <h1 className="text-xl font-bold mb-4">Register New User</h1>
        <form >
          <div className="">
            <label typeof="name" className="block font-semibold">Enter a Username</label>
            <input type="text" placeholder="Jhon Doe" onChange={(e) => setUserName(e.target.value)} value={userName} className="w-full border focus:border-[#27272a] border-[#ededee] bg-inherit text-[#2f2f31] py-2 pl-3 rounded mt-2 outline-none" />
          </div>
          <button type="button" className="cursor-pointer py-2 px-4 my-4 block bg-[#18181b] hover:bg-[#2f2f31] font-bold w-full text-center rounded text-[#efefef] transition-all" onClick={addUser}>Register</button>
          <p className="underline cursor-pointer hover:underline-offset-2" onClick={() => setNewUser(false)}>Login Existing User</p>
        </form>
      </div>
    </div>
  );
}
