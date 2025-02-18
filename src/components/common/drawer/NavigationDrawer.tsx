import React from "react";
import classes from "./drawer.module.scss";
import { changeAnchor } from "../../../utils/changeAnchor";

interface IProps {
  open: boolean;
  anchor: string;
  onClose: () => void;
}

export const NavigationDrawer: React.FC<IProps> = (props) => {
  const { open, anchor, onClose } = props;
  const {
    drawer,
    animate,
    hidden,
    overlay,
    overlayOpen,
    overlayHidden,
    header,
  } = classes;

  return (
    <>
      <div
        className={`${overlay} ${!open && overlayHidden} ${
          open && overlayOpen
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        tabIndex={-1}
        className={`${drawer} ${open && animate} ${
          !open && hidden
        } ${changeAnchor({ anchor: anchor, classes })}`}
      >
        <div className={header} />
      </div>
    </>
  );
};
