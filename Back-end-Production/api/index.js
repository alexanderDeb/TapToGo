import express from "express";
import morgan from "morgan";
import cors from "cors";
import { ConnectDB } from "./db.js";
import userRoutes from "./routes/user.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import stationRoutes from "./routes/station.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", userRoutes);
app.use("/api", adminRoutes);
app.use("/api", stationRoutes);

ConnectDB();
console.log("Server is running in the port: ", 3000);

export default app;
