import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { findRenderedComponentWithType } from "react-dom/test-utils";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-[100dvh]">
      <div className="grid gap-4 p-5">
        <div className="text-center text-lg font-medium">Last 3 Winners</div>
        <div className="flex h-[25dvh] items-center ">
          <div className="flex h-full flex-grow flex-col items-start justify-end">
            <Card />
          </div>
          <div className="flex h-full flex-grow flex-col items-center justify-start">
            <Card />
          </div>
          <div className="flex h-full flex-grow flex-col items-end justify-end">
            <Card />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around border border-black py-3 text-sm font-medium">
        <div className="active border-b-4 border-black/50 px-3 pb-0.5 text-black/80 ">
          Top Winnings
        </div>
        <div className="text-black/60"> Top Earners</div>
      </div>
      <div className="px-2 py-1">
        <ListItem />
      </div>
    </div>
  );
}

export default App;

function ListItem() {
  return (
    <div className="flex grow items-center justify-between rounded-lg bg-purple-300 px-2 py-3 font-medium text-gray-900 ">
      <div className="flex items-center justify-around gap-2">
        {/* <div className="border border-purple-500 bg-purple-400 aspect-square rounded-full flex justify-center items-center px-3 text-white/80"> */}
        <span className="pl-1 text-2xl font-extrabold text-black/70"> 2.</span>
        {/* </div> */}
        <img
          src="./vite.svg"
          alt=""
          className="rounded-full border  border-purple-500 bg-blue-500"
        />
        <div className="text-black/60 ">123456789</div>
      </div>
      <div></div>
      <div className="flex items-center justify-around gap-3 ">
        <div>@</div>
        <div className="rounded-full border border-purple-500 bg-purple-500/90 px-3 py-1 text-xs text-white/90">
          1900.0
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="flex h-[85%] w-[90%] flex-col items-center justify-around rounded-2xl bg-purple-300 py-2">
      <img
        src="vite.svg"
        alt=""
        className="rounded-full border border-purple-500 bg-blue-400 p-0.5"
      />
      <div className="text-sm font-semibold text-black/50">Ananta</div>
      <div className="rounded-full bg-purple-500 px-3 py-1 text-xs font-medium text-white">
        1000.0
      </div>
    </div>
  );
}
