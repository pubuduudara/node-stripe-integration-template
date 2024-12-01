import { stripe } from "../config/stripe";
import { Stripe } from "stripe";

export class CheckoutService {
  async createCheckoutSession(
    baseUrl: string
  ): Promise<Stripe.Checkout.Session> {
    return await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Digital Book",
            },
            unit_amount: 5000, // Amount in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${baseUrl}/complete?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel`,
    });
  }
}
