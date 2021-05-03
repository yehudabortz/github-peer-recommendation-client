import React from "react";
import "../css/Login.css";

export function GithubLogin() {
  let link;
  if (window.location.href.includes("nominations")) {
    let splitUrl = window.location.href.split("/");
    let nom_id = splitUrl.slice(-2, -1);
    link = `https://github.com/login/oauth/authorize?client_id=${window.githubClientId}&state=${nom_id}`;
  } else {
    link = `https://github.com/login/oauth/authorize?client_id=${window.githubClientId}`;
  }
  return (
    <div className={"login-card"}>
      <a href={link}>Login With GitHub</a>
    </div>
  );
}
