import type { Meta, StoryObj } from "@storybook/react";
import { globalColors } from "./globalStyles";

const meta = {} satisfies Meta;

export default meta;

type Story = StoryObj;

const colorKeys = Object.keys(globalColors) as (keyof typeof globalColors)[];

export const Default: Story = {
  render: function Render() {
    return (
      <div style={styles.grid}>
        {colorKeys.map((key) => {
          const color = globalColors[key] || "#FFFFFF";
          return (
            <div key={key} style={styles.colorWrapper}>
              <p>{`globalColors.${key}:`}</p>
              <div style={{ ...styles.color, backgroundColor: color }}>
                <span
                  style={
                    key !== "white"
                      ? styles.colorLabel
                      : styles.colorLabelInverse
                  }
                >
                  {color}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  },
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    fontFamily: "Helvetica, Arial, sans-serif",
  },
  colorWrapper: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "50%",
    margin: "0.25rem 0",
  },
  colorLabel: {
    color: globalColors.white,
  },
  colorLabelInverse: {
    color: globalColors.black,
  },
  color: {
    display: "flex",
    padding: "1rem",
    color: globalColors.white,
    marginLeft: "0.5rem",
    minWidth: "5rem",
    justifyContent: "center",
    alignItems: "center",
  },
};
