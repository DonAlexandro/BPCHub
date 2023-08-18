export interface Connect {
  connect: number | number[];
}

export type Nullable<T> = T | null;

export interface SingleResponse<T> {
  id: number;
  attributes: T;
}
