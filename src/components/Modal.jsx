import React from "react";
import Button from "@/components/Button";

const Modal = ({ title, message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{message}</p>
        <div className="mt-4 flex justify-end space-x-2">
          <Button color="primary" onClick={onConfirm}>
            Yes
          </Button>
          <Button color="secondary" onClick={onCancel}>
            No
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
