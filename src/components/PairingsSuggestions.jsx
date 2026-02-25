import { SAMPLE_PAIRS } from "../data/google-fonts";
import styles from "../styles/App.module.css";

export function PairingsSuggestions({ headingFont, bodyFont, onApplyPair }) {
  return (
    <div className={styles.pairingsSection}>
      <div className={styles.pairingsLabel}>▸ SUGGESTED PAIRINGS</div>
      <div className={styles.pairingsContainer}>
        {SAMPLE_PAIRS.map((pair) => {
          const isActive = pair.heading === headingFont && pair.body === bodyFont;
          return (
            <button
              key={pair.heading}
              onClick={() => onApplyPair(pair)}
              className={`${styles.pairingButton} ${isActive ? styles.active : ""}`}
            >
              {pair.heading} <span className={styles.pairingButtonSeparator}>+</span> {pair.body}
            </button>
          );
        })}
      </div>
    </div>
  );
}
