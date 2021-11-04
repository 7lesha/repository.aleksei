import React from "react";
import { NavLink } from "react-router-dom";
import "./repo.css";
import { NavLink } from "react-router-dom";

const Repo = ({repo, number}) => {
  return (
    <tr>
      <td>
        {number}
      </td>
      <td>
        <NavLink to={"/card/" + repo.owner.login + "/" + repo.name}>{repo.name}</NavLink>
      </td>
      <td>
        {repo.stargazers_count}
      </td>
      <td>
        {repo.pushed_at}
      </td>
      <td>
        <a href={repo.clone_url} className="a" target="_blank">{repo.clone_url}</a>
      </td>
    </tr>
  );
}

export default Repo;