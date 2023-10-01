import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import { Link } from './Link';
import { theme } from '../../theme/override';
import { Title } from '.';

const meta: Meta<typeof Link> = {
  title: 'Typography/Link',
  parameters: {
    docs: {
      description: {
        component: 'The Link component based on Next Link with custom properties for styling.',
      },
    },
  },
  component: Link,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ConfigProvider theme={theme}>
        <Story />
      </ConfigProvider>
    ),
  ],
};

type Story = StoryObj<typeof Link>;

/**
 * This link is just for wrapping other components.
 * It will change the color of the text inside on hover
 */
export const Unstyled: Story = {
  args: {
    children: <Title level={2}>Follow the link</Title>,
    href: 'https://google.com',
  },
};

export const Heading: Story = {
  args: {
    children: 'She is only happy when she is dancing',
    href: 'https://google.com',
    $heading: true,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Do not pick up the phone',
    href: 'https://google.com',
    $secondary: true,
  },
};

export default meta;
