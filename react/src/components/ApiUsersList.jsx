import axios from "axios";
import { useState } from "react";

export default function ApiUsersList() {
  const [users, setUsers] = useState([]);
  //   axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
  //     console.log(res);
  //     setUsers(res.data);
  //   });

  const [selectedOption, setselectedOption] = useState(null);
  let nums = ["one", "two", "three"];

  return (
    <div>
      <h1 className="text-5xl">
        The user has selected/typed: {selectedOption}
      </h1>
      <hr className="my-2" />
      <select
        onSelect={(e) => setselectedOption(e.target.value)}
        className="border p-5 border-black px-5 py-2"
      >
        <option>Select</option>
        <option value="1">one</option>
        <option value="2">two</option>
        <option value="3">three</option>
      </select>
      <ul>
        {nums.map((num) => (
          <li
            onClick={() => {
              // alert(`${num} selected`)
              setselectedOption(num);
              console.log({ selectedOption });
            }}
          >
            {num}
          </li>
        ))}
      </ul>
      userInput:
      <input
        onChange={(e) => setselectedOption(e.target.value)}
        type="text"
        className="border boder-2 border-black p-2"
      />
      <hr className="my-2" />
      <h1>APIUsersList</h1>
      <ul className="p-4">
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
