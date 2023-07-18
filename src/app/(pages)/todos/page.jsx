"use client";

import { useForm } from "react-hook-form";
import { Edit, Trash2, CheckSquare, Maximize2 } from "react-feather";
import Card from "@/components/Card";
import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodoId, setCurrentTodoId] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      todo: "",
    },
  });

  const onAddTodo = (data) => {
    const prepData = { id: Date.now(), todo: data.todo };
    setTodos((prevTodos) => [...prevTodos, prepData]);
    reset(); // Clear the input value after submitting the form for adding new todo
  };

  const handleEditTodo = (id) => {
    setCurrentTodoId(id);
    const todoToUpdate = todos.find((todo) => todo.id === id);
    if (todoToUpdate) {
      setValue("todo", todoToUpdate.todo);
    }
  };

  const onUpdateTodo = (data) => {
    if (currentTodoId) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === currentTodoId ? { ...todo, todo: data.todo } : todo,
        ),
      );
      setCurrentTodoId(null);
      reset(); // Clear the input value after updating the todo
    }
  };

  const onDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    if (currentTodoId === id) {
      setCurrentTodoId(null); // Reset currentTodoId if deleted todo is being edited
      reset(); // Clear the input value after deleting the todo
    }
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <div className="flex items-center mb-4">
        <h1 className="text-xl font-bold mr-2">Todo List</h1>
      </div>
      <div className="my-4 max-w-5xl mx-auto px-4">
        {!currentTodoId && (
          <form onSubmit={handleSubmit(onAddTodo)}>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md"
              id="todo"
              cols="1"
              rows="1"
              {...register("todo")}
            ></textarea>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Submit
            </button>
          </form>
        )}
      </div>
      {todos && todos.length > 0 && (
        <div className="grid gap-5 md:grid-cols-3">
          {todos.map((todo) => {
            return (
              <Card key={todo.id}>
                <div className="p-4 flex flex-col">
                  <div className="flex items-center space-x-4 mb-2">
                    <Edit
                      size={24}
                      className="cursor-pointer hover:text-yellow-500"
                      onClick={() => handleEditTodo(todo.id)}
                    />
                    <Trash2
                      size={24}
                      className="cursor-pointer hover:text-red-500"
                      onClick={() => onDeleteTodo(todo.id)}
                    />
                    <Maximize2
                      size={24}
                      className="cursor-pointer hover:text-gray-500"
                      onClick={() => console.log("Maximize2")}
                    />
                    <CheckSquare
                      size={24}
                      className="cursor-pointer hover:text-green-500"
                      onClick={() => console.log("CheckSquare")}
                    />
                  </div>
                  {todo.id === currentTodoId ? (
                    <form onSubmit={handleSubmit(onUpdateTodo)}>
                      <textarea
                        className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md"
                        id="todo"
                        cols="1"
                        rows="1"
                        {...register("todo")}
                      ></textarea>
                      <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md"
                      >
                        Update
                      </button>
                    </form>
                  ) : (
                    <p>{todo.todo}</p>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Todos;
