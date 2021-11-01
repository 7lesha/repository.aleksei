import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../action/repos";
import './main.css';
import Repo from "./repo/repo";

const Main = () => {
  const dispatch = useDispatch()
  const repos = useSelector((state) => state.repos.items)
  useEffect(() => {
    dispatch(getRepos())
  }, [])
  return (
    <table>
      {repos.map(repo => {
        <Repo repo={repo}/>
      })}
    </table>
  );
};

export default Main;