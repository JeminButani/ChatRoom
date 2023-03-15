import React from "react";
import Border from "../Components/Border";
import "../Style/User_register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function UserLogin() {
  const location = useLocation();
  const { role } = location.state;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const credentials = {
      email: email,
      password: password,
    };

    var res = [];
    try {
      res = await axios.get("http://localhost:3001/users");
      // console.log(res.data);
    } catch (err) {
      alert(err);
    }

    const temp = res.data;
    temp.forEach((e) => {
      if (
        (e.email === credentials.email || e.clg_id === credentials.email) &&
        e.password === credentials.password
      ) {
        // console.log("Yes");
        navigate("/otp", { state: { name: e.name } });
      }
    });

    // console.log(credentials);
  };
  return (
    <>
      <section className="bg-[#413D3D] min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="md:w-screen px-16">
            <h2 className="font-bold text-2xl text-[#413D3D]">
              {role && role} Login
            </h2>
            {/* <p className="text-sm mt-4 text-[#413D3D]">
              If you are already member, login yourself
            </p> */}
            <Border />
            <form
              action=""
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              {/* <input className="p-2 mt-8 rounded-xl border" type="text" name="name" placeholder="Enter Full Name"/> */}
              <input
                className="p-2 mt-8 rounded-xl border"
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
              {/* <input className="p-2 rounded-xl border" type="text" name="mobileNo" placeholder="Enter Phone No."/> */}
              <button className="bg-[#413D3D] rounded-xl text-white hover:scale-105 duration-300 py-2">
                Login
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
