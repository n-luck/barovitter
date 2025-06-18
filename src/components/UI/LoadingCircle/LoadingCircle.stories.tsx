import type { Meta, StoryObj } from '@storybook/react';

import { LoadingCircle } from './LoadingCircle';

const meta = {
  component: LoadingCircle,
} satisfies Meta<typeof LoadingCircle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};