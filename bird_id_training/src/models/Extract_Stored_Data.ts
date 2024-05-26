import Papa from 'papaparse'

/**
 * Utilize 'papaparse' library to parse csv file
 * @param mode Visual or audio mode
 * @constructor
 */
const ExtractData = async ({mode}: string) => {

    try {
        let response
        if (mode === "visual") {
            response = await fetch('./archive/birds.csv');
        } else if (mode === "audio") {
            response = await fetch('./archive/bird_sounds.csv')
        }

        if (response) {
            const csvData = await response.text();
            const parsedData = Papa.parse(csvData, {header: true, delimiter: ','});
            const data = parsedData.data;
            //if (parsedData.meta && parsedData.meta.fields) {
            //console.log(parsedData.meta)
            //const headerNames = parsedData.meta.fields;
            //}
            return data
        }
    } catch (error) {
        console.error('Error fetching CSV file:', error)
        return ""
    }
}

export default ExtractData
