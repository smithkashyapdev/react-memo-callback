export const executeRequest = (url) => {
  return fetch(url).then((response) => response.json());
};
