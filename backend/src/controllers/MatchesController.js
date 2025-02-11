import { getRecentMatchesList, getMatchInfoById } from "../services/MatchesService.js";

export const getAllMatchesList = async (req, res) => {
  try {
    const data = await getRecentMatchesList();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMatchInfo = async (req, res) => {
    const { matchId } = req.params;

    try {
      const data = await getMatchInfoById(matchId);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
