import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import { Header } from './Header';
import { theme } from '../../theme/override';

const meta: Meta<typeof Header> = {
  component: Header,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ConfigProvider theme={theme}>
        <Story />
      </ConfigProvider>
    ),
  ],
};

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => <Header />,
};

export default meta;
