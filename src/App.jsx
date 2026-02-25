import { useState, useEffect } from "react";
import { HEADING_FONTS, BODY_FONTS } from "./data/google-fonts";
import { loadFont } from "./utils/fontLoader";
import {
  FontList,
  PreviewSection,
  PairingsSuggestions,
  Title,
  Footer,
} from "./components";
import styles from "./styles/App.module.css";

export default function FontPairingPicker() {
  const [headingFont, setHeadingFont] = useState("Playfair Display");
  const [bodyFont, setBodyFont] = useState("Source Sans 3");
  const [sampleText, setSampleText] = useState("The quick brown fox jumps over the lazy dog.");
  const [headingText, setHeadingText] = useState("Design Speaks Before Words Do");

  useEffect(() => {
    loadFont(headingFont);
    loadFont(bodyFont);
  }, [headingFont, bodyFont]);

  const applyPair = (pair) => {
    setHeadingFont(pair.heading);
    setBodyFont(pair.body);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Title />

        <PairingsSuggestions
          headingFont={headingFont}
          bodyFont={bodyFont}
          onApplyPair={applyPair}
        />

        {/* Main layout: two font lists */}
        <div className={styles.listsContainer}>
          <FontList
            title="Heading Font"
            fonts={HEADING_FONTS}
            selected={headingFont}
            onSelect={setHeadingFont}
            color="#a78bfa"
          />
          <FontList
            title="Body Font"
            fonts={BODY_FONTS}
            selected={bodyFont}
            onSelect={setBodyFont}
            color="#34d399"
          />
        </div>

        <PreviewSection
          headingFont={headingFont}
          bodyFont={bodyFont}
          headingText={headingText}
          setHeadingText={setHeadingText}
          sampleText={sampleText}
          setSampleText={setSampleText}
        />

        <Footer />
      </div>
    </div>
  );
}