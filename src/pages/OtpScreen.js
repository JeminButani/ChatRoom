import React from "react";
import Border from "../Components/Border";
import "../Style/User_register.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function OtpScreen() {
  const location = useLocation();
  const { name } = location.state;
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const val1 = String(e.target.val1.value);
    const val2 = String(e.target.val2.value);
    const val3 = String(e.target.val3.value);
    const val4 = String(e.target.val4.value);

    const temp = val1 + val2 + val3 + val4;
    console.log(temp);

    var res = [];
    try {
      res = await axios.get("http://localhost:3001/otps");
      console.log(res.data);
    } catch (err) {
      alert(err);
    }
    const temp2 = res.data;
    console.log(temp2);
    temp2.forEach((ele) => {
      if (ele.otp === temp) {
        navigate("/topic", { state: { name: name } });
        console.log("yes");
      } else {
        console.log("no");
      }
    });
  };
  return (
    <>
      <section className="bg-[#413D3D] min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-3xl shadow-lg max-w-2xl p-4 items-center">
          <div className="md:w-screen px-16">
            <h1 className="font-bold text-2xl text-[#413D3D]">
              Verify Account
            </h1>
            <Border />
            <br />
            <br />
            <form
              action=""
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-row h-50 justify-center">
                <input
                  type="text"
                  className="p-2 w-10 rounded-xl border-2 text-center"
                  maxLength="1"
                  name="val1"
                />
                <input
                  type="text"
                  className="p-2 w-10 rounded-xl border-2 text-center"
                  maxLength="1"
                  name="val2"
                />
                <input
                  type="text"
                  className="p-2 w-10 rounded-xl border-2 text-center"
                  maxLength="1"
                  name="val3"
                />
                <input
                  type="text"
                  className="p-2 w-10 rounded-xl border-2 text-center"
                  maxLength="1"
                  name="val4"
                />
              </div>

              <button className="bg-[#413D3D] rounded-xl text-white hover:scale-105 duration-300 py-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
