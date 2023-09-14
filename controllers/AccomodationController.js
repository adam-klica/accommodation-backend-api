const accomodationService = require("../services/AccommodationService");

exports.getAllAccomodations = async (req, res) => {
  try {
    const { rating, city, reputationBadge, availability, category } = req.query;
    
    const filters = {};
    if (rating) filters.rating = rating;
    if (city) filters.city = city;
    if (reputationBadge) filters.reputationBadge = reputationBadge;
    if (availability) filters.availability = { $gte: Number(availability) }; 
    if (category) filters.category = category;
    
    const accommodations = await accomodationService.getAllAccomodations(filters);
    res.json({ data: accommodations, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createAccomodation = async (req, res) => {
  try {
    const accommodation = await accomodationService.createAccomodation(req.body);
    res.json({ data: accommodation, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAccomodationById = async (req, res) => {
  try {
    const accommodation = await accomodationService.getAllAccomodationById(req.params.id);
    res.json({ data: accommodation, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAccomodation = async (req, res) => {
  try {
    const accommodation = await accomodationService.updateAccomodation(req.params.id, req.body);
    res.json({ data: accommodation, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteAccomodation = async (req, res) => {
  try {
    const accommodation = await accomodationService.deleteAccomodation(req.params.id);
    res.json({ id: accommodation._id, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
