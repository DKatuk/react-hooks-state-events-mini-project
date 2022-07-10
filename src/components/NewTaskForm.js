import React, {useState} from "react";

function NewTaskForm( {onTaskFormSubmit, categories }) {

const [text, setText] = useState("");
const [category, setCategory] = useState("Code");

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("Code");
  }


  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} 
        name="text" />
      </label>
      <label>
        Category
        <select value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        name="category">
          {/* render <option> elements for each category here */}
             {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
