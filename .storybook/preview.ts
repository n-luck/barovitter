import type { Preview } from "@storybook/react";
import { globalColors } from "../src/theme/globalStyles";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "Default",
      values: [
        { name: "Default", value: globalColors.primary50 },
        { name: "Light", value: globalColors.primary900 },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
