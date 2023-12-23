import { useState } from "react";

export default function TodosList() {
  // const [todos, setTodos] = useState([]);
  const [tasks, setTasks] = useState([]);
  // const [status, setStatus] = useState([]);
  const [checkIfClicked, setCheckIfClicked] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // console.log("render"); // ui renders once every time useState mutator function(s) does sth

    // console.log(e.target.title.value);
    // let arr1 = [...todos];
    // let arr2 = [...status];
    let arr3 = [...tasks];
    // arr1.push(e.target.title.value);
    // console.log(typeof e.target.status.value);
    let statusField = e.target.status.value === "true" ? true : false;

    // arr2.push(statusField);

    arr3.push({
      task: e.target.title.value,
      status: statusField,
    });

    // setTodos(arr1);
    setTasks(arr3);

    // setStatus(arr2);
    setCheckIfClicked(true);

    // console.log(arr1);  // this prints updated array to the console immediately
    // console.log(arr2);  // this prints updated array to the console immediately
    // console.log(status); // ths prints updated array one step later ... don't now why ?
    // console.log(todos); // ths prints updated array one step later ... don't now why ?
    // console.log(newArr);
  };

  function deleteTask(i) {
    const temp = [...tasks].filter((el, index) => index !== i);
    setTasks(temp);

    setCheckIfClicked(temp.length === 0 ? false : true);
  }
  function deleteAll() {
    const temp = [...tasks].filter(() => false);
    setTasks(temp);

    setCheckIfClicked(temp.length === 0 ? false : true);
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          className="border border-black"
        />
        {/* <input
          type="text"
          name="status"
          placeholder="status"
          className="border border-black"
        /> */}
        <select name="status" className="border border-black">
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <button className="bg-gray-300">Add to list</button>
      </form>
      {checkIfClicked && (
        <button className="btn" onClick={deleteAll}>
          Delete All
        </button>
      )}
      <ul className="pl-[40px] list-disc">
        {tasks.map((el, index) => (
          <li>
            {el.task} {el.status ? "Completed" : "Pending"}
            <button
              onClick={() => {
                deleteTask(index);
              }}
              className="btn"
            >
              delete
            </button>
          </li>
        ))}
      </ul>

      <table className={checkIfClicked === false ? "hidden" : ""}>
        <thead>
          <tr>
            <th className="bg-slate-500">Title</th>
            <th className="bg-slate-500">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((el) => (
            <tr>
              <td>{el.task}</td>
              {/* <td
                className={
                  status[index] === "Completed" ? "bg-green-500" : "bg-red-600"
                }
              >
                {status[index]}
              </td> */}
              <td className={el.status ? "bg-green-500" : "bg-red-600"}>
                {el.status ? "Completed" : "Pending"}
              </td>
            </tr>
          ))}

          {/* <td>{status.map((status) => status)}</td> */}
        </tbody>
      </table>
    </div>
  );
}
