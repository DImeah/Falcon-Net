import jwt from "jsonwebtoken";

const generateToken = async (id) => {
  const token = await jwt.sign({ _id: id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "30d",
  });
  return token;
};

export default generateToken;
