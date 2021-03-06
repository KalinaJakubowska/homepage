import { createSlice } from "@reduxjs/toolkit";

const githubSlice = createSlice({
  name: "github",
  initialState: {
    loading: true,
    githubProjects: [],
    error: false,
  },
  reducers: {
    fetchGithubProjects: (state) => {
      state.loading = true;
      state.githubProjects = [];
    },
    fetchGithubProjectsSuccess: (state, { payload: githubProjects }) => {
      state.githubProjects = githubProjects;
      state.loading = false;
    },
    fetchGithubProjectsError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchGithubProjects,
  fetchGithubProjectsSuccess,
  fetchGithubProjectsError,
} = githubSlice.actions;
export const selectGithubProjects = (state) => state.github.githubProjects;
export const selectLoading = (state) => state.github.loading;
export const selectError = (state) => state.github.error;

export default githubSlice.reducer;
