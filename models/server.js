const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {
      home: "/",
    };

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(morgan("dev"));
    this.app.use(express.static(path.join(__dirname, "../public")));
  }

  routes() {
    this.app.use(this.paths.home, require("../routes/payment.route"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
