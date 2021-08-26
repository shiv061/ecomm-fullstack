const URL = 'http://localhost:5000/api';

export const loginAuth = (payload) => {
  const { email, password } = payload;
  const loginData = {
    email,
    password,
  };
  return fetch(`${URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  }).then((res) => res.json());
};

export const signUpAuth = (payload) => {
  const { username, email, password } = payload;
  const loginData = {
    name: username,
    email,
    password,
  };
  return fetch(`${URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  }).then((res) => res.json());
};
