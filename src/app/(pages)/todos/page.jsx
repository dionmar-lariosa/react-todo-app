"use client";

import { useForm } from "react-hook-form";
import {
  PlusCircle,
  Edit,
  Trash2,
  CheckSquare,
  Maximize2,
} from "react-feather";
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

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex items-center mb-4">
        <h1 className="text-xl font-bold mr-2">Todo List</h1>
      </div>
      <div className="my-4 max-w-5xl mx-auto px-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            className="w-full px-3 py-2 border border-gray-300  focus:outline-none focus:border-blue-500 rounded-md"
            name=""
            id=""
            cols="1"
            rows="1"
          ></textarea>
          <button
            type="submit"
            class="w-full px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        <Card>
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              tempora.
            </p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Todos;
