const { Router } = require("express");

const usersRoutes = require("./user.routes");

const routers = Router();
routes.use("/users", usersRoutes)

module.exports = routes;