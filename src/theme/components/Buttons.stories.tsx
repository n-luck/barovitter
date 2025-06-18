import type { Meta, StoryObj } from "@storybook/react";

import {
  Button,
  ButtonSecondary,
  ButtonOutline,
  ButtonSecondaryOutline,
} from "./Buttons";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $disabled: false,
    $fullWidth: false,
    $large: false,
  },

  render: function Render(args) {
    return <Button {...args}>Button</Button>;
  },
};

export const Secondary: Story = {
  args: {
    $disabled: false,
    $fullWidth: false,
    $large: false,
  },

  render: function Render(args) {
    return <ButtonSecondary {...args}>Button</ButtonSecondary>;
  },
};

export const PrimaryOutline: Story = {
  args: {
    $disabled: false,
    $fullWidth: false,
    $large: false,
  },

  render: function Render(args) {
    return <ButtonOutline {...args}>Button</ButtonOutline>;
  },
};

export const SecondaryOutline: Story = {
  args: {
    $disabled: false,
    $fullWidth: false,
    $large: false,
  },

  render: function Render(args) {
    return <ButtonSecondaryOutline {...args}>Button</ButtonSecondaryOutline>;
  },
};
