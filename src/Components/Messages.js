import React from "react";
import "./Messages.scss";

const Messages = ({ messages, name }) => {
  
  return (
    <div className="message">
      {messages &&
        messages.map((e) => {
          if (e.name.toUpperCase() === name.toUpperCase()) {
            return (
              <div className="Right">
                <div className="Rightblock" key={e.id}>
                  <div className="name">{e.name.toUpperCase()}</div>
                  <div className="msg">{e.message}</div>
                </div>
              </div>
            );
          } else {
            return (
              <div className="Left">
                <h2 className="Left" key={e.id}>
                  <div className="Leftblock" key={e.id}>
                    <div className="name">{e.name.toUpperCase()}</div>
                    <div className="msg">{e.message}</div>
                  </div>
                </h2>
              </div>
            );
          }
        })}
    </div>
  );
};

export default Messages;
