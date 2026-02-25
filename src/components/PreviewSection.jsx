import { useState } from "react";
import styles from "../styles/App.module.css";

export function PreviewSection({ headingFont, bodyFont, headingText, setHeadingText, sampleText, setSampleText }) {
  const [copied, setCopied] = useState(false);

  const copyPairing = () => {
    const text = `Heading: ${headingFont}\nBody: ${bodyFont}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.previewSection}>
      {/* Preview toolbar */}
      <div className={styles.previewToolbar}>
        <span className={styles.previewLabel}>▸ LIVE PREVIEW</span>
        <div className={styles.inputsContainer}>
          <input
            value={headingText}
            onChange={(e) => setHeadingText(e.target.value)}
            placeholder="Heading text…"
            className={`${styles.input} ${styles.headingInput}`}
          />
          <input
            value={sampleText}
            onChange={(e) => setSampleText(e.target.value)}
            placeholder="Body text…"
            className={`${styles.input} ${styles.bodyInput}`}
          />
        </div>
        <button
          onClick={copyPairing}
          className={`${styles.copyButton} ${copied ? styles.copied : ""}`}
        >
          {copied ? "✓ Copied!" : "Copy pairing"}
        </button>
      </div>

      {/* Preview area – light background like a real document */}
      <div className={styles.previewArea}>
        <div className={styles.previewMeta}>
          <span className={styles.metaHeading}>H: {headingFont}</span>
          <span className={styles.metaBody}>B: {bodyFont}</span>
        </div>

        <h2
          style={{
            fontFamily: `"${headingFont}", serif`,
          }}
          className={styles.previewHeading}
        >
          {headingText || "Your heading here"}
        </h2>

        <p
          style={{
            fontFamily: `"${bodyFont}", serif`,
          }}
          className={styles.previewBodyMain}
        >
          {sampleText || "Your body text here"}
        </p>

        <p
          style={{
            fontFamily: `"${bodyFont}", serif`,
          }}
          className={styles.previewBodySecondary}
        >
          Typography is the craft of arranging type to make written language legible, readable, and appealing. A great pairing creates harmony between personality and purpose.
        </p>
      </div>
    </div>
  );
}
