import { Box } from '@mui/material'


//TODO
/**
 * Percent tracker
 * Notification that the answer is correct or wrong
 * On click display answer
 * Settings for enabling which birds to add to list
 * Backend
 */

/**
 * React component for displaying image
 * @returns ReactElement
 */
export default function ImageBox({isCorrect, birdIdObject, setShowAnswer,}) {

    //On image click shows the right answer
    const handleImageClick = () => {
        // When the answer is already correct clicking the image no longer does anything
        if (!isCorrect) {
            setShowAnswer(true);
        }
    }


    return (
            <Box
                component="img"
                sx={{ borderRadius: '25px', boxShadow: '1px 10px 20px black', width: '25vw', height: '40vh', margin: '30px', minWidth: '350px', minHeight: '300px' }}
                alt={birdIdObject.labels}
                src={`./archive/${birdIdObject.filepaths}`}
                onClick={handleImageClick}
            />
    )
}
