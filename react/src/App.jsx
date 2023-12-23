import Subjects, { Course, Course2 } from "./Course.jsx";
import User from "./User.jsx";
import { Fragment, useState } from "react";
import Logo from "./assets/images/react.png";
import { DeleteButton, EditButton, ViewButton } from "./components/Buttons";
import { Table } from "./components/Table.jsx";
import Todos, { TodosTable } from "./components/Todos.jsx";
import Counter from "./components/Counter.jsx";

let reactData = {
  course: {
    title: "React",
    price: 1500,
  },
};

let nodeData = {
  course: {
    title: "Node",
    price: 1000,
  },
};

let userStyle = {
  display: "flex",
  gap: "5px",
};

let userData = [
  { name: "Hari", email: "hari@yahoo.com" },
  { name: "Shyam", email: "shyam@hotmail.com" },
  { name: "Krishna", email: "krishna@gmail.com" },
  { name: "Mukesh", email: "mukesh@gmail.com" },
  { name: "Harry", email: "harry@outlook.com" },
];

export default function App() {
  const [display, setDisplay] = useState(true);

  return (
    <>
      <button
        className={`btn ${display ? "hover:bg-red-600" : "hover:bg-green-600"}`}
        onClick={() => {
          setDisplay(display ? false : true);
        }}
      >
        {display ? "Hide Counter" : "Show Counter"}
      </button>
      {display && <Counter />}
    </>
  );
  return (
    <Fragment>
      <Todos />

      <hr />

      <div className="text-lg">
        <h1 className="text-red-800 mb-4">Learn React</h1>
        <h1 className="mb-4">Learn Express</h1>
        <h1 className="mb-4">Learn MongoDb</h1>
        <Subjects />
        <Course2 courseName={"Git"} coursePrice="12000" />
        <Course2 courseName="Node" coursePrice="16000" />
        <Course2 courseName="Express" coursePrice="15000" />
        <Course data={nodeData} />
        <Course data={reactData} />
        <Course />
        <div style={userStyle}>
          <User name="Hari" age={23} address={"Tinkune"} />
          <User />
          <User />
          <User />
          <User />
        </div>
        <table style={{ marginTop: ".5rem", borderCollapse: "collapse" }}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td>ABC</td>
            <td>abc@abc.com</td>
            <td>
              <ViewButton />
              <EditButton />
              <DeleteButton />
            </td>
          </tr>
          <tr>
            <td>LMN</td>
            <td>lmn@lmn.com</td>
            <td>
              <ViewButton />
              <EditButton />
              <DeleteButton />
            </td>
          </tr>
          <tr>
            <td>PQR</td>
            <td>pqr@abc.com</td>
            <td>
              <ViewButton />
              <EditButton />
              <DeleteButton />
            </td>
          </tr>
        </table>

        <Table data={userData} />

        <TodosTable />

        <img
          style={{ height: "80px" }}
          src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
          alt=""
        />
        <img src={Logo} alt="" style={{ height: "80px" }} />
        <img src="/chip.png" alt="" style={{ height: "80px" }} />
        <img src="/chip.jpg" alt="" style={{ height: "80px" }} />
        <img src="/vite.svg" alt="" style={{ height: "80px" }} />
        <img src="/react.png" alt="" style={{ height: "80px" }} />
        <img src="" alt="" />
      </div>
    </Fragment>
  );
}
