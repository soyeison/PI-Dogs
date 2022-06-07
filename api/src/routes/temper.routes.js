const axios = require("axios");
const { Router } = require("express");
const { Temper } = require("../db.js");
const { API_KEY } = process.env;

const router = Router();

function breedApi() {
  const breed = axios
    .get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    .then((response) =>
      response.data.map((element) => {
        return {
          temperament: element.temperament ? element.temperament : "Not temper",
        };
      })
    );
  return breed;
}

async function temperamentsListApi() {
  const tempList = [];
  const breed = await breedApi();
  let breedTemp = breed.map((e) => e.temperament);
  for (let i = 0; i < breedTemp.length; i++) {
    let element = breedTemp[i].split(", ");
    for (let j = 0; j < element.length; j++) {
      if (!tempList.includes(element[j])) tempList.push(element[j]);
    }
  }
  return tempList;
}

router.get("/", async (req, res) => {
  const breed = await temperamentsListApi();
  for (let i = 0; i < breed.length; i++) {
    await Temper.create({
      name: breed[i],
    });
  }
  const temp = await Temper.findAll();
  res.json(temp);
});

module.exports = router;
