import * as express from "express";
import bodyParser = require("body-parser");
import routes from "./routes";

const app = express();
app.use(bodyParser.json());
app.use("/api", routes);

export default app;

app.get("/", (req, res) => {
    res.send("Servidor CMS MuOnline en ejecución 🚀");
  });