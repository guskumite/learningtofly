import Passenger from "./passengers.model.js";

export class PassengerService {
  async createPassenger(data) {
    return await Passenger.create(data);
  }
}
