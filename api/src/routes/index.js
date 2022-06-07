const { Router } = require("express");
const dogs = require("./dogs.routes.js");
const temper = require("./temper.routes.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dogs", dogs);
router.use("/temperaments", temper);

module.exports = router;
