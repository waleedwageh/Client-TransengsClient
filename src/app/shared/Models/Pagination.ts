import { PropertyRoot } from "./PropertyRoot";
export interface Pagination{
  pageIndex: number,
  pageSize: number,
  count: number,
  data:PropertyRoot[]
}