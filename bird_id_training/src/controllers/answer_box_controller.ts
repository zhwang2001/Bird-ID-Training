import ExtractData from "../models/Extract_Stored_Data.ts"

/**
 * Fetches bird data from csv file, can select a subset of birds to be tested on
 * @param selectedBirds Select a subset of birds
 * @param mode Visual or audio mode
 */

interface imageAndTextDataProps {
    selectedBirds: string[]
    mode: string
}
export async function ImageAndTextData({selectedBirds, mode}: imageAndTextDataProps) {
    try {
        const extracted_data = await ExtractData({mode});

        // Filter the extracted data based on birdNames
        if (extracted_data) {
            // If birdNames is null or an empty array, use defaultNames
            // @ts-ignore
            const filteredData = extracted_data.filter((item: unknown) => selectedBirds.includes(item.labels.toUpperCase()));
            // @ts-ignore
            const missingData = extracted_data.filter((item: unknown) => !selectedBirds.includes(item.labels.toUpperCase()));

            // @ts-ignore
            const missingBirdsArray = missingData.map((obj: unknown) => obj.labels)
            const missingBirdsSet = new Set(missingBirdsArray)
            console.log('missing Birds', missingBirdsSet)

            // @ts-ignore
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
