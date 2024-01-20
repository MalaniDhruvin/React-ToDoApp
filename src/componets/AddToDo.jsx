import { useRef } from "react";

function AddToDo({ addButton }) {

  // const [itemName, setName] = useState();
  // const [itemDate, setDate] = useState();
  const ItemName=useRef();
  const ItemDate=useRef();
  // const hundleInput = (event) => {
  //   console.log(event.target.value);
  //   setName(event.target.value);

  // }
  // const hundleDate = (event) => {
  //   console.log(event.target.value);
  //   setDate(event.target.value);

  // }

  const hundleAdd = () => {
    const itemname=ItemName.current.value;
    const itemdate=ItemDate.current.value;
    addButton(itemname, itemdate);
    ItemName.current.value="";
    ItemDate.current.value="";
    // setDate("");
    // setName("");
  }
  return (
    <div class="container main-container">

      <div class="row">
        <div class="col-6">
          <input type="text"  
          ref={ItemName}
          // onChange={() => hundleInput(event)}
            placeholder="Enter Your ToDo Here" />
        </div>
        <div class="col-4">
          <input type="date" 
          ref={ItemDate}
          // value={itemDate} onChange={() => hundleDate(event)} 
          />
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