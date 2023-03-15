import React, { useState } from "react";
import Border from "../Components/Border";
import "../Style/User_register.css";
import { Link, useLocation } from "react-router-dom";

export default function UserLogin() {
  const location = useLocation();
  const { name } = location.state;
  const [topic, setTopic] = useState("");
  return (
    <>
      <section className="bg-[#413D3D] min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="md:w-screen px-16">
            <h2 className="font-bold text-2xl text-[#413D3D]">
              Enter the topic of discussion
            </h2>
            {/* <p className="text-sm mt-4 text-[#413D3D]">
              If you are already member, login yourself
            </p> */}
            <Border />
            <div action="" className="flex flex-col gap-4">
              {/* <input className="p-2 mt-8 rounded-xl border" type="text" name="name" placeholder="Enter Full Name"/> */}
              <input
                className="p-2 mt-8 rounded-xl border"
                type="text"
                name="topic"
                placeholder="Enter Your Topic of discussion"
                onChange={(event) => {
                  setTopic(event.target.value);
                }}
              />
              {/* <input className="p-2 rounded-xl border" type="text" name="mobileNo" placeholder="Enter Phone No."/> */}

              <button className="bg-[#413D3D] rounded-xl text-white hover:scale-105 duration-300 py-2">
                <Link to="/addparticipant" state={{ topic: topic, name: name }}>
                  Enter Chat Room
                </Link>
              </button>
            </div>
            {/* <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
