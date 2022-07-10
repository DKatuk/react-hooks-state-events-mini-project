import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

// activate remove button
const [tasks, setTasks] = useState(TASKS);

 function handleDeleteTask(deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  }


// category filter
const [category, setCategory] = useState("All");
const visibleTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  );

//newTaskForm
function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      <NewTaskForm 
      categories={CATEGORIES.filter((cat) => cat !== "All")}
      onTaskFormSubmit={handleAddTask}/>
      
      <TaskList tasks={visibleTasks} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
