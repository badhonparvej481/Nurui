"use client";
import StatesCountup from "@/components/common/StatesCountup";
import { useInView } from "react-intersection-observer";

const StatesCount = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="container ">
      <div className="space-y-10 lg:space-y-12  xl:space-y-16 bg-white/5 p-6 md:p-8 xl:p-10 rounded-xl border border-[var(--glass-color-3)]">
        <h1 className="px-4 text-2xl md:text-4xl xl:text-6xl font-semibold text-center">
          bytenexia.com By The Numbers
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center xl:divide-x xl:divide-[var(--border-color)]">
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
    count: 120,
    description: "Components available in the library",
  },
  {
    count: 2500,
    description: "Developers using Bytenexia",
  },
  {
    count: 75,
    description: "Open-source contributors",
  },
  {
    count: 3200,
    description: "GitHub stars",
  },
];