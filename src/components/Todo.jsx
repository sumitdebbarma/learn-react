import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!task.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-lg rounded-xl bg-slate-900 p-6 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          Todo App
        </h1>

        <div className="mb-6 flex gap-3">
          <input
            type="text"
            placeholder="Add a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-white placeholder-gray-400 outline-none focus:border-blue-500"
          />

          <button
            onClick={addTodo}
            className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800 p-3"
            >
              <span
                onClick={() => toggleTodo(todo.id)}
                className={`cursor-pointer ${
                  todo.completed ? "text-gray-500 line-through" : "text-white"
                }`}
              >
                {todo.text}
              </span>

              <button
                onClick={() => deleteTodo(todo.id)}
                className="rounded bg-red-500 px-3 py-1 text-sm text-white transition hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {todos.length === 0 && (
          <p className="mt-4 text-center text-gray-400">No tasks yet 🚀</p>
        )}
      </div>
    </div>
  );
}

export default Todo;
