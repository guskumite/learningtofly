import z from "zod";
import { extractValidationData } from "../common/utils/extractErrorData.js";

export const flightSchema = z.object({
  origin: z.number(),
  plane: z.number(),
  destination: z.number(),
  departure: z.string({
    invalid_type_error: "Departure date must be a correct format!",
    required_error: "Departure date is required",
  }),
  checkin: z.string({
    invalid_type_error: "Check in date must be a correct format!",
    required_error: "Check in date is required",
  }),
});

export function validateFlight(data) {
  const result = flightSchema.safeParse(data);

  const {
    hasError,
    errorMessages,
    data: flightData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    flightData,
  };
}

export function validatePartialFlight(data) {
  const result = flightSchema.partial().safeParse(data);

  const {
    hasError,
    errorMessages,
    data: flightData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    flightData,
  };
}
