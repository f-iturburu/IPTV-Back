import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET } from "../config.js";
import User from "../models/user.Model.js";

export const login = async (req, res) => {
    let { user, password } = req.body;
    let userLogin = await User.findOne({
      $or: [{ username: user }, { email: user }],
    });
  
    if (!userLogin) {
      return res
        .status(418)
        .json({ message: "Nombre de usuario o email incorrectos" });
    }
  
    const validPassword = await bcrypt.compare(password, userLogin.password);
  
    if (!validPassword) {
      return res.status(400).json({ message: "Contraseña inválida" });
    }
  
    const token = jwt.sign(
      {
        userId: userLogin._id,
        userRole: userLogin.role,
        userEmail: userLogin.email,
      },
      SECRET
    );
  
    res.json({ token: token });
  };

