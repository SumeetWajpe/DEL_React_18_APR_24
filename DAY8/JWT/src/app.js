const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");
app.use(cors());
const privateKey = "MyJWTPrivateKey";
app.get("/signin", (req, res) => {
  let token = null;
  // generate (sign) the token + response
  jwt.sign(
    { name: "Sumeet" }, // ideally get it from the body of request
    privateKey,
    function (err, token) {
      console.log(token);
      res.json({ token });
    },
  );
});

app.post("/verify", (req, res) => {
  // verify the token
  const header = req.headers["authorization"];
  const token = header.split(" ")[1];
  jwt.verify(token, privateKey, function (err, decoded) {
    console.log(decoded);
    res.json({ status: true, msg: "Token Valid !" });
  });
});

app.listen(3600, () => {
  console.log("Server running @ 3600 !");
});
