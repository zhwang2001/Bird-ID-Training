import { Box } from '@mui/material'
import { Tilt } from 'react-tilt'
import { ImageAndTextData } from '../controllers/answer_box_controller'
import { useState } from 'react'

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
function Image_Box() {

    const [images, setImages] = useState([])
    ImageAndTextData()
        .then(filtered_array => setImages(filtered_array))
        .catch(error => console.log(error));

    return (
        (
            images.slice(1, 2).map(image => {
                return (
                    <Tilt options={defaultOptions}>
                        <Box
                            component="img"
                            sx={{ borderRadius: '25px', boxShadow: '1px 10px 20px black', width: '25vw', height: '40vh', margin: '30px', minWidth: '350px', minHeight: '300px' }}
                            alt={image.labels}
                            src={`./archive/${image.filepaths}`}
                        />
                    </Tilt>
                )
            })
        )
    )
}

export default Image_Box