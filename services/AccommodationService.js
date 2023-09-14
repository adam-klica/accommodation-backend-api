const AccommodationModel = require("../models/AccommodationModel");

exports.getAllAccomodations = async (filters = {}) => {
  try {
    return await AccommodationModel.find(filters);
  } catch (error) {
    throw error; 
  }
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
