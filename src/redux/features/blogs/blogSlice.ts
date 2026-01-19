import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { blogs, BlogPost } from "@/types/blogs";

interface BlogState {
  items: BlogPost[];
  visibleCount: number;
  searchQuery: string;
}

const initialState: BlogState = {
  items: blogs,
  visibleCount: 15,
  searchQuery: "",
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
      state.visibleCount = 15;
    },
    loadMore(state, action: PayloadAction<number | undefined>) {
      const increment = action.payload ?? 15;
      state.visibleCount += increment;
    },
  },
});

export const { setSearchQuery, loadMore } = blogSlice.actions;
export default blogSlice.reducer;