import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

const meta = {
  component: Avatar,
  args: {
    userId: "test-user",
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    userId: "user1",
    isLarge: false,
    hasBorder: false,
  },
};
