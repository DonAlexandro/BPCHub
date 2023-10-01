import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Pagination } from './Pagination';
import { ConfigProvider } from 'antd';
import { theme } from '../../theme/override';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ConfigProvider theme={theme}>
        <Story />
      </ConfigProvider>
    ),
  ],
  argTypes: {
    pagination: {
      control: { type: 'object' },
    },
    totalPages: {
      control: { type: 'number' },
    },
  },
};

type Story = StoryObj<typeof Pagination>;

const PaginationWithHooks = ({ page = 1 }: { page?: number }) => {
  const [pagination, setPagination] = useState({ page, pageSize: 6 });

  return <Pagination pagination={pagination} setPagination={setPagination} totalPages={3} />;
};

export const Default: Story = {
  render: () => <PaginationWithHooks />,
};

export default meta;
