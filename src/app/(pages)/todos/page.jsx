"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Edit, Trash2, CheckSquare, Eye } from "react-feather";
import Card from "@/components/Card";
import TextArea from "@/components/TextArea";
import InputError from "@/components/InputError";
import Button from "@/components/Button";
import Modal from "@/components/Modal";

const schema = yup
  .object({
    todo: yup.string().required(),
  })
  .required();

const actionConfigInit = { isModalOpen: false, title: "", msg: "", for: "" };

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodoId, setCurrentTodoId] = useState(null);
  const [actionConfig, setActionConfig] = useState(actionConfigInit);

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

  const handleActionConfirmation = () => {
    if (actionConfig.for === "delete") {
      onDeleteTodo(currentTodoId);
    } else if (actionConfig.for === "complete") {
      completeTodo(currentTodoId);
    } else {
      return null;
    }
    setActionConfig(actionConfigInit);
  };

  const onAddTodo = (data) => {
    const prepData = { id: Date.now(), todo: data.todo, isComplete: false };
    setTodos((prevTodos) => [...prevTodos, prepData]);
    reset();
  };

  const handleEditTodo = (id) => {
    setCurrentTodoId(id);
    setActionConfig({ isModalOpen: false, msg: "", for: "update" });
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
      setActionConfig(actionConfigInit);
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

  const completeTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo,
      ),
    );
    setCurrentTodoId(null);
    reset();
  };

  useEffect(() => {
    if (currentTodoId !== null) {
      clearErrors();
    }
  }, [currentTodoId, clearErrors]);

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-xl font-bold capitalize">todo list</h1>
      </div>
      {actionConfig.for !== "update" ? (
        <div className="max-w-5xl mx-auto px-4 mb-8">
          <Card>
            <form onSubmit={handleSubmit(onAddTodo)} className="flex flex-col">
              <TextArea {...register("todo")} />
              {errors.todo && <InputError message={errors.todo?.message} />}
              <Button color="primary" extraClass="self-end mt-1">
                Submit
              </Button>
            </form>
          </Card>
        </div>
      ) : null}

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
                      onClick={() => {
                        setActionConfig({
                          isModalOpen: true,
                          title: "Confirm Action",
                          msg: "Are you sure you want to delete this todo?",
                          for: "delete",
                        });
                        setCurrentTodoId(todo.id);
                      }}
                    />
                    <Eye
                      size={24}
                      className="cursor-pointer hover:text-gray-500"
                      onClick={() => {
                        setActionConfig({
                          isModalOpen: true,
                          title: "Todo",
                          msg: todo.todo,
                          for: "view",
                        });
                        setCurrentTodoId(todo.id);
                      }}
                    />
                    <CheckSquare
                      size={24}
                      className={`cursor-pointer ${
                        todo.isComplete
                          ? "text-green-500"
                          : "hover:text-green-500"
                      }`}
                      onClick={() => {
                        setActionConfig({
                          isModalOpen: true,
                          title: "Confirm Action",
                          msg: "Are you sure you want to mark this todo as complete?",
                          for: "complete",
                        });
                        setCurrentTodoId(todo.id);
                      }}
                    />
                  </div>
                  {todo.id === currentTodoId &&
                  actionConfig.isModalOpen === false ? (
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
                    <p
                      className={`break-all ... ${
                        todo.isComplete
                          ? "line-through italic text-gray-500"
                          : "font-semibold"
                      }`}
                    >
                      {todo.todo}
                    </p>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      )}
      {actionConfig.isModalOpen && (
        <Modal
          title={actionConfig.title}
          message={actionConfig.msg}
          useFor={actionConfig.for}
          onConfirm={handleActionConfirmation}
          onCancel={() => {
            setActionConfig(actionConfigInit);
            setCurrentTodoId(null);
          }}
        />
      )}
    </>
  );
};

export default Todos;
