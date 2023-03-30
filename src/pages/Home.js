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
      <form action="" onSubmit={submitCode}
      className="flex flex-col items-center justify-center">
        <label htmlFor="" className="font-bold text-[20px] pt-12">Enter The Room Code</label>
        <input
          type="text"
          required
          placeholder="Enter the room code"
          value={roomCode}
          onChange={(event) => setRoomCode(event.target.value)}
          className="border-2 border-black rounded-md p-2 w-1/2  pl-8 mt-4"
        />
        <button type="submit"
        className="bg-orange-500 text-white font-bold text-[20px] p-2 rounded-md mt-4"
        >ENTER ROOM</button>
      </form>
      
    </div>  

  );
}
