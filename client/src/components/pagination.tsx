'use client';
import { PaginationDTO } from '@/shared/types';
import { Button, Space, Grid } from 'antd';
import React, { Dispatch, FC, SetStateAction } from 'react';

const { useBreakpoint } = Grid;

interface PaginationProps {
  configuration: {
    pagination: PaginationDTO;
    setPagination: Dispatch<SetStateAction<PaginationDTO>>;
    totalPages?: number;
  };
}

export const Pagination: FC<PaginationProps> = ({ configuration: { setPagination, pagination, totalPages } }) => {
  const screens = useBreakpoint();

  const handleNextPageClick = () => {
    setPagination((prev) => ({ ...prev, page: prev.page + 1 }));
  };

  const handlePreviousPageClick = () => {
    setPagination((prev) => ({ ...prev, page: prev.page - 1 }));
  };

  return (
    <Space
      direction={screens.md ? 'horizontal' : 'vertical'}
      style={{ padding: screens.lg ? 0 : '0 24px', width: '100%' }}
      size={16}
    >
      <Button size="large" block disabled={pagination.page === 1} onClick={handlePreviousPageClick}>
        Попередня сторінка
      </Button>
      <Button size="large" block disabled={pagination.page === totalPages} onClick={handleNextPageClick}>
        Наступна сторінка
      </Button>
    </Space>
  );
};
