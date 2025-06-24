"use state";
import React from "react";
import { LuLogIn } from "react-icons/lu";

const Authentication = ({ sideBar }: { sideBar: boolean }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => {}}
        className="w-full flex justify-center text-sm capitalize font-medium text-[var(--primary-color)] border border-[var(--primary-color-2)] hover:bg-[var(--primary-color-4)] rounded-md p-1"
      >
        {sideBar && <span>Login</span>}
        {sideBar || <LuLogIn />}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 right-0 mt-3.5 border border-[var(--primary-color-3)] rounded-lg min-w-40 bg-[var(--primary-color-5)] p-1"></div>
      )}

      {/* Backdrop to close dropdown when clicking outside */}
      {isOpen && (
        <div className="fixed inset-0 z-0" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default Authentication;
