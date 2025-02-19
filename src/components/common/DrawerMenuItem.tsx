"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
interface IProps {
  icon: React.ReactNode;
  title: string;
  submenu?: { name: string; href: string }[];
}

const DrawerMenuItem: React.FC<IProps> = ({ icon, title, submenu }) => {
  const [subMenu, setSubMenu] = useState<boolean>(false);
  return (
    <>
      <div className="text-[var(--black-color-3)] hover:bg-[var(--primary-color-2)] hover:text-[var(--primary-color)] rounded py-2 px-2.5">
        {submenu ? (
          <div
            onClick={() => setSubMenu(!subMenu)}
            className="flex items-center justify-between w-full cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <span className="text-lg text-[var(--primary-color)] bg-[var(--primary-color-3)] p-1.5 rounded">
                {icon}
              </span>
              <p className="text-lg font-semibold">{title}</p>
            </div>
            {subMenu ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        ) : (
          <div className="flex items-center gap-3.5 cursor-pointer">
            <p className="text-lg text-[var(--primary-color)] bg-[var(--primary-color-3)] p-1.5 rounded">
              {icon}
            </p>
            <span className="text-lg font-semibold">{title}</span>
          </div>
        )}
      </div>
      {subMenu && submenu && (
        <div className="flex flex-col gap-y-3 ml-4 pl-3 py-0.5 border-l border-[var(--primary-color)] min-h-9">
          {submenu.map((sub, index) => (
            <Link
              key={sub.name + index}
              href={sub.href}
              className="text-[var(--black-color-3)] hover:text-[var(--primary-color)] text-lg"
            >
              {sub.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default DrawerMenuItem;
