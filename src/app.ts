import express, { Express } from "express";
import dotenv from "dotenv";
import checkoutRoutes from "./routes/checkoutRoute";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(checkoutRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});