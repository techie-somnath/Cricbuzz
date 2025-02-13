import axios from "axios";

export const getRecentMatchesList = async () => {
  try {
    const response = await axios.get(
      "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent",
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

export const getMatchInfoById = async (matchId) => {
  try {
    const response = await axios.get(
      `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}`,
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

export const getTeamByMatchIdAndTeamId = async (matchId, teamId) => {
  try {
    const response = await axios.get(
      `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}/team/${teamId}`,
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
