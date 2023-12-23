// later api request

const todos = ["html", "css", "javascript", "express"];

const todosArray = [
  { course: "html", status: "completed" },
  { course: "css", status: "completed" },
  { course: "js", status: "completed" },
  { course: "react", status: "running" },
  { course: "express", status: "pending" },
  { course: "mongodb", status: "pending" },
];
// let todosInHtml = todos.map((el) => {
//   return <li>{el}</li>;
// });

function Todos() {
  return (
    <>
      <h1>TODOS List ({todos.length})</h1>
      <ul>
        {todos.map((el) => {
          return <li>{el}</li>;
        })}
      </ul>
    </>
  );
}

export function TodosTable() {
  return (
    <table style={{ marginTop: ".5rem", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Course</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {todosArray.map((task) => {
          return (
            <tr>
              <td>{task.course}</td>
              <td
                // style={{
                //   backgroundColor:
                //     task.status === "completed"
                //       ? "green"
                //       : task.status === "running"
                //       ? "yellow"
                //       : "red",
                // }}
                // className={
                //   task.status === "completed"
                //     ? "bg-green capitalize"
                //     : task.status === "running"
                //     ? "bg-yellow capitalize"
                //     : "bg-red capitalize"
                // }
                className={`capitalize ${
                  task.status === "completed"
                    ? "bg-green"
                    : task.status === "running"
                    ? "bg-yellow"
                    : "bg-red"
                }`}
              >
                {task.status}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Todos;
