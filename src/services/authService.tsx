import {AuthData} from '../contexts/Auth';

async function signIn(username: string, password: string): Promise<AuthData> {
  try {
    const response = await fetch('https://{url}/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (!response.ok) {
      throw new Error('Erro ao autenticar');
    }

    const data = await response.json();

    return {
      token: data.access_token,
      username: username,
    };
  } catch (error) {
    console.log(error);
    throw new Error('Credenciais incorretas');
  }
}

export const authService = {signIn};
