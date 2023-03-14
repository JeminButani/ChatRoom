import React, { useEffect, useState } from "react";
import Border from "../Components/Border";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import Messages from "../Components/Messages";

export default function ChatRoom() {
  const location = useLocation();
  const { topic } = location.state;

  const [messages, SetMessages] = useState([]);
  const msgs = [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const msg = String(e.target.message.value);

    const obj = {
      message: msg,
      name: "Dhyey",
    };

    // let data = JSON.stringify({
    //   id: id,
    //   message: msg,
    //   name: name,
    // });

    try {
      const res = await axios.post("http://localhost:3001/messages", obj);
    } catch (err) {
      alert(err);
    }
    SetMessages([]);
    fetchMessage();
  };

  const fetchMessage = async () => {
    var res = [];
    try {
      res = await axios.get("http://localhost:3001/messages");
      console.log(res.data);
    } catch (err) {
      alert(err);
    }
    const temp2 = res.data;
    temp2.forEach((ele) => {
      msgs.push({ message: ele.message, name: ele.name, id: ele.id });
    });

    SetMessages(msgs);
  };

  useEffect(() => {
    SetMessages([]);
    fetchMessage();
  }, []);

  return (
    <>
      <section className="bg-[#413D3D] min-h-screen flex items-center justify-center">
        <div
          className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center"
          style={{ height: "40vh" }}
        >
          <Messages messages={messages} />
        </div>
        <div className="chatbox">
          
        </div>
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="md:w-screen px-16">
            <h2 className="font-bold text-2xl text-[#413D3D]">
              topic = {topic && topic}
            </h2>

            <Border />

            <form
              action=""
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <input
                className="p-2 mt-8 rounded-xl border"
                type="text"
                name="message"
                placeholder="Enter message"
              />

              <button className="bg-[#413D3D] rounded-xl text-white hover:scale-105 duration-300 py-2">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
