"use client";
import StatesCountup from "@/components/common/StatesCountup";
import { useInView } from "react-intersection-observer";

const StatesCount = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="container ">
      <div className="space-y-10  md:space-y-16 bg-white/5 p-6 md:p-10 rounded-xl border border-[var(--glass-color-3)]">
        <h1 className="text-2xl px-4 md:text-6xl font-semibold text-center">
          bytenexia.com By The Numbers
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center md:divide-x md:divide-[var(--border-color)]">
          {metricsData?.map((data) => (
            <StatesCountup
              key={data?.description}
              count={data?.count}
              title={data?.description}
              isView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatesCount;

const metricsData = [
  {
    count: 26,
    description: "Total projects created.",
  },
  {
    count: 36,
    description: "Total teams under all projects.",
  },
  {
    count: 64,
    description: "Total assigned tasks.",
  },
  {
    count: 78,
    description: "Customers use bableforge.com",
  },
];
