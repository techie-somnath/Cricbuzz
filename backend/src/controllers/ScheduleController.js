import { getAllInternationalMatchesScheduleList, getAllDomesticMatchesScheduleList } from "../services/ScheduleService.js";

export const getAllInternationalMatchesSchedule = async (req, res) => {
  try {
    const data = await getAllInternationalMatchesScheduleList();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllDomesticMatchesSchedule = async (req, res) => {
    try {
      const data = await getAllDomesticMatchesScheduleList();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
