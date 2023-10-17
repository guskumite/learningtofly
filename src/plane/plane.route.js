import express from "express";
import { protect } from "../auth/auth.middleware.js";
import {
  createPlane,
  deletePlane,
  findAllPlanes,
  findOnePlane,
  updatePlane,
} from "./plane.controller.js";
import { restrictTo } from "../auth/auth.middleware.js";

export const router = express.Router();

router
  .route("/")
  .get(protect, restrictTo("receptionist", "developer", "admin"), findAllPlanes)
  .post(protect, restrictTo("developer", "admin"), createPlane);

router
  .route("/:id")
  .get(protect, restrictTo("receptionist", "developer", "admin"), findOnePlane)
  .patch(protect, restrictTo("developer", "admin"), updatePlane)
  .delete(protect, restrictTo("developer", "admin"), deletePlane);
