import {
    getVenuesInfoById,
} from "../services/VenuesService.js";

export const getVenueInfo = async (req, res) => {
  const { venueId } = req.params;

  try {
    const data = await getVenuesInfoById(venueId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};