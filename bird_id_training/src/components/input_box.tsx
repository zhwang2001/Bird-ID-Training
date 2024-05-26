import {Box, TextField} from '@mui/material/';
import {Dispatch, SetStateAction} from 'react';
import {birdIdObjectType} from "../App.tsx";


interface InputBoxProps {
    birdIdObject: birdIdObjectType
    isCorrect: boolean
    setIsCorrect: Dispatch<SetStateAction<boolean>>
    answer: string
    setAnswer: Dispatch<SetStateAction<string>>
    error: boolean
    setError: Dispatch<SetStateAction<boolean>>
    showAnswer: boolean
    setShowAnswer: Dispatch<SetStateAction<boolean>>
}

/**
 * React component for inputting answers
 * @returns ReactElement
 */
export default function InputBox({
                                     birdIdObject, isCorrect, setIsCorrect,
                                     answer, setAnswer,
                                     error, setError,
                                     showAnswer, setShowAnswer
                                 }: InputBoxProps) {


    const classes = {
        input: {
            color: "white"
        }
    }

    /**
     * Event handler for input
     * @param e change event
     */
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedText: string = e.target.value.toLowerCase()
        setAnswer(formattedText)
    }

    /**
     * Upon enter key press, record input
     * @param e keyboard event
     */
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        //Evaluate expression on enter press and modify error state
        if (e.key === 'Enter') {
            e.preventDefault();
            // Your code to execute when Enter is pressed

            if (birdIdObject.labels.toLowerCase() === answer) {
                setError(false)
                setIsCorrect(true)
                setShowAnswer(true)
            } else {
                setError(true)
            }
        }
        //Upon backspace error state is set to false
        if (e.key === 'Backspace') {
            // Your code to execute when Enter is pressed
            setError(false)
        }

    };


    return (
        < Box
            component="form"
            sx={{
                '& > :not(style)': {m: 1, width: '25ch'},
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row'
            }}
            autoComplete="off"
            noValidate
        >
            {showAnswer
                ? ""
                : <TextField
                    id="Answer_Box"
                    label="What's The Bird's Name?"
                    size={"medium"}
                    variant="standard"
                    inputProps={{className: classes.input.color}}
                    onKeyDown={handleKeyPress}
                    value={answer}
                    error={error}
                    onChange={handleInputChange}
                    sx={{
                        input: {color: isCorrect ? 'green' : (error ? 'red' : 'grey')},
                        '& label.Mui-focused': {color: isCorrect ? 'green' : (error ? 'red' : 'darkgray')},
                        '& .MuiInput-underline:before': {borderBottomColor: isCorrect ? 'green' : (error ? 'red' : 'grey')},
                        '& .MuiInput-underline:after': {borderBottomColor: isCorrect ? 'green' : (error ? 'red' : 'gray')},
                        '& .MuiInputLabel-root': {color: isCorrect ? 'green' : (error ? 'red' : 'grey')}, //Input Text Color
                        // '&:hover': { borderBottom: '1px solid grey' },
                    }}
                />}
        </Box>
    )
}
