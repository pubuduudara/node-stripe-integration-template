const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

class Checkout {
  async createStripeSession() {
    return;
  }
}
