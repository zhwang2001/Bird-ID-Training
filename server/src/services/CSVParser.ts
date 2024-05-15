import * as fs from 'fs'
import parse from 'csv-parser'

interface BirdData {
  "class id": string,
  filepaths: string,
  labels: string,
  "data set": string,
  "scientific name": string,
}

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
}
const getBirds = (): Promise<BirdData> => {
  return new Promise((resolve, reject) => {
    const results: Array<BirdData> = []
    let returnValue: BirdData = {
      "class id": "",
      filepaths: "",
      labels: "",
      "data set": "",
      "scientific name": "",
    } ;
    fs.createReadStream("./src/assets/archive/birds.csv")
        .pipe(parse())
        .on("data", (data) => results.push(data))
        .on("end", () => {
          const position: number = getRandomInt(results.length);
          returnValue = results[position];
          resolve(returnValue);
        }).on("error", (err) => {
          reject(err);
    })
  })
}

export default getBirds;