import { useState, useEffect, useRef } from "react";
import { loadFont } from "../utils/fontLoader";
import { FONT_DESCRIPTIONS } from "../data/google-fonts";
import styles from "../styles/FontList.module.css";

export function FontList({ title, fonts, selected, onSelect, color }) {
  const listRef = useRef(null);

  useEffect(() => {
    fonts.forEach(loadFont);
  }, [fonts]);

  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-font="${selected}"]`);
    el?.scrollIntoView({ block: "nearest", behavior: "auto" });
  }, [selected]);

  return (
    <div
      style={{
        border: `1px solid ${color}22`,
      }}
      className={styles.container}
    >
      {/* Header */}
      <div
        style={{
          borderBottom: `1px solid ${color}22`,
        }}
        className={styles.header}
      >
        <div
          style={{
            background: color,
            boxShadow: `0 0 10px ${color}`,
          }}
          className={styles.indicator}
        />
        <span className={styles.title}>{title}</span>
        <span
          style={{
            color: color,
            background: `${color}15`,
          }}
          className={styles.selectedBadge}
        >
          {selected}
        </span>
      </div>

      {/* Scrollable list */}
      <div
        ref={listRef}
        style={{
          scrollbarColor: `${color}44 transparent`,
        }}
        className={styles.listContainer}
      >
        {fonts.map((font) => {
          const isActive = font === selected;
          return (
            <div
              key={font}
              data-font={font}
              onClick={() => onSelect(font)}
              style={{
                background: isActive ? `${color}18` : "transparent",
                border: isActive ? `1px solid ${color}44` : "1px solid transparent",
              }}
              className={styles.fontItem}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.background = "#ffffff08";
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.background = "transparent";
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: `"${font}", serif`,
                    fontSize: title === "Heading Font" ? "22px" : "16px",
                    color: isActive ? "#fff" : "#ccc",
                    fontWeight: title === "Heading Font" ? 700 : 400,
                  }}
                  className={styles.fontName}
                >
                  {font}
                </div>
                {FONT_DESCRIPTIONS[font] && (
                  <div className={styles.fontDescription}>
                    {FONT_DESCRIPTIONS[font]}
                  </div>
                )}
              </div>
              {isActive && (
                <div
                  style={{
                    background: color,
                    boxShadow: `0 0 8px ${color}`,
                  }}
                  className={styles.activeIndicator}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
