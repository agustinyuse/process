const express = require("express");
const router = express.Router();
const { fork } = require("child_process");

const dotenv = require("dotenv");

dotenv.config();

router.get("/:cant", async (req, res) => {
  try {
    let quantity = process.env.RANDOM_DEFAULT;
    if (req.params.cant && !isNaN(req.params.cant)) {
      quantity = Number(req.params.cant);
    }

    const random = fork("./random.js");
    random.send(quantity);
    random.on("random", (numeros) => {
      console.log(numeros);
      res.send(`Cantidades ${numeros}`);
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

module.exports = router;
