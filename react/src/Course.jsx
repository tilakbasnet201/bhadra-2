import { DeleteButton, EditButton, ViewButton } from "./components/Buttons";

const subjects = [
  "digital logic",
  "microprocessor",
  "electrical machines",
  "computer programming",
];

export function Course(props) {
  return (
    <div class="card mb-4 rounded">
      <p class="title">{props.data?.course.title}</p>
      <p>Price: {props.data?.course.price}</p>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, impedit
        perferendis! Ad rerum, impedit laboriosam vero consequuntur minima
        possimus eos autem ipsa iste, praesentium alias. Molestias ullam nihil
        iure blanditiis quisquam quidem quaerat nostrum quam ad vitae provident
        aspernatur, laborum sequi voluptatibus molestiae velit eligendi
        voluptatem illo cupiditate, necessitatibus voluptatum!
      </p>
      <ViewButton />
      <EditButton />
      <DeleteButton />
    </div>
  );
}

export function Course2(props) {
  return (
    <div class="card mb-4 rounded-lg">
      <p class="title">{props.courseName}</p>
      <p>Price: {props.coursePrice}</p>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, impedit
        perferendis! Ad rerum, impedit laboriosam vero consequuntur minima
        possimus eos autem ipsa iste, praesentium alias. Molestias ullam nihil
        iure blanditiis quisquam quidem quaerat nostrum quam ad vitae provident
        aspernatur, laborum sequi voluptatibus molestiae velit eligendi
        voluptatem illo cupiditate, necessitatibus voluptatum!
      </p>
      <ViewButton />
      <EditButton />
      <DeleteButton />
    </div>
  );
}

export default function Subjects() {
  return (
    <>
      {subjects.map((subject) => {
        return <li>{subject}</li>;
      })}
    </>
  );
}
