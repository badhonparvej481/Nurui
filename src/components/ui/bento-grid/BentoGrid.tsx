import React from "react";
import { BentoCard, BentoGrid } from "./Bento";
import { LucideProps } from "lucide-react";

interface IProps {
  features: {
    Icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    name: string;
    description: string;
    href: string;
    cta: string;
    className: string;
    background: React.JSX.Element;
  }[];
}

const BentoDemo: React.FC<IProps> = ({ features }) => {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
};

export default BentoDemo;
