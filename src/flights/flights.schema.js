import z from "zod";
import { extractValidationData } from "../common/utils/extractErrorData.js";

export const flightSchema = z.object({
  origin: z.number(),
  plane: z.number(),
  destination: z.number(),
  departure: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
  checkin: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
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
