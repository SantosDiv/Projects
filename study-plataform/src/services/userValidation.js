const dataUsers = [
  {
    username: 'diogenes',
    password: '1234',
    token: true,
  },
];

export async function validation(userN, passW) {
  return new Promise((resolve, reject) => {
    const verify = dataUsers.some(({ username, password }) =>
      username === userN && password === passW);

    verify ? resolve(userN) : reject('Usuário Inválido');
  });
}