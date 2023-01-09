import React from "react";

const Form = ({ Title, children }) => {
  return (
    <form className="w-11/12 max-w-[680px] bg-[#1A1D27] h-fit py-5 px-8 absolute top-5 left-1/2 -translate-x-1/2 grid grid-cols-2 gap-4 mx-auto text-white rounded-[10px]">
      <div className="col-span-2 text-white flex items-center justify-between pb-4">
        <p>{Title}</p>
        <button>close</button>
      </div>
      {children}
    </form>
  );
};

export default Form;
