"use client";
import AuthWithSocialMedia from "@/components/common/AuthWithSocialMedia";
import Bytenexia from "@/components/common/Bytenexia";
import { FcGoogle } from "react-icons/fc";
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import Link from "next/link";
import OutlineButton from "@/components/common/OutlineButton";

const SingInSingUpComponent = () => {
  const [reverse, setReverse] = React.useState(false);
  return (
    <div className="min-h-screen flex items-center">
      <div
        className={`bg-gradient-to-t from-[var(--glass-color)] via-[var(--glass-color-2)] to-[var(--primary-color-2)] max-w-7xl mx-auto w-full flex ${
          reverse ? "flex-row-reverse" : "flex-row"
        } clip-path-auth-layout`}
      >
        <div
          className={`w-1/2 bg-[var(--primary-color)] rounded-xl ${
            reverse ? "mb-7 mt-12 ml-24 mr-7" : "mb-12 mt-7 ml-7"
          } flex flex-col items-center justify-center text-center space-y-5 text-[var(--black-color)]`}
        >
          <h3 className="text-4xl font-bold">Hello, Friend!</h3>
          <p className="text-lg">
            Register with your personal details to use all <br /> of site
            features
          </p>
          <div onClick={() => setReverse(!reverse)}>
            <OutlineButton title="Sing up" />
          </div>
        </div>
        <div className="flex flex-col items-center w-1/2 p-14 pl-20">
          <Bytenexia />
          <h1 className="text-3xl font-semibold mt-5">Welcome back</h1>
          <p className="text-lg mt-3">Sign in to continue.</p>
          <div className="flex items-center gap-4 mt-4">
            {data?.authOptions?.map((d, idx) => {
              return (
                <AuthWithSocialMedia
                  key={d?.label + idx}
                  title={d?.label}
                  icon={d?.icon}
                />
              );
            })}
          </div>
          <p className="text-lg mt-5">Or</p>
          <form className="flex flex-col w-full mt-6">
            <div className="flex flex-col mb-1">
              <label htmlFor="Email" className="capitalize mb-1">
                Your Email:
              </label>
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded p-2 mb-4"
              />
            </div>
            <div className="flex flex-col mb-1">
              <label htmlFor="Password" className="capitalize mb-1">
                Your Password:
              </label>
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 rounded p-2 mb-4"
              />
            </div>
            <Link href={"/"} className="text-right mb-4 text-blue-500">
              Forgot Password?
            </Link>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded p-2"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingInSingUpComponent;

const data = {
  section: "auth",
  heading: "Welcome back",
  subheading: "Sign in to continue",
  authOptions: [
    {
      provider: "google",
      label: "Login with Google",
      icon: <FcGoogle />,
      action: "google",
    },
    {
      provider: "Facebook",
      label: "Login with Facebook",
      icon: (
        <FaFacebook className="text-[#0866FF] bg-[var(--white-color)] rounded-full" />
      ),
      action: "facebook",
    },
  ],
};
