import { AppError, catchAsync } from "../errors/index.js";
import { validatePartialFlight, validateFlight } from "./flights.schema.js";
import { FlightService } from "./flights.service.js";

const flightService = new FlightService();

export const findAllFlights = catchAsync(async (req, res, next) => {
  const flights = await flightService.findAllFlights();
  return res.json(flights);
});

export const createFlight = catchAsync(async (req, res, next) => {
  const { hasError, errorMessages, flightData } = validateFlight(req.body);

  if (hasError) {
    return res.status(422).json({
      status: "error",
      message: errorMessages,
    });
  }

  const flight = await flightService.createFlight(flightData);
  return res.status(201).json(flight);
});

export const findOneFlight = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const flight = await flightService.findOneFlight(id);

  if (!flight) {
    return next(new AppError(`Flight with id: ${id} not found`, 404));
  }

  return res.json(flight);
});

export const updateFlight = catchAsync(async (req, res) => {
  const { hasError, errorMessages, flightData } = validatePartialFlight(
    req.body
  );

  if (hasError) {
    return res.status(422).json({
      status: "error",
      message: errorMessages,
    });
  }

  const { id } = req.params;

  const flight = await flightService.findOneFlight(id);

  if (!flight) {
    return res.status(404).json({
      status: "error",
      message: `Flight with id ${id} not found`,
    });
  }

  //4. en caso de que exista, se procede a actualizar el vuelo
  const updatedFlight = await flightService.updateFlight(flight, flightData);
  //5. retornamos el vuelo actualizado.
  return res.json(updatedFlight);
});

export const deleteFlight = catchAsync(async (req, res) => {
  const { id } = req.params;

  const flight = await flightService.findOneFlight(id);

  if (!flight) {
    return res.status(404).json({
      status: "error",
      message: `Flight with id ${id} not found`,
    });
  }

  await flightService.deleteFlight(flight);

  return res.status(204).json(null);
});
