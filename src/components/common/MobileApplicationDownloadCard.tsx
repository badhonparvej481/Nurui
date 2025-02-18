import { FC } from "react";

interface IProps {
  icon: React.ReactNode;
  title: string;
  storeName: string;
}

const MobileApplicationDownloadCard: FC<IProps> = ({
  icon,
  title,
  storeName,
}) => {
  return (
    <div className="flex items-center gap-3 bg-[var(--glass-color)] hover:bg-[var(--glass-color-2)] rounded-lg py-3 px-5">
      {icon}
      <div>
        <p className="uppercase text-xs">{title}</p>
        <h5 className="font-semibold capitalize">{storeName}</h5>
      </div>
    </div>
  );
};

export default MobileApplicationDownloadCard;
