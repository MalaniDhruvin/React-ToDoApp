import ToDoItem from "./ToDoItem";
// import styles from "./TodoItems.module.css";

const ToDoItems = ({ todoItems,deleteButton }) => {
  return (
    <div >
      {todoItems.map((item) => (
        <ToDoItem todoDate={item.dueDate} forDeleteButton={deleteButton} todoName={item.name}></ToDoItem>
      ))}
    </div>
  );
};

export default ToDoItems;