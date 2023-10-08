export type Nullable<T> = T | null;

export interface PaginationDTO {
  page: number;
  pageSize: number;
}

export interface Pagination extends PaginationDTO {
  pageCount: number;
  total: number;
}

export interface APIResponse<D> {
  data: D;
  meta?: {
    pagination: Pagination;
  };
}

export interface PathParams<P> {
  params: P;
}
