export type FilterType = "all" | "active" | "completed";
export interface IContext {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}
