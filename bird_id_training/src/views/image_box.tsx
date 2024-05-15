import { Tilt } from 'react-tilt'
import { Box, IconButton, Typography } from '@mui/material'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 10,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.05,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

//TODO
/**
 * Stepper at top 
 * Notification that the answer is correct or wrong
 * On click display answer
 * Settings for enabling which birds to add to list
 * __MVC (model = communicate with backend)
 */

/**
 * React component for displaying image
 * @returns ReactElement
 */
function Image_Box({ isCorrect, birdIdObject, handleNextBird, showAnswer, setShowAnswer, disable, setDisable, error, setError }) {

    //On image click shows the right answer
    const handleImageClick = () => {
        // When the answer is already correct clicking the image no longer does anything
        if (!isCorrect) {
            setShowAnswer(birdIdObject.labels)
            setError(true)
            setDisable(true)
        }
    }


    return (
        <Tilt options={defaultOptions}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{ marginTop: '5px' }}>
                    {showAnswer}
                </Typography>
                {showAnswer ?
                    <IconButton>
                        <KeyboardDoubleArrowRightIcon onClick={handleNextBird} sx={{ color: 'white' }} />
                    </IconButton>
                    : ""}
            </div>
            <Box
                component="img"
                sx={{ borderRadius: '25px', boxShadow: '1px 10px 20px black', width: '25vw', height: '40vh', margin: '30px', minWidth: '350px', minHeight: '300px' }}
                alt={birdIdObject.labels}
                src={`./archive/${birdIdObject.filepaths}`}
                onClick={handleImageClick}
            />
        </Tilt>
    )
}

export default Image_Box