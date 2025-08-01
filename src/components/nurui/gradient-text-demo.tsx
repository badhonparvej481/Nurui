import React from "react";
import GradientText from "./gradient-text";

const gradientTextDemo = () => {
  return (
    <div className="p-10">
      <GradientText
        colors={["#3ca2fa", "#80eeb4", "#3ca2fa", "#80eeb4", "#3ca2fa"]}
        animationSpeed={3}
        showBorder={false}
        className="text-6xl font-black"
      >
        Welcome to Nur/ui
      </GradientText>
    </div>
  );
};

export default gradientTextDemo;
