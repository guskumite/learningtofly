import { AppError, catchAsync } from "../errors/index.js";
import { validatePartialPlane, validatePlane } from "./planes.schema.js";
import { PlaneService } from "./planes.service.js";

const planeService = new PlaneService();

export const findAllPlanes = catchAsync(async (req, res, next) => {
  const planes = await planeService.findAllPlanes();
  return res.json(planes);
});

export const createPlane = catchAsync(async (req, res, next) => {
  const { hasError, errorMessages, planeData } = validatePlane(req.body);
  if (hasError) {
    return res.status(422).json({ status: "error", message: errorMessages });
  }

  const plane = await planeService.createPlane(planeData);
  return res.status(201).json(plane);
});

export const findOnePlane = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const plane = await planeService.findOnePlane(id);

  if (!plane) {
    return next(new AppError(`Plane with id: ${id} not found`, 404));
  }

  return res.json(plane);
});

export const updatePlane = catchAsync(async (req, res) => {
  const { hasError, errorMessages, planeData } = validatePartialPlane(req.body);

  if (hasError) {
    return res.status(422).json({ status: "error", message: errorMessages });
  }

  const { id } = req.params;
  const plane = await planeService.findOnePlane(id);

  if (!plane) {
    return res.status(404).json({
      status: "error",
      message: `Plane with id ${id} not found`,
    });
  }

  const updatedPlane = await planeService.updatePlane(plane, planeData);

  return res.json(updatedPlane);
});

export const deletePlane = catchAsync(async (req, res) => {
  const { id } = req.params;
  const plane = await planeService.findOnePlane(id);

  if (!plane) {
    return res.status(404).json({
      status: "error",
      message: `Plane with id ${id} not found`,
    });
  }

  await planeService.deletePlane(plane);

  return res.status(204).json(null);
});
