import exampleController from "../controllers/exampleController.js";
import express from 'express';

const router = express.Router();

router.post("/register", exampleController.registerExample);
router.get("/", exampleController.getExample);

export default router;