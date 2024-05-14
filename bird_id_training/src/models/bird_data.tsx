import Papa from 'papaparse'


const ExtractData = async () => {
    try {
        const response = await fetch('./archive/birds.csv');
        const csvData = await response.text();
        const parsedData = Papa.parse(csvData, { header: true, delimiter: ',' });
        const data = parsedData.data;
        if (parsedData.meta && parsedData.meta.fields) {
            console.log(parsedData.meta)
            const headerNames = parsedData.meta.fields;
            console.log(headerNames)
        }
        return data
    } catch (error) {
        console.error('Error fetching CSV file:', error)
        return ""
    }
}

export default ExtractData
