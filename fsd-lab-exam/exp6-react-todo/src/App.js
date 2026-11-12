import { useState, useEffect } from "react";

function App() {

    // Load saved todos from localStorage
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todos")) || []
    );
    const [task, setTask] = useState("");

    // Save todos whenever they change
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // Add task
    function addTask() {
        if (task !== "") {
            setTodos([...todos, task]);
            setTask("");
        }
    }

    // Delete task
    function deleteTask(index) {
        let newTodos = todos.filter((item, i) => i !== index);
        setTodos(newTodos);
    }

    return (
        <div>
            <h2>ToDo App</h2>

            <input
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={addTask}>Add</button>

            <ul>
                {todos.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
