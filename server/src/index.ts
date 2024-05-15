import express from 'express';
import getBirds from './services/CSVParser'
import * as fs from 'fs'

const app = express();

const PORT = 3000;

interface ResponseObject {
  commonName: string,
  image: string,
}

app.get('/', async (req, res, next) => {
  const object = await getBirds();
  let responseObject: ResponseObject = {
    commonName: "",
    image: "",
  }
  responseObject.commonName = object.labels;
  responseObject.image = fs.readFileSync("./src/assets/archive/" + object.filepaths, 'base64');

  res.send(responseObject);
})
app.listen(PORT,() => {
  console.log("Server Running on 3000!");
})