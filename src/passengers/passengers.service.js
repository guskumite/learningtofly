import Passenger from "./passengers.model.js";

export class PassengerService {
  async createPassenger(data) {
    return await Passenger.create(data);
  }

  async findAllPassengers() {
    return await Passenger.findAll();
  }

  async findOnePassenger(id) {
    return await Passenger.findOne({
      where: {
        id,
      },
    });
  }

  async updatePassenger(passenger, data) {
    return await passenger.update(data);
  }

  async deletePassenger(passenger) {
    return await passenger.update({ status: false });
  }
}