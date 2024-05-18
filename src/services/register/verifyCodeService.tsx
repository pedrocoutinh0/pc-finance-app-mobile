import {tokenService} from '../token/tokenService';

async function verifyCode(email: string) {
  try {
    const {token} = await tokenService();

    const response = await fetch(
      `https://${process.env.API_URL}/user/show/email?email=${email}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error('Erro ao registrar');
    }

    const data = await response.json();
    return {
      code: data.verifyEmail,
    };
  } catch (error) {
    console.log(error);
    throw new Error('Credenciais incorretas');
  }
}

export const verifyCodeService = verifyCode;
