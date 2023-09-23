const jwtConfig = {
  secret: process.env.JWT_SECRET || "mysecretkey",
  expiresIn: "30m",
  issuer: "myapp.com",
  audience: "myapp_users",
  algorithm: "HS256",
};
