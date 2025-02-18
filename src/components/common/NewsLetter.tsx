"use client";
import { useState } from "react";

const NewsLetter = () => {
  const [placeholder, setPlaceholder] = useState(
    newsLetter?.input_field.placeholder
  );

  return (
    <div className="max-w-3xl mx-auto -mt-36  bg-[var(--glass-color)] py-8 rounded-xl flex flex-col items-center justify-center text-center gap-3.5">
      <h6 className="text-3xl font-semibold">{newsLetter?.title}</h6>
      <p className="max-w-lg">{newsLetter?.description}</p>
      <div className="mx-auto w-full max-w-lg mt-2">
        <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-[var(--border-color)] p-[1.5px]">
          <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#3CA2FA_20deg,transparent_120deg)]" />
          <div className="relative z-20 flex w-full rounded-[0.60rem] bg-[var(--background-color)] p-2">
            <input
              onFocus={() =>
                setPlaceholder(newsLetter?.input_field.onFocus.value)
              }
              onBlur={() =>
                setPlaceholder(newsLetter?.input_field.onBlur.value)
              }
              type="text"
              className="mr-2 pl-3 inline-block h-full flex-1 rounded-lg bg-transparent px-2 py-3 placeholder:text-[var(--placeholder-color)] focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)]"
              placeholder={placeholder}
            />
            <span className="relative z-50 block rounded-lg border border-[var(--border-color)] bg-[var(--glass-color)] px-8 py-3 text-center text-sm transition duration-200 hover:bg-[var(--glass-color-2)]">
              {newsLetter?.subscribe_button.label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

const newsLetter = {
  title: "Subscribe to our newsletter",
  description:
    "Get the latest news and updates from us by subscribing to our newsletter today. We promise not to spam you.",
  subscribe_button: {
    label: "Subscribe",
    action: "subscribe",
  },
  input_field: {
    placeholder: "subscribe to our newsletter",
    onFocus: {
      action: "setPlaceholder",
      value: "We won't spam you!",
    },
    onBlur: {
      action: "setPlaceholder",
      value: "subscribe to our newsletter",
    },
  },
};
