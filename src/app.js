import express from "express";
import { router as passengerRouter } from "./passengers/passengers.route.js";

/* database.authenticate();
database.syncUp(); */

const app = express();

app.use(express.json());

app.use("/api/v1", passengerRouter);

export default app;
