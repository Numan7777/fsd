# 6. ToDo App (useState + useEffect + localStorage)

> Core idea: **useState** stores the list, **useEffect** saves it to localStorage

## ▶ Start (terminal)

```bash
cd "C:\Users\Numan ghori\Desktop\FSD"
npx create-react-app exp6
cd exp6
```

## 📄 Code: replace src/App.js

```jsx
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
```

## 🏁 End

1. **Ctrl + S** → run **npm start** → open **localhost:3000**
2. Add 2–3 tasks → delete one.
3. **Refresh the page** → the tasks are still there (localStorage) ✅
4. Stop: **Ctrl + C**
