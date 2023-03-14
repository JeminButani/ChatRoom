import React from "react";

const Messages = ({ messages }) => {
  return (
    <div>
      {messages &&
        messages.map((e) => (
          <h2 className="font-bold text-2xl text-[#413D3D]" key={e.id}>
            {e.name}:{e.message}
          </h2>
        ))}
    </div>
  );
};

export default Messages;
