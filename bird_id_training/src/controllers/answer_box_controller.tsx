import ExtractData from "../models/bird_data"

/**
 * Fetches bird data from csv file, can select a subset of birds to be tested on
 * @param birdNames Select a subset of birds
 */
export async function ImageAndTextData(birdNames?: string[] | [] | null | undefined) {

    const defaultNames: string[] = [
        'GRAY CATBIRD', 'AMERICAN ROBIN', 'EUROPEAN STARLING',
        'RED WINGED BLAKCKBIRD', 'COMMON STARLING', 'NORTHERN CARDINAL',
        'MOURNING DOVE', 'YELLOW WARBLER', 'BLACK THROATED WARBLER',
        'COMMON YELLOWTHROAT', 'WHITE THROATED SPARROW', 'WINTER WREN',
        'COMMON MERGANSER', 'BLUE JAY', 'COMMON GRACKLE', 'CEDAR WAXWING',
        'BLACK-CAPPED CHICKADEE', 'DOWNY WOODPECKER', 'HAIRY WOODPECKER', 'PILEATED WOODPECKER',
        'RED CROSSBILL', 'PINE GROSBEAK', 'WHITE-WINGED CROSSBILL', 'RED HEADED WOODPECKER', 'EVENING GROSBEAK',
        'AMERICAN GOLDFINCH', 'PURPLE FINCH', 'HOUSE FINCH',
        'PINE SISKIN', 'CANADA GOOSE', 'GREEN HERON', 'RED BELLIED WOODPECKER', 'COMMON REDPOLL', 'BLUE-HEADED VIREO', 'CLIFF SWALLOW', 'HERMIT THRUSH', 'WHITE THROATED SPARROW', 'NASHVILLE WARBLER',
        'BANK SWALLOW', 'RED-BREASTED NUTHATCH', 'WHITE-BREASTED NUTHATCH', 'HOUSE WREN', 'SONG SPARROW', 'AMERICAN CROW', 'NORTHERN ROUGH-WINGED SWALLOW', 'MAGNOLIA WARBLER', 'COMMON YELLOWTHROAT', 'SHARP-SHINNED HAWK',
        'YELLOW WARBLER', 'BLACK-AND-WHITE WARBLER', 'YELLOW-RUMPED WARBLER', 'CHIMNEY SWIFT', 'RING-BILLED GULL', 'EASTERN PHOEBE', 'GREAT CRESTED FLYCATCHER', 'EASTERN KINGBIRD', 'WARBLING VIREO', 'RED-EYED VIREO', 'TENNESSEE WARBLER',
        'TURKEY VULTURE', 'KILLDEAR', 'NORTHERN FLICKER', 'BARN SWALLOW', 'NORTHERN PARULA', 'MALLARD DUCK', 'BLUE HERON','TREE SWALLOW', 'CHIPPING SPARROW', 'SCARLET TANAGER', 'GOLDEN CROWNED KINGLET',
        'ROSE BREASTED GROSBEAK', 'INDIGO BUNTING', 'RED TAILED WALK', 'BALTIMORE ORIOLE', 'AMERICAN REDSTART', 'BAY-BREASTED WARBLER', 'CAPE MAY WARBLER', 'BROWN HEADED COWBIRD'
    ]

    try {
        const extracted_data = await ExtractData();

        // Filter the extracted data based on birdNames
        let names
        birdNames ? names = birdNames : names = defaultNames
        if (extracted_data) {

            // If birdNames is null or an empty array, use defaultNames
            const filteredData = extracted_data.filter(item => names.includes(item.labels));
            return filteredData;
        }

    } catch (error) {
        console.error('Error fetching or parsing bird data:', error);
        return [];
    }
}
