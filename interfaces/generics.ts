export interface Pagination {
  count: number;
  pages: number;
  prev: number;
  next: number;
}

export interface MinMax {
  minimum: string;
  maximum: string;
}

export interface NodeChildInterface {
  children: React.ReactNode;
}
