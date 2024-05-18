import {tokenService} from '../token/tokenService';

async function verifyEmail(email: string) {
  const {token} = await tokenService();

  const response = await fetch(
    `https://${process.env.API_URL}/emails/send?email=${email}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const data = await response;

  return {
    message: data,
  };
}

export const verifyEmailService = verifyEmail;
