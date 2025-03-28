import { Router } from "express";
import { handleEmail } from "../controllers/cont.js";

const router = Router();

router.get('/', (req, res) => {
  res.end("Email Notification System!");
});

router.post('/sendemail', handleEmail); 

export default router;
