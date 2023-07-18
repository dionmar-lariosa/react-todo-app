"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Edit, Trash2, CheckSquare, Maximize2 } from "react-feather";
import Card from "@/components/Card";
import TextArea from "@/components/TextArea";
import InputError from "@/components/InputError";
import Button from "@/components/Button";

const schema = yup
  .object({
    todo: yup.string().required(),
  })
  .required();

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodoId, setCurrentTodoId] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      todo: "",
    },
    resolver: yupResolver(schema),
  });

  const onAddTodo = (data) => {
    const prepData = { id: Date.now(), todo: data.todo };
    setTodos((prevTodos) => [...prevTodos, prepData]);
    reset();
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
      reset();
    }
  };

  const onDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    if (currentTodoId === id) {
      setCurrentTodoId(null);
      reset();
    }
  };

  useEffect(() => {
    if (currentTodoId !== null) {
      clearErrors();
    }
  }, [currentTodoId, clearErrors]);

  return (
    <>
      <div className="flex items-center mb-4">
        <h1 className="text-xl font-bold mr-2">Todo List</h1>
      </div>
      <div className="max-w-5xl mx-auto px-4 mb-8">
        {!currentTodoId && (
          <Card>
            <form onSubmit={handleSubmit(onAddTodo)} className="flex flex-col">
              <TextArea {...register("todo")} />
              {errors.todo && <InputError message={errors.todo?.message} />}
              <Button color="primary" extraClass="self-end mt-1">
                Submit
              </Button>
            </form>
          </Card>
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
                      <TextArea autoFocus {...register("todo")} />
                      {errors.todo && (
                        <InputError message={errors.todo?.message} />
                      )}
                      <Button color="primary" extraClass="w-full">
                        Submit
                      </Button>
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
