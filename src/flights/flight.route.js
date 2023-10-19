import { Router } from "express";

import {
  findAllFlights,
  createFlights,
  findOneFlights,
  updateFlights,
  deleteFlights,
} from "./flight.controller.js";
import { validateExistFlight } from "./flight.middleware.js";
import { protect } from "../auth/auth.middleware.js";

export const router = Router();

// router.use(protect);

router.route("/").get(findAllFlights).post(createFlights);

router
  .use("/:id", validateExistFlight)
  .route("/:id")
  .get(findOneFlights)
  .patch(updateFlights)
  .delete(deleteFlights);
