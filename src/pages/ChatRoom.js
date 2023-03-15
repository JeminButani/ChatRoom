import React, { useEffect, useState, useRef } from "react";
import Border from "../Components/Border";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import Messages from "../Components/Messages";
import "./ChatRoom.scss";

export default function ChatRoom() {
  const location = useLocation();
  const { topic, name } = location.state;

  const [messages, SetMessages] = useState([]);
  const msgs = [];
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const msg = String(e.target.message.value);

    const obj = {
      message: msg,
      name: name,
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
    scrollToBottom();
  };

  useEffect(() => {
    SetMessages([]);
    fetchMessage();
  }, []);

  return (
    <>
      <section className="bg-[#413D3D] min-h-screen flex items-center justify-center">
        <div className="chatMain">
          <div className="topic">
            <h2>Topic : {topic && topic}</h2>
          </div>

          <br />
          <div className="chatbox" ref={messagesEndRef}>
            <Messages messages={messages} name={name} />
          </div>
          <form action="" className="form" onSubmit={handleSubmit}>
            <input
              className="  inputMsg"
              type="text"
              name="message"
              placeholder="Enter message"
            />

            <button className="sendBtn">Send</button>
          </form>
        </div>
      </section>
    </>
  );
}
