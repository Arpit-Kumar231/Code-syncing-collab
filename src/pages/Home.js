import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";

export default function Home() {
  const [roomId, setRoomId] = useState("");
  const [username, setusername] = useState("");

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success("Created a new room");
  };

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img src="/code-sync.png" alt="code-sync-logo" />
        <h4 className="mainLabel">Paste invitation Room Id</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="Room ID"
            value={roomId}
            onChange={(e) => {
              setRoomId(e.target.value);
            }}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="UserName"
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
          <button className="btn joinBtn">Join</button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a onClick={createNewRoom} href="" className="createNewBtn">
              New Room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Built with love by{" "}
          <a href="https://github.com/Arpit-Kumar231">Arpit</a>
        </h4>
      </footer>
    </div>
  );
}
