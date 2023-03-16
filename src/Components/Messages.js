import React from "react";
import "./Messages.scss";

const Messages = ({ messages, name }) => {
  return (
    <div className="message">
      {messages &&
        messages.map((e) => {
          if (e.name.toUpperCase() === name.toUpperCase()) {
            return (
              <div className="Right" key={e.id}>
                <div className="Rightblock">
                  <div className="msg">
                    <div className="name">{e.name.toUpperCase()}</div>
                    {e.message}
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div className="Left" key={e.id}>
                <h2 className="Left">
                  <div className="Leftblock">
                    <div className="msg">
                      <div className="name">{e.name.toUpperCase()}</div>
                      {e.message}
                    </div>
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
