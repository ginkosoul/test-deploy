import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import css from "./BasicModalWindow.module.css";

import CloseSvg from "../CloseSvg/CloseSvg";

const BasicModalWindow = ({ children, isOpenModalToggle }) => {
  useEffect(() => {
    const closeESC = (e) => {
      if (e.code === "Escape") {
        isOpenModalToggle();
      }
    };
    document.addEventListener("keydown", closeESC);
    return () => {
      document.removeEventListener("keydown", closeESC);
    };
  }, [isOpenModalToggle]);

  const handleClickBackground = (e) => {
    if (e.target.className.includes("basic_modal_window")) {
      isOpenModalToggle();
    }
  };

  const modal = (
    <div className={css.basic_modal_window} onClick={handleClickBackground}>
      <div className={css.modal}>
        <CloseSvg className={css.closeSvg} />
        {children}
      </div>
    </div>
  );

  return createPortal(modal, document.querySelector("#portal_modal"));
};

export default BasicModalWindow;

BasicModalWindow.propTypes = {
  children: PropTypes.any,
  isOpenModaltoggle: PropTypes.func,
};
