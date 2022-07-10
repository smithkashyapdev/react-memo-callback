export const executeRequest = async (url) => {
  const result = await fetch(url);
  return result;
};

export async function getApi(url) {
  const result = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      response.json();
    })
    .catch((error) => {
      throw error;
    });

  return result;
}
