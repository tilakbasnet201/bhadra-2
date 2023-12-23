import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  // console.log("render");

  useEffect(() => {
    console.log("component mounted");
    return () => {
      console.log("component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("component updated");
  }, [count]);

  function increase() {
    // let value = count + 1;
    // setCount(value);
    // console.log(count);
    setCount(count + 1);
    // setCount(++count); // this works count++ requires double-clicking, same for count--
  }
  function decrease() {
    // let value = count - 1;
    // setCount(value);
    // console.log(count);
    setCount(count - 1);
  }

  return (
    <div>
      <div>
        <h1 className="text-5xl border-4 block mt-4">
          Count: <span className="font-bold">{count}</span>
        </h1>
        <hr />
        <div className="flex gap-4 mt-4">
          <button
            className="border border-gray-600 bg-slate-300 rounded-xl px-4 py-2 hover:bg-slate-400 hover:shadow-xl hover:text-white"
            onClick={increase}
          >
            Incresase
          </button>
          <button
            className="border border-gray-600 bg-slate-300 rounded-xl px-4 py-2 hover:bg-slate-400 hover:shadow-xl hover:text-white"
            onClick={decrease}
          >
            Decresase
          </button>
        </div>
      </div>
    </div>
  );
}
