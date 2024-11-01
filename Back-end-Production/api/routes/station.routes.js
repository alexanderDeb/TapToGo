import { Router } from "express";
import {
  createStation,
  deleteStation,
  getStation,
  getStations,
} from "../controllers/station.controller";

const router = Router();

router.get("/stations", getStations);
router.get("/station/:id", getStation);
router.delete("/station/:id", deleteStation);
router.post("/station", createStation);

export default router;
