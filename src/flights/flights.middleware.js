import { AppError, catchAsync } from "../errors/index.js";
import { FlightService } from "./flights.service.js";

const flightService = new FlightService();

export const validateExistFlight = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const flight = await flightService.findOneFlight(id);

  if (!flight) {
    return next(new AppError(`Flight not found with id: ${id}`, 404));
  }

  req.flight = flight;
  next();
});
