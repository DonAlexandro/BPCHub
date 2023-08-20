export type Nullable<T> = T | null;

export interface PaginationDTO {
  page: number;
  pageSize: number;
}

interface Pagination extends PaginationDTO {
  pageCount: number;
  total: number;
}

export interface APIResponse<D> {
  data: D;
  meta: {
    pagination: Pagination;
  };
}
