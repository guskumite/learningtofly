//init features

import { PassengerService } from "./passengers.service.js";

const passengerService = new PassengerService();

export const findAllPassengers = (req, res) => {
  res.json({
    message: "este endpoint devolvera todos los pasajeros",
  });
};

export const createPassenger = async (req, res) => {
  const passenger = await passengerService.createPassenger(req.body);
  res.status(201).json(passenger);
};

export const findOnePassenger = (req, res) => {
  const { id } = req.params;

  res.json({
    message: "este endpoint obtendra un passagero dado su id",
    id: id,
  });
};

export const updatePassenger = (req, res) => {
  const { id } = req.params;

  res.json({
    message: "este endpoint actualizara el estado del pasajero",
    id,
  });
};

export const deletePassenger = (req, res) => {
  const { id } = req.params;

  res.json({
    message: "este endpoint eliminara una informacion",
    id,
  });
};
