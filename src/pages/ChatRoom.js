import React from "react";
import Border from "../Components/Border";
import { useNavigate, useLocation } from "react-router-dom";

export default function ChatRoom() {
  const location = useLocation();
  const { topic } = location.state;
  return (
    <>
      <div className="bg-[#413D3D] min-h-screen flex">
        <div className="md:container md:mx-auto">
          <h1 className="font-bold text-5xl font-sherif text-slate-100">
            Brainstorm Room
          </h1>
          <h1 className="font-bold text-5xl font-sherif text-slate-100">
            topic: {topic}
          </h1>

          <Border />
          <br />
          <p className="text-left font-bold text-slate-100 text-xl">
            Total Number of Participants in the discussion:
          </p>
          <Border />
          <Border />
          <br />
          <div class="w-64 h-12 flex-row">
            <button className="bg-black w-64 rounded-xl text-white hover:scale-105 duration-300 py-2 left-10">
              End Discussion
            </button>
            <div class="border-l-2 border-gray-500 h-16"></div>
          </div>
          <Border />
          <br />
        </div>
      </div>
    </>
  );
}
