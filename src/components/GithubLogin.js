import React from "react";

export function GithubLogin() {
  const link = `https://github.com/login/oauth/authorize?client_id=${window.githubClientId}`;
  return <a href={link}>Login With GitHub</a>;
}
