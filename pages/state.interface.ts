import type { StateInterface } from "@/store/main/types/StateType";

export interface State {
  perPage: number;
  category: string;
  searchText: string;
  isLoading: boolean;
}

export interface FetchParams {
  componentUnicId?: string;
  id: number;
  searchText: string;
  pageNumber: number;
  perPage: number;
  selectedlan: StateInterface["lang"];
  searchDate?: number[];
  taxonomies?: {
    blog_category: number[];
    media_categories?: number[];
  };
  exclude_pages?: number[]; // pinned post Id do exclude from fetch
}
