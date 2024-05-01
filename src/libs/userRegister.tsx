'use server'

const userRegister = async (
  name: string,
  email: string,
  password: string,
  tel: string
) => {
  const BACKEND_URL = process.env.BACKEND_URL
  const response = await fetch(
    `${BACKEND_URL}/api-informations/users/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        tel: tel,
        role: "user",
      }),
    }
  );

  if (!response.ok) {
    //throw new Error("Failed to register");
  }

  return await response.json();
};

export default userRegister;
