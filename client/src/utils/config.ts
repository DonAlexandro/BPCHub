export const config = {
  API_URL: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:1337/api',
  SCRAPPER_URL: process.env.NEXT_PUBLIC_SCRAPPER_URL ?? 'http://localhost:5001',
  API_TOKEN: process.env.NEXT_PUBLIC_API_TOKEN,
  BPC_URL: process.env.NEXT_PUBLIC_BPC_URL ?? 'https://www.batk.nubip.edu.ua',
};
