const express = require("express");
const dotenv = require("dotenv");
const productRoutes = require("./routes/product-routes");

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use("/api", productRoutes);

app.get("/", (req, res) => {
  res.json("Hello server");
});

const boot = () => {
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
};

boot();