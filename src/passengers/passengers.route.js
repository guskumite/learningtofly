import { Router } from "express";

import {
  findAllPassengers,
  createPassenger,
  findOnePassenger,
  updatePassenger,
  deletePassenger,
} from "./passengers.controller.js";
import { protect, restrictTo } from "../auth/auth.middleware.js";
import { uploadSingle } from "../config/plugins/upload-files.plugin.js";

export const router = Router();

router.use(protect);

router
  .route("/")
  .get(findAllPassengers)
  .post(
    uploadSingle("photo"),
    restrictTo("developer", "admin"),
    createPassenger
  );

router
  .route("/:id")
  .get(findOnePassenger)
  .patch(updatePassenger)
  .delete(deletePassenger);
