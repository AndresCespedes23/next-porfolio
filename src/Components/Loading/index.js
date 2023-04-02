/* eslint-disable react/jsx-filename-extension */
import styles from "../../styles/spinner.module.css";
import { ProgressBar } from "react-loader-spinner";

export default function Spinner() {
  return (
    <section className={styles.modalContainer}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="#D4AF37"
            barColor="#FFF"
          />
        </div>
      </div>
    </section>
  );
}
