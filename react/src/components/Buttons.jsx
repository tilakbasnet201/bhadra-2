import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

function DeleteButton() {
  return (
    <button
      style={{ backgroundColor: "red", color: "white", fontWeight: "bold" }}
    >
      <FaTrash />
      delete
    </button>
  );
}

function EditButton() {
  return (
    <button
      style={{ backgroundColor: "yellow", color: "red", fontWeight: "bold" }}
    >
      <FaEdit /> edit
    </button>
  );
}

function ViewButton() {
  return (
    <button>
      <FaEye /> View
    </button>
  );
}

export { DeleteButton, EditButton, ViewButton };
