import Flight from "./flights.model.js";
import { Op } from "sequelize";

export class FlightService {
  async findOneFlight(id) {
    return await Flight.findOne({
      where: {
        id,
        status: { [Op.ne]: "cancelled" },
      },
    });
  }

  async findAllFlights() {
    return await Flight.findAll({
      where: {
        status: { [Op.ne]: "cancelled" },
      },
    });
  }

  async createFlight(data) {
    return await Flight.create(data);
  }

  async updateFlight(flight, data) {
    return await flight.update(data);
  }

  async deleteFlight(flight) {
    return await flight.update({ status: "cancelled" });
  }
}
