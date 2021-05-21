export function splitLinkedInUrl(url) {
  if (url && url.includes("linkedin.com/in")) {
    return url.split("linkedin.com/in/")[1];
  } else {
    return url;
  }
}

export function createLinkedInUrl(username) {
  if (username && !username.includes("linkedin.com/in")) {
    return "https://www.linkedin.com/in/" + username + "/";
  } else {
    return username;
  }
}
