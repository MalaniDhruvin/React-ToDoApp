import AppName from "./componets/AppName";
import AddToDo from "./componets/AddToDo";
import ToDoItems from "./componets/ToDoItems";
import WelcomeMessage from "./componets/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  // const initialtodoItems = [
  //   {
  //     name: "Learn EveryDay React",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Go to College",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Practice What You Learn",
  //     dueDate: "EveryDay",
  //   },
  // ];

  const [todoItems, setItemName] = useState([]);

  const hundleAdd = (itemName, itemDate) => {
    console.log(`name is ${itemName} Date is ${itemDate}`);
    setItemName([...todoItems, { name: itemName, dueDate: itemDate },]);
  }

  const hundleDelete = (itemName) => {
    // console.log("Deleted Item is ",itemName);
    const arr = todoItems.filter((item) => item.name !== itemName);
    setItemName(arr);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo addButton={hundleAdd} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <ToDoItems todoItems={todoItems} deleteButton={hundleDelete}></ToDoItems>
    </center>
  );
}

export default App;