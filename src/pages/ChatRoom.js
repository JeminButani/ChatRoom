import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Messages from "../Components/Messages";
import "./ChatRoom.scss";

export default function ChatRoom() {
  const location = useLocation();
  const { topic, name } = location.state;
  const navigate = useNavigate();

  const [messages, SetMessages] = useState([]);
  const [ranks, setRanks] = useState([]);
  const [sidebarToggled, setSidebarToggled] = useState(false);
  const msgs = [];
  const rnks = [];
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    // messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    if (messagesEndRef.current !== null)
      messagesEndRef.current.scrollIntoView({
        block: "end",
        behavior: "smooth",
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const msg = String(e.target.message.value);

    const obj = {
      message: msg,
      name: name,
    };

    try {
      const res = await axios.post("http://localhost:3001/messages", obj);
    } catch (err) {
      alert(err);
    }
    SetMessages([]);
    fetchMessage();
    e.target.message.value = "";
  };

  const fetchRanks = async () => {
    var res = [];
    try {
      res = await axios.get("http://localhost:3001/ranks");
    } catch (err) {
      alert(err);
    }
    // const temp2 = res.data;
    // temp2.forEach((ele) => {
    //   rnks.push({ rank: ele.rank, name: ele.name, id: ele.id });
    // });

    setRanks(res.data);
  };

  const fetchMessage = async () => {
    var res = [];
    try {
      res = await axios.get("http://localhost:3001/messages");
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
    fetchRanks();
  }, []);

  return (
    <>
      <section className="bg-[#413D3D] min-h-screen flex items-center justify-center flex-col">
        <div className="endchat">
          <aside className={`${sidebarToggled ? "visible" : ""}`}>
            <div className="ranks">
              <table>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                </tr>
                {ranks &&
                  ranks.map((e) => {
                    return (
                      <tr key={e.id}>
                        <th>{e.rank}</th>
                        <th>{e.name.toUpperCase()}</th>
                      </tr>
                    );
                  })}
              </table>
              <div className="btn">
                <button className="refresh" onClick={() => fetchRanks()}>
                  Refresh
                </button>
                <button
                  className="refresh"
                  onClick={() => setSidebarToggled(!sidebarToggled)}
                >
                  Back
                </button>
              </div>
            </div>
          </aside>
          <button
            className="end"
            onClick={() => setSidebarToggled(!sidebarToggled)}
          >
            Show Ranks
          </button>

          <button
            className="end"
            onClick={() => {
              if (window.confirm("Are you sure you want to exit?")) {
                navigate("/");
              }
            }}
          >
            Exit Chat
          </button>
        </div>
        <div className="chatMain">
          <div className="topic">
            <h2>Topic : {topic && topic}</h2>
          </div>

          <br />
          <div className="chatbox" ref={messagesEndRef}>
            <Messages messages={messages} name={name} />
            <div className="test" ref={messagesEndRef}></div>
          </div>
          <form action="" className="form" onSubmit={handleSubmit}>
            <input
              className="inputMsg"
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
