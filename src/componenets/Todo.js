import { useState } from "react";

function Todo() {
  const [items, setItems] = useState([]);
  const [todo, setTodo] = useState("");

  function onTodoSet() {
    if (!todo.trim()) return;
    setItems([...items, todo.trim()]);
    setTodo("");
  }

  function deleteTodo(deletedindex) {
    const deletedArrays = items.filter((_, index) => index !== deletedindex);
    setItems(deletedArrays);
  }

  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-800 shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Todo</h1>

        <div className="flex gap-3 mb-4">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="flex-1 px-4 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            placeholder="Add a new task..."
          />
          <button
            onClick={onTodoSet}
            className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition"
          >
            Add
          </button>
        </div>

        <div className="space-y-3">
          {items.length === 0 ? (
            <p className="text-sm text-slate-500">No tasks yet. Add one above.</p>
          ) : (
            items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-slate-50 dark:bg-slate-700 border border-slate-100 dark:border-slate-600 rounded-md px-4 py-2"
              >
                <p className="text-slate-800 dark:text-slate-100">{item}</p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => deleteTodo(index)}
                    className="text-sm text-red-600 hover:text-red-800 px-2 py-1 rounded-md bg-red-50 hover:bg-red-100 dark:bg-transparent dark:hover:bg-red-700/10 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
