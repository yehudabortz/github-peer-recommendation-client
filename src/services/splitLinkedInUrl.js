export function splitLinkedInUrl(url) {
  if (url) {
    return url.split("linkedin.com/in/")[1];
  }
}
