const AccommodationModel = require("../models/AccommodationModel");

exports.getAllAccomodations = async () => {
  return await AccommodationModel.find();
};

exports.createAccomodation = async (accommodation) => {
  return await AccommodationModel.create(accommodation);
};
exports.getAllAccomodationById = async (id) => {
  return await AccommodationModel.findById(id);
};

exports.updateAccomodation = async (id, accommodation) => {
  return await AccommodationModel.findByIdAndUpdate(id, accommodation);
};

exports.deleteAccomodation = async (id) => {
  return await AccommodationModel.findByIdAndDelete(id);
};
