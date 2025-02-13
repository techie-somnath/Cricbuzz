import { getAllInternationalMatchesSeriesList, getAllDomesticMatchesSeriesList } from "../services/SeriesService.js";

export const getAllInternationalMatchesSeries = async (req, res) => {
  try {
    const data = await getAllInternationalMatchesSeriesList();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllDomesticMatchesSeries = async (req, res) => {
    try {
      const data = await getAllDomesticMatchesSeriesList();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };