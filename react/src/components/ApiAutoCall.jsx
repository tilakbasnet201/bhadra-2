import axios from "axios";
import { useState, useEffect } from "react";

export default function ApiAutoCall() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // make api request

  // const pseudoData = ["१", "२", "३", "४", "५", "६", "७", "८", "९", "१०"];

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      // console.log(res);

      setComments(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <button className="btn">API Auto Call</button>
      <hr className="my-4" />
      <div className="text-3xl">Here is the list</div>
      {isLoading && (
        <div className="flex justify-center">
          <p className="border-[3px] border-black p-4 bg-blue-500 text-white ">
            Page is loading, please wait
          </p>
        </div>
      )}

      <ul className="pl-10 list-disc">
        {comments.map((el) => (
          <li key={el.id} className="text-2xl">
            {el.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
