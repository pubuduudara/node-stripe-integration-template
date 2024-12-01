import { Request, Response } from "express";
import { CheckoutService } from "../services/checkoutService";

export class CheckoutController {
  private checkoutService: CheckoutService;

  constructor() {
    this.checkoutService = new CheckoutService();
  }

  async handleCheckout(req: Request, res: Response): Promise<void> {
    try {
      const baseUrl = `${req.protocol}://${req.get("host")}`;
      const session = await this.checkoutService.createCheckoutSession(baseUrl);
      console.log(`redirecting clinet to ${session.url}`);
      res.redirect(303, session.url!);
    } catch (error) {
      console.error("Error creating checkout session:", error);
      res.status(500).json({ error: "Failed to create checkout session" });
    }
  }
}
