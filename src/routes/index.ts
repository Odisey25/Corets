import { Router } from "express";
import db from "../config/db";

const router = Router();

router.get("/", async (req, res) => {
  try {
    // Pequeña prueba para verificar conexión
    const result = await db.raw("SELECT TOP 1 memb___id FROM MEMB_INFO");
    res.json({ message: "Conexión OK", firstUser: result });
  } catch (error) {
    console.error("❌ Error de conexión:", error);
    res.status(500).json({ error: "No se pudo conectar a la base de datos" });
  }
});

export default router;
