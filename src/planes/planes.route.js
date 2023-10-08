import { Router } from "express";

import {
  findAllPlanes,
  createPlane,
  findOnePlane,
  updatePlane,
  deletePlane,
} from "./planes.controller.js";
import { validateExistPlane } from "./planes.middleware.js";
import { protect } from "../auth/auth.middleware.js";

export const router = Router();

router.use(protect);

router.route("/").get(findAllPlanes).post(createPlane);

router
  .use("/:id", validateExistPlane)
  .route("/:id")
  .get(findOnePlane)
  .patch(updatePlane)
  .delete(deletePlane);
