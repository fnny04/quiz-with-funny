import React from "react";
import { useState, Fragment } from "react";

export default function TodoList() {
  const [isEdit, setIsEdit] = useState(false);

  const [inputTodo, setInputTodo] = useState({
    id: Date.now(),
    name: "",
  });

  const [todo, setTodo] = useState([]);

  const [selectedTodo, setSelectedTodo] = useState([]);

  const handleAddTodo = (todo) => {
    setSelectedTodo((prev) => [...prev, todo]);
  };

  const handleRemoveSelectedTodo = (index) =>
    index > -1 &&
    setSelectedTodo((prev) => [...prev.splice(index, 1), ...prev]);

  const handleRemoveTodo = (index) =>
    index > -1 && setTodo((prev) => [...prev.splice(index, 1), ...prev]);

  const handleEditTodo = (index) => {
    setIsEdit(true);
    setInputTodo(todo[index]);
  };

  const handleCreateTodo = (event) => {
    event.preventDefault();
    setTodo((prev) => [...prev, inputTodo]);
    setInputTodo({ ...inputTodo, name: "" });
  };

  const handleUpdateTodo = (event) => {
    event.preventDefault();
    const newItem = todo.map((item) => {
      if (item.id === inputTodo.id) {
        return { ...item, name: inputTodo.name };
      }
      return item;
    });
    setTodo(newItem);
    setInputTodo({
      id: "",
      name: "",
    });
    setIsEdit(false);
  };
  return (
    <div>
      <section className="flex items-center justify-center h-screen overflow-hidden gap-x-4">
        <section className="flex flex-col w-[400px] h-[400px] items-center justify-center border-2 border-blue-400 rounded-lg p-4">
          <div className="flex flex-col w-1/2 h-auto items-start gap-x-4">
            <form
              className="flex flex-col gap-y-2"
              onSubmit={isEdit ? handleUpdateTodo : handleCreateTodo}
            >
              <input
                onChange={(e) =>
                  setInputTodo({ ...inputTodo, name: e.target.value })
                }
                className="p-2 text-base border-2 border-blue-400 text-blue-400 rounded-lg"
                placeholder="Input your todo.."
                type="text"
                name="name"
                value={inputTodo.name}
              />
              <button
                className="text-base p-2 w-auto h-auto rounded-lg border-2 border-blue-400 bg-white text-blue-400 font-sans font-600"
                type="submit"
              >
                {isEdit ? "Edit Todo" : "Add Todo"}
              </button>
            </form>
          </div>
        </section>
        <section className="flex flex-col w-[400px] h-[400px] overflow-auto border-2 border-red-400 rounded-lg p-4">
          <div className="flex flex-col w-1/2 h-auto items-start gap-x-4">
            <span className="sticky top-0 font-sans text-base text-red-400 bg-white w-full">
              Jumlah Todo Tersedia {todo.length}
            </span>
            {todo.map((todo, index) => (
              <Fragment key={index}>
                <div
                  className="flex flex-col gap-x-3 items-start w-full"
                  key={index}
                >
                  <h1 className="text-red-400 font-sans w-full">
                    {index + 1}. {todo.name}
                  </h1>
                  <div className="flex gap-x-4 justify-start">
                    <button
                      onClick={() => handleAddTodo(todo)}
                      type="button"
                      className="w-auto h-auto p-2 rounded-lg bg-red-400 text-white"
                    >
                      Add
                    </button>
                    <span
                      className="text-red-400 font-sans font-700 text-base border-b-2"
                      onClick={() => handleRemoveTodo(index)}
                    >
                      Remove
                    </span>
                    <span
                      className="text-red-400 font-sans font-700 text-base border-b-2"
                      onClick={() => handleEditTodo(index)}
                    >
                      Edit
                    </span>
                  </div>
                </div>
              </Fragment>
            ))}
            <h1 className="text-yellow-500 font-sans text-2xl">
              {todo.length === 0 && "Data Kosong"}
            </h1>
          </div>
        </section>
        <section className="flex flex-col w-[400px] h-[400px] overflow-auto border-2 border-yellow-400 rounded-lg p-4">
          <span className="sticky top-0 font-sans text-base text-yellow-400 bg-white w-full">
            Jumlah Todo Terpilih {selectedTodo.length}
          </span>
          {selectedTodo.map((todo, index) => (
            <div className="flex gap-x-3 items-center" key={index}>
              <h1 className="text-yellow-400 font-sans">{todo.name}</h1>
              <span
                className="text-yellow-400 font-sans font-700 text-base border-b-2"
                onClick={() => handleRemoveSelectedTodo(index)}
              >
                Remove
              </span>
            </div>
          ))}
          <h1 className="text-yellow-500 font-sans text-2xl">
            {selectedTodo.length === 0 && "Data Kosong"}
          </h1>
        </section>
      </section>
    </div>
  );
}
