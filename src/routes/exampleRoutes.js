
import {ping} from "../controllers/exampleController.js";
import express from 'express';
console.log(ping)
const router = express.Router();
router.get("/ping", exampleController.ping)
router.get("/", ping)
// router.post("/register", exampleController.registerExample);
// router.get("/", exampleController.getExample);

export default router;