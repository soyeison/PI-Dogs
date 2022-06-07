const { Router } = require("express");
const axios = require("axios");
const { Dog } = require("../db.js");
const { API_KEY } = process.env;

const router = Router();

async function breedApi(idRaza) {
  const breed = axios
    .get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    .then((response) =>
      response.data.map((element) => {
        return {
          id: element.id,
          name: element.name,
          year_of_life: element.life_span,
          height: element.height.metric,
          weight: element.weight.metric,
          temperament: element.temperament ? element.temperament : "Not temper",
          img: element.image.url,
        };
      })
    );
  return breed;
}

async function breeds() {
  let breedsList = [];
  const breedDb = await Dog.findAll();
  const breedAp = await breedApi();
  breedsList.push(breedDb, breedAp);
  breedsList = breedsList[0].concat(breedsList[1]);
  return breedsList;
}

router.get("/:idRaza", async (req, res) => {
  try {
    const { idRaza } = req.params;
    const breed = await breeds();
    const breedApiFilter = breed.filter((e) => e.id === parseInt(idRaza));
    res.json(breedApiFilter);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const breed = await breeds();
      const breedApiFilter = breed.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
      if (breedApiFilter.length === 0)
        throw new Error("No se encontro la raza de perro");
      res.json(breedApiFilter);
    } else {
      const breed = await breeds();
      res.json(breed);
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, height, weight, years_of_life } = req.body;
    const dog = await Dog.create({
      name,
      height,
      weight,
      years_of_life,
    });
    res.json(dog);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
