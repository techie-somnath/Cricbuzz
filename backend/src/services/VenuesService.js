import axios from "axios";

export const getVenuesInfoById = async (venueId) => {
  try {
    const response = await axios.get(
      `https://cricbuzz-cricket.p.rapidapi.com/venues/v1/${venueId}`,
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