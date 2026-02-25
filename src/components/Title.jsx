import styles from "../styles/App.module.css";

export function Title() {
  return (
    <div className={styles.titleSection}>
      <div className={styles.titleHeader}>
        <span className={styles.toolLabel}>◈ TOOL</span>
        <div className={styles.divider} />
      </div>
      <h1 className={styles.title}>Font Pairing Picker</h1>
      <p className={styles.subtitle}>Pick one heading + one body font · preview live</p>
    </div>
  );
}
