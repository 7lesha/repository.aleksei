import React from "react";
import "./repo.css";

const Repo = ({repo}) => {
  return (
    <tr>
      <td>
        {repo.name}
      </td>
      <td>
        {repo.stargazers_count}
      </td>
      <td>
        {repo.pushed_at}
      </td>
      <td>
        <a href={repo.clone_url} className="a">{repo.clone_url}</a>
      </td>
    </tr>
  );
}

export default Repo;