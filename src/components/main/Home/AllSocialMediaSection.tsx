import Gravity, { MatterBody } from "@/components/common/Gravity";
import { FaFacebookMessenger } from "react-icons/fa";

export default function Preview() {
  const icons = [{ icon: <FaFacebookMessenger />, size: 24 }];

  return (
    <div className="w-dvw h-dvh flex flex-col items-center relative">
      <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
        {icons.map((IconData, index) => {
          const Icon = IconData.icon;
          const randomX = Math.random() * 60 + 20; // Random x between 20-80%
          const randomY = Math.random() * 20 + 5; // Random y between 5-25%
          const bodyType = Math.random() > 0.7 ? "rectangle" : "circle";

          return (
            <MatterBody
              key={index}
              matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
              bodyType={bodyType}
              x={`${randomX}%`}
              y={`${randomY}%`}
            >
              <div
                className={`p-4 ${
                  bodyType === "circle" ? "rounded-full" : "rounded-md"
                } border border-border shadow-md text-foreground dark:text-muted`}
              >
                {Icon}
              </div>
            </MatterBody>
          );
        })}
      </Gravity>
    </div>
  );
}
