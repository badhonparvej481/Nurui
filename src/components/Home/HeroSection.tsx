import Image from "next/image";
import GradientBorderAnimatedButton from "../common/GradientBorderAnimatedButton";
import ShadowAnimationButton from "../common/ShadowAnimationButton";
import { MdMessage } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center gap-y-8 min-h-[calc(100vh-6rem)] py-20 text-center text-[var(--white-color)]">
      <GradientBorderAnimatedButton />
      <h1 className="text-7xl font-bold max-w-[62rem] uppercase leading-[1.1]">
        All of your messages In one{" "}
        <span className="text-[var(--primary-color)]">inbox</span>
      </h1>
      <p className="text-xl max-w-2xl text-[var(--opacity-text-color)]">
        Built on the CSS grid foundation, the Advanced Columns plugin is the
        most powerful and flexible layout builder block for WordPress.
      </p>
      <div className="bg-[var(--glass-color)] px-6 py-3 rounded-2xl flex items-center gap-7">
        <p className="flex items-center gap-2 text-[var(--opacity-text-color)] ">
          <MdMessage className="text-[var(--primary-color)]" />
          All message
        </p>
        <p className="flex items-center gap-2 bg-[var(--glass-color)] text-[var(--opacity-text-color)] ">
          <MdMessage className="text-[var(--primary-color)]" />
          All status
        </p>
        <p className="flex items-center gap-2 bg-[var(--glass-color)] text-[var(--opacity-text-color)] ">
          <MdMessage className="text-[var(--primary-color)]" />
          All call
        </p>
        <p className="flex items-center gap-2 bg-[var(--glass-color)] text-[var(--opacity-text-color)]">
          <MdMessage className="text-[var(--primary-color)]" />
          All email
        </p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <ShadowAnimationButton />
        <p className="flex items-center gap-1 font-bold text-[var(--primary-color)]">
          Hurry!! $39 OFF{" "}
          <span className="text-[var(--white-color)]">for 10 users</span>
        </p>
        <div className="flex items-center gap-2 pt-6">
          <div className="flex -space-x-4 rtl:space-x-reverse">
            {[1, 2, 3, 4, 5].map((d, i) => (
              <Image
                key={i}
                className="w-12 h-12 rounded-full"
                src="https://i.ibb.co.com/fqm4vHw/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg"
                alt=""
                height={0}
                width={0}
                unoptimized
              />
            ))}
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 ms-2 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-6 h-6 ms-2 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-6 h-6 ms-2 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-6 h-6 ms-2 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-6 h-6 ms-2 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <p className="ml-3 text-[var(--opacity-text-color)] font-semibold">
              Join <span className="text-[var(--white-color)]">2,183</span>{" "}
              Users worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
