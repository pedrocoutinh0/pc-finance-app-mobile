async function token() {
  try {
    const response = await fetch(`https://${process.env.API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: process.env.ADMIN_USERNAME,
        password: process.env.ADMIN_PASSWORD,
      }),
    });

    if (!response.ok) {
      throw new Error('Erro ao autenticar');
    }

    const data = await response.json();

    return {
      token: data.access_token,
    };
  } catch (error) {
    console.log(error);
    throw new Error('Credenciais incorretas');
  }
}

export const tokenService = token;
