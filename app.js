import express from "express";
import cors from "cors";

import petRoutes from "./routes/pets.routes.js";

export const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/pets", petRoutes);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Express server at: http://localhost:${PORT}`);
  });
}
