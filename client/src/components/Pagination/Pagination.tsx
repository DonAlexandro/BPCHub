'use client';
import { PaginationDTO } from '../../shared/types';
import { Grid } from 'antd';
import React, { Dispatch, FC, SetStateAction } from 'react';
import { Button } from '../Button/Button';
import Styled from './pagination.styled';

const { useBreakpoint } = Grid;

interface PaginationProps {
  /** Contains 2 properties: `page` - the current page and `pageSize` - the number of items to fetch. */
  pagination: PaginationDTO;

  /** A function for changing the state of the pagination. Will be triggered when one of 2 buttons pressed */
  setPagination: Dispatch<SetStateAction<PaginationDTO>>;

  /** Total pages count. Is being used to indicate wether it is the last page */
  totalPages?: number;
}

export const Pagination: FC<PaginationProps> = ({ setPagination, pagination, totalPages }) => {
  const screens = useBreakpoint();

  const handleNextPageClick = () => {
    setPagination((prev) => ({ ...prev, page: prev.page + 1 }));
  };

  const handlePreviousPageClick = () => {
    setPagination((prev) => ({ ...prev, page: prev.page - 1 }));
  };

  return (
    <Styled.Pagination direction={screens.md ? 'horizontal' : 'vertical'} size={16}>
      <Button block disabled={pagination.page === 1} onClick={handlePreviousPageClick}>
        Попередня сторінка
      </Button>
      <Button block disabled={pagination.page === totalPages} onClick={handleNextPageClick}>
        Наступна сторінка
      </Button>
    </Styled.Pagination>
  );
};
