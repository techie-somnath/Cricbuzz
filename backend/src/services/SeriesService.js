import axios from "axios";

export const getAllInternationalMatchesSeriesList = async () => {
  try {
    const response = await axios.get(
      "https://cricbuzz-cricket.p.rapidapi.com/series/v1/international",
      {
        headers: {
          "X-RapidAPI-Key": process.env.RAPID_API_KEY,
          "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data from RapidAPI:", error);
    throw error;
  }
};

export const getAllDomesticMatchesSeriesList = async () => {
  try {
    const response = await axios.get(
      "https://cricbuzz-cricket.p.rapidapi.com/series/v1/domestic",
      {
        headers: {
          "X-RapidAPI-Key": process.env.RAPID_API_KEY,
          "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data from RapidAPI:", error);
    throw error;
  }
};
