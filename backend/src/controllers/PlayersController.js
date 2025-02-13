import { getTrendingPlayersList } from "../services/PlayersService.js";

export const getTrendingPlayers = async (req, res) => {
  try {
    const data = await getTrendingPlayersList();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
