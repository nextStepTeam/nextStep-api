
import {ping, exemplo} from "../controllers/exampleController.js";
import express from 'express';
const router = express.Router();
router.get("/ping", ping)
router.get("/", express.static('public'))
// router.post("/register", exampleController.registerExample);
// router.get("/", exampleController.getExample);

export default router;