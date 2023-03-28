import React from "react";
import Border from "../Components/Border";
import "../Style/User_register.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

export default function UserRegister() {
  const location = useLocation();
  const { role } = location.state;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const branch = e.target.branch.value;
    const sem = e.target.sem.value;
    const Clg_id = e.target.Clg_id.value;
    const srole = e.target.srole.value;

    const obj = {
      name: name,
      branch: branch,
      sem: sem,
      clg_id: Clg_id,
      email: email,
      password: password,
      role: srole,
    };

    try {
      const res = await axios.post("http://localhost:3001/users", obj);
      // console.log(res.data);
      alert("Registration successful!! You may now login");
    } catch (err) {
      alert(err);
    }
  };
  return (
    <>
      <section className="bg-[#413D3D] min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="md:w-screen px-16">
            <h2 className="font-bold text-2xl text-[#413D3D]">Registration</h2>
            {/* <p className="text-sm mt-4 text-[#413D3D]">
              If you are already member, login yourself
            </p> */}
            <Border />
            <form
              action=""
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <input
                className="p-2 rounded-xl border"
                type="text"
                name="name"
                placeholder="Enter Full Name"
              />
              <input
                className="p-2 rounded-xl border"
                type="text"
                name="branch"
                placeholder="Enter branch"
              />
              <input
                className="p-2 rounded-xl border"
                type="text"
                name="sem"
                placeholder="Enter Semester"
              />
              <input
                className="p-2 rounded-xl border"
                type="text"
                name="Clg_id"
                placeholder="Enter College ID"
              />
              <input
                className="p-2 rounded-xl border"
                type="email"
                name="email"
                placeholder="Enter Your Email"
              />
              <input
                className="p-2 rounded-xl border"
                type="password"
                name="password"
                placeholder="Enter Password"
              />
              <select
                className="form-select"
                name="srole"
                aria-label="Default select example"
              >
                <option selected>Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Co-odrinator">Co-odrinator</option>
                <option value="Host">Host</option>
                <option value="Participant">Participant</option>
                <option value="Viewer">Viewer</option>
              </select>
              <button className="bg-[#413D3D] rounded-xl text-white hover:scale-105 duration-300 py-2">
                Submit
              </button>
            </form>
            {/* <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div> */}
            {/* <p className="mt-5 text-xs border-b border-gray-400 py-4">Forgot your password?</p> */}
            <div className="mt-3 text-xs flex justify-between items-center">
              <p>If you are already member....</p>
              <Link exact to="/login" state={{ role: role }}>
                <button className="py-2 px-5 bg-white hover:scale-110 duration-300 border rounded-xl">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
