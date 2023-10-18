import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';
import { ConfigProvider } from 'antd';
import { theme } from '../../theme/override';

const meta: Meta<typeof Footer> = {
  component: Footer,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ConfigProvider theme={theme}>
        <Story />
      </ConfigProvider>
    ),
  ],
  argTypes: {
    centered: {
      control: 'boolean',
    },
  },
};

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => <Footer />,
};

export const Centered: Story = {
  args: {
    centered: true,
  },
};

export default meta;
