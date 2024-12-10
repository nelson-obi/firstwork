import React from "react";
import { FaCameraRetro } from "react-icons/fa";

export default function Box() {
  return (
    <div className=" bg-black/70  text-white border-4 p-6 w-fit rounded-3xl m-4">
        <div className="flex items-center gap-10 justify-between">
      <div className="">
        <p className="text-green-700 text-lg font-bold">40</p>
        <p className="text-xs">Appointments</p>
      </div>
      <div className="flex items-center justify-center text-green-500 bg-cyan-950  rounded-full w-12 h-12">
        <FaCameraRetro />
      </div>
        </div>
      <p className="text-[10px] mt-6">Yesterday 32 Appointments</p>
    </div>
  );
}
