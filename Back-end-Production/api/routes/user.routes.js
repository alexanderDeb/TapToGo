import { Router } from "express";
import {
  getUser,
  getUsers,
  updateUserSaldo,
  createUser,
  spendSaldo,
  loginUser,
} from "../controllers/user.controller.js";

const router = Router();

router.get("/user", getUsers);
router.get("/user/:email", getUser);
router.put("/user/:rfid", updateUserSaldo);
router.put("/userspend/:rfid", spendSaldo);
router.post("/user", createUser);
router.post("/login", loginUser);
export default router;
