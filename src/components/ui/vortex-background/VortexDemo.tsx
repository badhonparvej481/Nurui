import React from "react";
import { Vortex } from "./Vortex";
import { cn } from "@/utils/cn";

export function VortexDemo({ className }: { className: string }) {
  return (
    <div
      className={cn(
        "w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden",
        className,
      )}
    >
      <Vortex
        backgroundColor="#00000000"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className="*:text-[var(--black-color-2)] text-center pb-2.5">
          <h3 className="text-3xl font-bold">The hell is this?</h3>
          <p className="max-w-96 mx-auto">
            This is chemical burn. It&apos;ll hurt more than you&apos;ve ever
            been burned and you&apos;ll have a scar.
          </p>
        </div>
        <button className="bg-[var(--primary-color-3)] text-[var(--primary-color)] font-semibold hover:bg-[var(--primary-color-2)] px-2.5 py-1 rounded">
          Get Start
        </button>
      </Vortex>
    </div>
  );
}
