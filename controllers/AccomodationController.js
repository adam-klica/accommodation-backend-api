const accomodationService = require("../services/AccommodationService");

exports.getAllAccomodations = async (req, res) => {
  try {
    const blogs = await accomodationService.getAllAccomodations();
    res.json({ data: blogs, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createAccomodation = async (req, res) => {
  try {
    const blog = await accomodationService.createAccomodation(req.body);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAccomodationById = async (req, res) => {
  try {
    const blog = await accomodationService.getAllAccomodationById(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAccomodation = async (req, res) => {
  try {
    const blog = await accomodationService.updateAccomodation(req.params.id, req.body);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteAccomodation = async (req, res) => {
  try {
    const blog = await accomodationService.deleteAccomodation(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
