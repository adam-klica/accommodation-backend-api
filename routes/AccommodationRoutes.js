const express = require("express");
const {
  getAllAccomodations,
  createAccomodation,
  getAccomodationById,
  updateAccomodation,
  deleteAccomodation,
} = require("../controllers/AccomodationController");

const router = express.Router();

router.route("/").get(getAllAccomodations).post(createAccomodation);
router.route("/:id").get(getAccomodationById).put(updateAccomodation).delete(deleteAccomodation);

module.exports = router;
