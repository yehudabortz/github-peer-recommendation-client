export function splitLinkedInUrl(url) {
  if (url && url.includes("linkedin.com/in")) {
    // debugger;
    return url.split("linkedin.com/in/")[1];
  } else {
    return url;
  }
}
