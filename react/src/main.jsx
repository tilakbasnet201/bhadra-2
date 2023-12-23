import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import App from "./App";
import Counter from "./components/Counter";
import GoogleTabs from "./components/GoogleTabs";
import ApiUsersList from "./components/ApiUsersList";
import TodosList from "./components/TodosList";
import ApiCall from "./components/ApiCall";
import ApiAutoCall from "./components/ApiAutoCall";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <ApiAutoCall /> */}
    <ApiCall />
    {/* <TodosList /> */}
    {/* <ApiUsersList /> */}
    {/* <GoogleTabs /> */}
    {/* // <Counter />, */}
    {/* <App /> */}
  </>
);
