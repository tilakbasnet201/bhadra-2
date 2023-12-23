import { DeleteButton, EditButton, ViewButton } from "./Buttons";

export const Table = (props) => {
  return (
    <table style={{ marginTop: ".5rem", borderCollapse: "collapse" }}>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
      {props.data?.map((person) => {
        return (
          <tr>
            <td>{person.name}</td>
            <td>{person.email}</td>
            <td>
              <ViewButton />
              <EditButton />
              <DeleteButton />
            </td>
          </tr>
        );
      })}
    </table>
  );
};
