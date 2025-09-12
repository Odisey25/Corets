import app from "./app";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 CMS MuOnline corriendo en http://localhost:${PORT}`);
});
