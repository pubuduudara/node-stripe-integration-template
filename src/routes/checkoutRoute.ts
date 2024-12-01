import express from "express";
import { CheckoutController } from "../controller/checkoutController";

const router = express.Router();
const checkoutController = new CheckoutController();

router.post("/checkout", (req, res) =>
  checkoutController.handleCheckout(req, res)
);

export default router;
