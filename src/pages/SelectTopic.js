import React, { useState } from "react";
import Border from "../Components/Border";
import "../Style/User_register.css";
import { Link } from "react-router-dom";

export default function UserLogin() {
  const [topic, setTopic] = useState("");
  return (
    <>
      <section className="bg-[#413D3D] min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="md:w-screen px-16">
            <h2 className="font-bold text-2xl text-[#413D3D]">Login</h2>
            {/* <p className="text-sm mt-4 text-[#413D3D]">
              If you are already member, login yourself
            </p> */}
            <Border />
            <form action="" className="flex flex-col gap-4">
              {/* <input className="p-2 mt-8 rounded-xl border" type="text" name="name" placeholder="Enter Full Name"/> */}
              <input
                className="p-2 mt-8 rounded-xl border"
                type="text"
                name="topic"
                placeholder="Enter Your Topic of discussion"
                onChange={(event) => {
                  setTopic(event.target.value);
                }}
                value={topic}
              />
              {/* <input className="p-2 rounded-xl border" type="text" name="mobileNo" placeholder="Enter Phone No."/> */}

              <button className="bg-[#413D3D] rounded-xl text-white hover:scale-105 duration-300 py-2">
                <Link to="/chatRoom" state={{ topic: topic }}>
                  Enter Chat Room
                </Link>
              </button>
            </form>
            {/* <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div> */}
            <p className="mt-5 text-xs border-b border-gray-400 py-4">
              Forgot your password?
            </p>
            <div className="mt-3 text-xs flex justify-between items-center">
              <p>If you are not a member....</p>
              <Link to="/signup">
                <button className="py-2 px-5 bg-white hover:scale-110 duration-300 border rounded-xl">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
