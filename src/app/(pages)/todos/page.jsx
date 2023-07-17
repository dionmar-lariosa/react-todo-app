"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  PlusCircle,
  Edit,
  Trash2,
  CheckSquare,
  Maximize2,
} from "react-feather";
import Input from "@/components/Input";
import Card from "@/components/Card";

const Todos = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      todo: "",
    },
  });

  const [inputs, setInputs] = useState([""]);
  const [focusedInputIndex, setFocusedInputIndex] = useState(null);

  const handleEditClick = (index) => {
    setFocusedInputIndex(index);
  };

  // Function to handle adding a new input
  const handleAddInput = () => {
    const newInputs = [...inputs, ""];
    setInputs(newInputs);
    setFocusedInputIndex(newInputs.length - 1);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  // Function to handle updating an input value
  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };
  return (
    <>
      <div className="flex items-center mb-4">
        <h1 className="text-xl font-bold mr-2">Todo List</h1>
        <button className="text-blue-500" onClick={handleAddInput}>
          <PlusCircle size={24} />
        </button>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {inputs.map((input, index) => (
          <Card key={index}>
            <div className="p-4 flex flex-col">
              <div className="flex items-center space-x-4 mb-2">
                <Edit
                  size={24}
                  className="cursor-pointer hover:text-yellow-500"
                  onClick={() => handleEditClick(index)}
                />
                <Trash2
                  size={24}
                  className="cursor-pointer hover:text-red-500"
                  onClick={() => console.log("Trash2")}
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  isFocused={index === focusedInputIndex}
                  {...register("todo")}
                />
              </form>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Todos;
