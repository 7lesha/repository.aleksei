import { setRepos } from "../reducers/reposReducer";

export const getRepos = (searchQuery = "stars:%3E1") => {
  return async (dispatch) => {
    const response = await fetch("https://api.github.com/search/repositories?q=" + searchQuery + "&sort=stars");
    dispatch(setRepos(response.json()))
  }
}