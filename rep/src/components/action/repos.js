import { setRepos } from "../reducers/reposReducer";

export const getRepos = (searchQuery = "stars:%3E1", currentPage) => {
  if (searchQuery === "") {
    searchQuery = "stars:%3E1"
  }
  return async (dispatch) => {
    const response = await fetch("https://api.github.com/search/repositories?q=" + searchQuery + "&sort=stars&per_page=10&page=" + currentPage);
    const result = await response.json()
    dispatch(setRepos(result))
  }
}

export const getCurrentRepo = async (usename, reponame, setRepo) => {
  const response = await fetch("https://api.github.com/repos/" + usename + "/" + reponame)
  const result = await response.json()
  setRepo(result)
}

export const getContributors = async (usename, reponame, setContributors) => {
  const response = await fetch("https://api.github.com/repos/" + usename + "/" + reponame + "/contributors?per_page=10&page=1")
  const result = await response.json()
  setContributors(result)
}
