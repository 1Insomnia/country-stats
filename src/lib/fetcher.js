const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = `https://api.api-ninjas.com/v1/country?name=`;

const fetcher = async (country) => {
  try {
    // Request
    const res = await fetch(`${BASE_URL}${country}`, {
      headers: {
        "X-Api-Key": API_KEY,
      },
    });

    // JSON data
    const data = await res.json();
    // Exception
    if (!res.ok) throw Error;

    return {
      data: data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error,
    };
  }
};

export default fetcher;
