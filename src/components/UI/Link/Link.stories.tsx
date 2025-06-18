import type { Meta, StoryObj } from "@storybook/react";

import { LinkItem as Link } from "./";

const meta = {
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <span>Default</span>,
    href: "/test",
  },
};
