export const fetchUsers = async () => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      return error;
    });
};

export const fetchUser = async (id: number) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      return error;
    });
};

export const fetchUserPosts = async (id: number) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}/posts`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      return error;
    });
};
