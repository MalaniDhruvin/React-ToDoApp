import { useState } from "react";

function AddToDo({ addButton }) {

  const [itemName, setName] = useState();
  const [itemDate, setDate] = useState();
  const hundleInput = (event) => {
    // console.log(event.target.value);
    setName(event.target.value);

  }
  const hundleDate = (event) => {
    // console.log(event.target.value);
    setDate(event.target.value);

  }

  const hundleAdd = () => {
    addButton(itemName, itemDate);
    setDate("");
    setName("");
  }
  return (
    <div class="container main-container">

      <div class="row">
        <div class="col-6">
          <input type="text" value={itemName} onChange={() => hundleInput(event)}
            placeholder="Enter Your ToDo Here" />
        </div>
        <div class="col-4">
          <input type="date" value={itemDate} onChange={() => hundleDate(event)} />
        </div>
        <div class="col-2">
          <button type="button" onClick={hundleAdd}
            class="btn btn-success main-button">Add</  button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;