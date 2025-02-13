import { getCricketNews } from "../services/NewsService.js";

export const getAllCricketNews = async (req, res) => {
  try {
    const data = await getCricketNews();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};