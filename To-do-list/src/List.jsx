import { useState } from "react";
import './Style.css'; // Ensure you import the CSS file
function List() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  function handleInput(e) {
    setInput(e.target.value);
  }

  function addTask() {
    if (input === "") {
      alert('Please add a task');
    } else {
      setTasks([...tasks, input]);
      setInput("");
    }
  }

  function handleDelete(id) {
    const updatedTasks = tasks.filter((_, index) => index !== id);
    setTasks(updatedTasks);
  }

  function handleEdit(index) {
    setEditingIndex(index);
    setInput(tasks[index]);
  }

  function saveEdit() {
    const updatedTasks = [...tasks];
    updatedTasks[editingIndex] = input;
    setTasks(updatedTasks);
    setEditingIndex(null);
    setInput("");
  }
  function deleteLiist(){
    setTasks([])
    
  }
  return (
    <div className="container">
      <h1>Grocery Shopping</h1>
      <input type="text" value={input} onChange={handleInput} />
      <button onClick={editingIndex !== null ? saveEdit : addTask}>
        {editingIndex !== null ? "Save" : "Add"}
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <div>
              <button className="edit" onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={()=>deleteLiist()}>Delete List</button>
    </div>
  );
}

export default List;
