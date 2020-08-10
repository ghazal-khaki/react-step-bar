import React from "react";
import Step from "lib/components/Step";
import styles from "./Wrapper.module.css";

function Wrapper() {
  return (
    <div className={styles.wrapper}>
      <Step />
    </div>
  );
}

export default Wrapper;
