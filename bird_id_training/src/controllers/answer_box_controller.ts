import ExtractData from "../models/Extract_Stored_Data.ts"

/**
 * Fetches bird data from csv file, can select a subset of birds to be tested on
 * @param selectedBirds Select a subset of birds
 * @param mode Visual or audio mode
 */
export async function ImageAndTextData({selectedBirds, mode}) {
    try {
        const extracted_data = await ExtractData({mode});

        // Filter the extracted data based on birdNames
        if (extracted_data) {
            // If birdNames is null or an empty array, use defaultNames
            const filteredData = extracted_data.filter(item => selectedBirds.includes(item.labels.toUpperCase()));
            const missingData = extracted_data.filter(item => !selectedBirds.includes(item.labels.toUpperCase()));

            const missingBirdsArray = missingData.map(obj => obj.labels)
            const missingBirdsSet = new Set(missingBirdsArray)
            console.log('missing Birds', missingBirdsSet)

            const filteredBirdsArray = filteredData.map(obj => obj.labels)
            const filteredBirdsSet = new Set(filteredBirdsArray)
            console.log('Available Birds', filteredBirdsSet)

            return filteredData;
        }

    } catch (error) {
        console.error('Error fetching or parsing bird data:', error);
        return [];
    }
}