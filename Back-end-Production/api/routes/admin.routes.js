import { Router } from "express";
import { getAdmin, getAdmins, loginAdmin, registerAdmin } from "../controllers/admin.controller";

const router = Router();

router.get("/admin", getAdmins);
router.get("/admin/:email", getAdmin);
router.put("/admin/:email", () => {});
router.post("/admin/register", registerAdmin);
router.post("/admin/login", loginAdmin);

export default router;
