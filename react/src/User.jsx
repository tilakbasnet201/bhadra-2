import { DeleteButton, EditButton, ViewButton } from "./components/Buttons";

export default function User(props) {
  let { name, age, address } = props;

  return (
    <div style={{ border: "1px solid", padding: "1rem" }}>
      <div className="users" style={{ textAlign: "center" }}>
        <img src="https://picsum.photos/100/100" alt="" />
        <p style={{ textAlign: "right" }}>
          Name: {name} Age: {age}
        </p>
        <ViewButton />
        <EditButton />
        <DeleteButton />

        <p>Address: {address}</p>
      </div>
    </div>
  );
}
