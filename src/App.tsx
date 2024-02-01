import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-[100dvh] ">
      <div className="grid gap-4 bg-gradient-to-t from-accent-light/50 to-accent-light/90 p-5">
        <div className="text-center text-lg font-medium">Last 3 Winners</div>
        <div className="flex h-[25dvh] items-center ">
          <div className="flex h-full flex-grow flex-col items-start justify-end">
            <Card img="2nd.jpg" />
          </div>
          <div className="flex h-full flex-grow flex-col items-center justify-start">
            <Card img="1st.jpg" />
          </div>
          <div className="flex h-full flex-grow flex-col items-end justify-end">
            <Card img="3rd.jpg" />
          </div>
        </div>
      </div>
      <Nav />
      <div className="grid gap-1 bg-gradient-to-t from-white to-accent-light/50 px-1.5 py-2 ">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
      {/* <img src="temp.jpg" alt=""  className="mix-blend-multiply"/> */}
    </div>
  );
}

export default App;

function Nav() {
  return (
    <div className="flex items-center justify-around bg-accent-light/50 pt-4 pb-3 text-sm font-semibold ">
      <div className="active rounded-full border border-accent-dark bg-accent-light px-4 py-2 text-black/80 shadow-md shadow-accent-light/70 ">
        Top Winnings
      </div>
      <div className="rounded-full border border-accent bg-accent-light/20 px-4 py-2 pt-1.5 text-black/70">
        {" "}
        Top Earners
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="flex grow items-center justify-between rounded-lg border border-accent-dark bg-accent px-2 py-2.5 font-medium text-gray-900">
      <div className="flex items-center justify-around gap-2">
        {/* <div className="border border-purple-500 bg-purple-400 aspect-square rounded-full flex justify-center items-center px-3 text-white/80"> */}
        <span className="pl-1 text-2xl font-extrabold text-black/70"> 2.</span>
        {/* </div> */}
        <img
          src="./vite.svg"
          alt=""
          className="rounded-full border border-accent-dark bg-blue-500"
        />
        <div className="text-black/70 text-sm ">123456789</div>
      </div>
      <div></div>
      <div className="flex items-center justify-around gap-1">
        <img src="trophy2.jpg" alt="" className="w-5 mix-blend-multiply" />

        <div className="rounded-full border border-accent-dark/40 bg-accent-light px-3 py-1 text-xs text-black/80 shadow-md shadow-accent-dark/20">
          1900.0
        </div>
      </div>
    </div>
  );
}

function Card({ img }: { img?: string }) {
  return (
    <div
      className="flex w-[92%] aspect-[2/3] flex-col items-center justify-around rounded-2xl border border-accent-dark bg-accent py-2 shadow-xl shadow-accent/30
    "
    >
      <img src={img} alt="" className="w-12 mix-blend-multiply " />
      <div className="text-sm font-semibold text-black/80">Ananta</div>
      <div className="rounded-full border border-accent-dark/40 bg-accent-light px-3 py-1 text-xs font-medium text-black/80 shadow-md shadow-accent-dark/20">
        1000.0
      </div>
    </div>
  );
}
