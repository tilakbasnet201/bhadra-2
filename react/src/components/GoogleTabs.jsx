import { useState } from "react";

export default function GoogleTabs() {
  let tabs = ["all", "images", "videos"];
  let [currentTab, setCurrentTab] = useState("ALL");
  return (
    <div>
      Current Tab: {currentTab}
      <ul className="flex gap-5">
        {tabs.map((el) => (
          <li
            className={`cursor-pointer border border-red-500 px-2 py-1  ${
              el.toUpperCase() === currentTab
                ? "text-white border-b-blue-500"
                : ""
            }`}
            onClick={() => {
              setCurrentTab(el.toUpperCase());
            }}
          >
            {el}
          </li>
        ))}
      </ul>
      {/* display:none method */}
      {/* <div className={`${currentTab === "ALL" ? "block" : "hidden"}`}>
        all contents
      </div>
      <div className={`${currentTab === "IMAGES" ? "block" : "hidden"}`}>
        images contents
      </div>
      <div className={`${currentTab === "VIDEOS" ? "block" : "hidden"}`}>
        videos contents
      </div> */}
      <div className="p-5 m-5 border">
        {currentTab === "ALL" && <p>all contents</p>}
        {currentTab === "IMAGES" && <p>images contents</p>}
        {currentTab === "VIDEOS" && <p>videos contents</p>}
      </div>
    </div>
  );
}
