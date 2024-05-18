import {tokenService} from '../token/tokenService';

async function register(username: string, email: string, password: string) {
  const {token} = await tokenService();

  const response = await fetch(`https://${process.env.API_URL}/user/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const data = await response.json();

  return {
    message: `${data.username} criado com sucesso.`,
  };
}

export const registerService = register;
