import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [roomCode, setRoomCode] = useState("");
  console.log(roomCode);

  const navigate= useNavigate();

  const submitCode = (event) => {
    event.preventDefault();
    navigate(`/room/${roomCode}`);

  }

  return (
    <div>
      <form action="" onSubmit={submitCode}>
      <label>Enter The Room Code</label>
      <input
        type="text"
        required
        placeholder="Enter the room code"
        value={roomCode}
        onChange={(event) => setRoomCode(event.target.value)}
      />
      <button type="submit">ENTER ROOM</button>
      </form>
      
    </div>  

  );
}
