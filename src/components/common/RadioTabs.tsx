import React from "react";

const RadioTabs = () => {
  return (
    <div className="flex space-x-2 select-none w-fit border-b border-[var(--border-color)]">
      <label className="radio flex flex-grow items-center justify-center  cursor-pointer">
        <input
          type="radio"
          name="radio"
          defaultValue="html"
          className="peer hidden"
          defaultChecked
        />
        <span className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2  transition duration-150 ease-in-out">
          HTML
        </span>
      </label>
      <label className="radio flex flex-grow items-center justify-center  cursor-pointer">
        <input
          type="radio"
          name="radio"
          defaultValue="react"
          className="peer hidden"
        />
        <span className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2  transition duration-150 ease-in-out">
          React
        </span>
      </label>
      <label className="radio flex flex-grow items-center justify-center  cursor-pointer">
        <input
          type="radio"
          name="radio"
          defaultValue="vue"
          className="peer hidden"
        />
        <span className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2  transition duration-150 ease-in-out">
          Vue
        </span>
      </label>
    </div>
  );
};

export default RadioTabs;
