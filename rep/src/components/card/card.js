import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getContributors, getCurrentRepo } from "../action/repos";
import "./card.css";

const Card = (props) => {
  const {usename, reponame} = useParams()
  const [repo, setRepo] = useState({owner: {}})
  const [contributors, setContributors] = useState([])

  useEffect(() => {
    getCurrentRepo(usename, reponame, setRepo)
    getContributors(usename, reponame, setContributors)
  }, [])
  if (!repo) {
    return null
  }
  return (
    <div>
      <div className="avatar">
        <img className="img" src={repo.owner?.avatar_url} alt="картинка"/>
      </div>
      <div className="name">Название: {repo.name}</div>
      <div className="stars">Кол. звезд: {repo.stargazers_count}</div>
      <div className="date">Дата последнего коммита: {repo.pushed_at}</div>
      <div className="reponames">Имя: {repo.owner?.login}</div>
      <div className="url">Ссылка: <a href={repo.owner?.html_url} className="a" target="_blank" rel="noreferrer">{repo.owner?.html_url}</a></div>
      <div className="language">Языки: {repo.language}</div>
      <div className="des">Описание репозитория: {repo.description}</div>
      <div className="contr">10 наиболее активных контрибьютеров: </div>
      {contributors.map?.((c, index) => {
        return <div>{index + 1}. {c?.login}</div>
      })}
      <button onClick={() => props.history.goBack()} className="close" type="button">Назад</button>
    </div>
  );
};

export default Card;
