import express from "express";
import { router } from "./routes/routes.js";
import { AppError } from "./errors/appError.js";
import { envs } from "./config/enviroments/enviroments.js";
import { globalErrorHandler } from "./errors/error.controller.js";
import { enableCors } from "./config/plugins/cors.plugin.js";
import { enableMorgan } from "./config/plugins/morgan.plugin.js";
import { limitRequest } from "./config/plugins/rate-limit.plugin.js";
import { setSecurityHeaders } from "./config/plugins/security-headers.plugin.js";
import { sanitizerClean } from "./config/plugins/sanitizer.plugin.js";
import { setParameterPoluttion } from "./config/plugins/parameter-pollution.plugin.js";

const app = express();
const ACCEPTED_ORIGINS = ["http://localhost:3000"];

const helmet = setSecurityHeaders();
const sanitizer = sanitizerClean();
const hpp = setParameterPoluttion();
const rateLimit = limitRequest(
  10000,
  60,
  "Too many requests from this IP, please try again in an hour"
);

app.use(express.json());

if (envs.NODE_ENV === "development") {
  enableMorgan(app);
}

app.use(helmet());
app.use(hpp());
app.use(rateLimit);
app.use(sanitizer);

enableCors(app, ACCEPTED_ORIGINS);

app.use("/api/v1", router);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
