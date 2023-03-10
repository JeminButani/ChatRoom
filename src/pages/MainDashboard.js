import React from "react";
import { Link } from "react-router-dom";
import Border from "../Components/Border";
import "../Style/User_register.css";

export default function MainDashboard() {
  return (
    <>
      <div className="bg-[#413D3D] min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <h1 className="font-bold text-5xl">Brainstorm Room</h1>
          <div className="md:w-screen px-16">
            <h1 className="font-bold text-3xl text-[#413D3D]">SELECT ROLE</h1>
            <Border />
            <br />
            <br />
            <form>
              <Link to="signup" state={{ role: "Admin" }}>
                <button className="bg-[#413D3D] rounded-xl text-white hover:scale-105 p-8 w-full duration-300 py-2">
                  ADMIN
                </button>
              </Link>
              <br />
              <br />
              <Link to="signup" state={{ role: "Co-ordinator" }}>
                <button className="bg-[#413D3D] rounded-xl text-white hover:scale-105 w-full duration-300 py-2">
                  CO-ORDINATOR
                </button>
              </Link>
              <br />
              <br />
              <Link to="signup" state={{ role: "Host" }}>
                <button className="bg-[#413D3D] rounded-xl text-white hover:scale-105 w-full duration-300 py-2">
                  HOST
                </button>
              </Link>
              <br />
              <br />
              <Link to="signup" state={{ role: "Participant" }}>
                <button className="bg-[#413D3D] rounded-xl text-white hover:scale-105 w-full duration-300 py-2">
                  PARTICIPANT
                </button>
              </Link>
              <br />
              <br />
              <Link to="signup" state={{ role: "Viewer" }}>
                <button className="bg-[#413D3D] rounded-xl text-white hover:scale-105 w-full duration-300 py-2">
                  VIEWER
                </button>
              </Link>
              <br />
              <br />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
