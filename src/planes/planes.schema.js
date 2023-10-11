import z from "zod";
import { extractValidationData } from "../common/utils/extractErrorData.js";

export const planeSchema = z.object({
  airplane: z.number(),
  model: z.string().min(3).max(20),
  capacity: z.number().positive().min(20).max(400),
  airline: z.string().min(3).max(40),
});

export function validatePlane(data) {
  const result = planeSchema.safeParse(data);

  const {
    hasError,
    errorMessages,
    data: planeData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    planeData,
  };
}

export function validatePartialPlane(data) {
  const result = planeSchema.partial().safeParse(data);

  const {
    hasError,
    errorMessages,
    data: planeData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    planeData,
  };
}
