//init features

import { PassengerService } from "./passengers.service.js";

const passengerService = new PassengerService();

export const findAllPassengers = async (req, res) => {
  try {
    const passengers = await passengerService.findAllPassengers();
    return res.json(passengers);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const createPassenger = async (req, res) => {
  try {
    const passenger = await passengerService.createPassenger(req.body);
    return res.status(201).json(passenger);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const findOnePassenger = async (req, res) => {
  try {
    const { id } = req.params;

    const passenger = await passengerService.findOnePassenger(id);

    if (!passenger) {
      return res.status(404).json({
        status: "error",
        message: `Passenger with id: ${id} not found`,
      });
    }

    res.json(passenger);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const updatePassenger = async (req, res) => {
  try {
    const { id } = req.params;

    const passenger = await passengerService.findOnePassenger(id);

    if (!passenger) {
      return res.status(404).json({
        status: "error",
        message: `passenger with id ${id} not found`,
      });
    }

    const updatedPassenger = await passengerService.updatePassenger(
      passenger,
      req.body
    );

    return res.json(updatedPassenger);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const deletePassenger = async (req, res) => {
  try {
    const { id } = req.params;

    const passenger = await passengerService.findOnePassenger(id);

    if (!passenger) {
      return res.status(404).json({
        status: "error",
        message: `Passenger with id: ${id} not found`,
      });
    }

    await passengerService.deletePassenger(passenger);

    return res.status(204).json({ x: "borrado" });
  } catch (error) {
    return res.status(500).json(error);
  }
};
