const SET_REPOS = "SET_REPOS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

const defaultState = {
  items: [],
  currentPage: 1,
  totalCount: 0
}

export default function reposReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_REPOS: 
      return {...state, items: action.payload.items, totalCount: action.payload.total_count}
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.payload}
    default: 
      return state
  }
} 

export const setRepos = (repos) => ({type: SET_REPOS, payload: repos})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, payload: page})
