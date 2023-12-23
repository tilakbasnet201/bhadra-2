import axios from "axios";
import { useEffect, useState } from "react";

export default function ApiCall() {
  const [comments, setComments] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [currentTab, setCurrentTab] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // make api request
  function fetchApiComments() {
    // const pseudoData = ["१", "२", "३", "४", "५", "६", "७", "८", "९", "१०"];

    setIsLoading(true);
    setPhotos([]);
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      // console.log(res);

      setComments(res.data);
      setIsLoading(false);
    });
  }

  function fetchApiPhotos() {
    setIsLoading(true);
    setComments([]);
    setCurrentTab("photos");

    axios.get("https://dummyjson.com/products").then((res) => {
      // console.log(res);
      setPhotos(res.data.products);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    fetchApiPhotos();
  }, []);

  return (
    <div>
      <button className="btn" onClick={() => setCurrentTab("comments")}>
        Comments
      </button>
      <button className="btn" onClick={() => setCurrentTab("photos")}>
        Photos
      </button>
      <div className="mt-4">
        {currentTab === "comments" && (
          <button onClick={fetchApiComments} className="btn">
            Fetch API Comments
          </button>
        )}
        {currentTab === "photos" && (
          <button onClick={fetchApiPhotos} className="btn">
            Fetch API Photos
          </button>
        )}
      </div>

      <hr className="my-4" />
      <div className="text-3xl">Here is the list</div>
      {isLoading && (
        <div className="flex justify-center">
          <p className="border-[3px] border-black p-4 bg-blue-500 text-white ">
            Page is loading, please wait
          </p>
        </div>
      )}

      {currentTab === "comments" && (
        <ul className="pl-10 list-disc">
          {comments.map((el) => (
            <li key={el.id} className="text-2xl">
              {el.body}
            </li>
          ))}
        </ul>
      )}

      {currentTab === "photos" && (
        // <div className="flex flex-wrap justify-between gap-y-8 min-w-full">
        <div className="mx-auto w-9/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 gap-y-8">
          {photos.map((el) => (
            // <div className="flex flex-col items-center">
            <div className="border p-4 rounded-sm flex flex-col items-center">
              <img key={el.id} className="rounded-none" src={el.thumbnail} />
              <span className="text-lg">{el.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
