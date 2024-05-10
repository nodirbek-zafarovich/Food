
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed  flex items-center justify-center   ">
      <div className="relative w-auto mx-auto my-6">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          <div className="relative flex items-center justify-between p-5 border-b border-solid rounded-t-lg border-gray-300">
            <h3 className="text-lg font-semibold">Modal Header</h3>
            <button
              className="p-1 bg-transparent border-0 text-black  text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              x
            </button>
          </div>
          <div className="relative p-6 flex-auto">{children}</div>
          <div className="flex items-center justify-end p-6 border-t border-solid rounded-b-lg border-gray-300">
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4"
              onClick={onClose}
            >
              Close
            </button>
            <button
              className="bg-green-500 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                console.log("Save Changes clicked");
                onClose();
              }}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
      <div
        className="fixed inset-0 z-40 bg-black opacity-25"
        onClick={onClose}
      ></div>
    </div>
  );
};

export default Modal;
