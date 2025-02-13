import { getTeamsList} from "../services/TeamsService.js";

export const getInternationalTeamsList = async (req, res) => {
  try {
    const data = await getTeamsList();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};