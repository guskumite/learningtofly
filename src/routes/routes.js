import { Router } from "express";
import { router as passengerRouter } from "../passengers/passengers.route.js";
import { router as planesRouter } from "../plane/plane.route.js";
import { router as flightsRouter } from "../flights/flight.route.js";
import { router as cityRouter } from "../city/city.route.js";
import { router as authRouter } from "../auth/auth.route.js";
import { router as ticketRouter } from "./../tickets/ticket.route.js";
import { router as bookingRouter } from "./../bookings/booking.route.js";
import { protect } from "../auth/auth.middleware.js";

export const router = Router();
// lo que coloque aca se va a concatenar con /api/v1
router.use("/users", authRouter);
router.use(protect);
router.use("/passengers", passengerRouter);
router.use("/city", cityRouter);
router.use("/planes", planesRouter);
router.use("/flights", flightsRouter);
router.use("/ticket", ticketRouter);
router.use("/booking", bookingRouter);
