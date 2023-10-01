import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import { Navbar } from './Navbar';
import { theme } from '../../theme/override';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ConfigProvider theme={theme}>
        <Story />
      </ConfigProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: () => <Navbar />,
};

export default meta;
