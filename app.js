import express from "express";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerJSdoc from "swagger-jsdoc";

import petRoutes from "./routes/pets.routes.js";

export const app = express();
const PORT = process.env.PORT || 3000;

// swagger definition
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Pets API",
      version: "1.0.0",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./routes/*.js"],
};

/* Global middlewares */
app.use(cors());
app.use(express.json());
app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJSdoc(swaggerSpec))
);

app.use("/pets", petRoutes);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Express server at: http://localhost:${PORT}`);
  });
}
