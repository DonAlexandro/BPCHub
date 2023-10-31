import type { Meta, StoryObj } from '@storybook/react';
import { ResultError } from './Error';

const meta: Meta<typeof ResultError> = {
  component: ResultError,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof ResultError>;

export const Default: Story = {
  args: {
    title: 'Сталася помилка під час завантаження статтей',
  },
};

export default meta;
