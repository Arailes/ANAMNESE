const API_URL = 'http://localhost:4000/api/anamnese';

export const enviarAnamnese = async (dados) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados),
  });
  return res.json();
};