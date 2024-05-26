import {Box} from '@mui/material'
import {birdIdObjectType} from '../App.tsx'
import {Dispatch, SetStateAction} from 'react'

interface ImageBoxProps {
    isCorrect: boolean,
    birdIdObject: birdIdObjectType,
    setShowAnswer: Dispatch<SetStateAction<boolean>>
}

/**
 * React component for displaying image
 * @returns ReactElement
 */
export default function ImageBox({isCorrect, birdIdObject, setShowAnswer,}: ImageBoxProps) {

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
            sx={{
                borderRadius: '25px',
                boxShadow: '1px 10px 20px black',
                width: '45vh',
                height: '45vh',
                margin: '30px',
                minWidth: '350px',
                minHeight: '300px'
            }}
            alt={birdIdObject.labels}
            src={`./archive/${birdIdObject.filepaths}`}
            onClick={handleImageClick}
        />
    )
}
