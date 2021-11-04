import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../action/repos";
import { createPages } from "../pages/pages";
import { setCurrentPage } from "../reducers/reposReducer";
import './main.css';
import Repo from "./repo/repo";

const Main = () => {
  const dispatch = useDispatch()
  const repos = useSelector((state) => state.repos.items)
  const currentPage = useSelector((state) => state.repos.currentPage)
  const totalCount = useSelector((state) => state.repos.totalCount)
  const [searchValue, setSearchValue] = useState("")
  const pagesCount = totalCount > 100 ? 10 : Math.ceil(totalCount / 10);
  const pages = [];
  createPages(pages, pagesCount);

  useEffect(() => {
    dispatch(getRepos(searchValue, currentPage))
  }, [currentPage])

  function searchHadler() {
    dispatch(setCurrentPage(1))
    dispatch(getRepos(searchValue, currentPage))
  }

  return (
    <div>
      <form className="form">
        <input value={searchValue} onChange={(e) =>setSearchValue(e.target.value)} className="input" type="text" placeholder="Поиск"></input>
        <button onClick={() => searchHadler()} className="button">Найти</button>
      </form>
      <table>
        {repos.map((repo, index) => {
          <Repo repo={repo} number={index + 1 + currentPage * 10}/>
        })}
      </table>
      <div className="paginator">
        {pages.map((page, index) => {
          <span 
          key={index} 
          className={currentPage === page ? "activ-page" : "page"}
          onClick={() => dispatch(setCurrentPage(page))}>{page}</span>})}
      </div>
    </div>
  );
};

export default Main;