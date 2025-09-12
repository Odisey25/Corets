import { Request, Response } from "express";
import { getUserById } from "../models/userModel";
import { comparePassword } from "../utils/password";
import { generateToken } from "../utils/jwt";

export async function login(req: Request, res: Response) {
  const { username, password } = req.body;
  const user = await getUserById(username);

  if (!user) return res.status(401).json({ error: "Usuario no encontrado" });

  // Si en DB está en texto plano, aquí podrías comparar directo (no recomendado).
  const isValid = await comparePassword(password, user.memb__pwd);

  if (!isValid) return res.status(401).json({ error: "Contraseña incorrecta" });

  const token = generateToken({ id: user.memb_guid, username: user.memb___id });
  res.json({ token });
}
