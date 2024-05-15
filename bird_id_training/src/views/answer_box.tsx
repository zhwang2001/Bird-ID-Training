import { Box, TextField } from '@mui/material/';

/**
 * React component for inputing answers
 * @returns ReactElement
 */
function Answer_Box({ birdIdObject, isCorrect, setIsCorrect, answer, setAnswer, error, setError, disable, setDisable, showAnswer, setShowAnswer }) {


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
        const formattedText = e.target.value.toLowerCase()
        setAnswer(formattedText)
        console.log(answer)
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
                setShowAnswer(birdIdObject.labels)
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
            sx={{ '& > :not(style)': { m: 1, width: '25ch' }, display: 'flex', justifyContent: 'center', flexDirection: 'row' }}
            autoComplete="off"
            noValidate
        >
            <TextField
                id="Answer_Box"
                label="What's The Bird's Name?"
                variant="standard"
                inputProps={{ className: classes.input.color }}
                onKeyDown={handleKeyPress}
                disabled={disable}
                value={answer}
                error={error}
                sx={{
                    input: { color: isCorrect ? 'green' : (error ? 'red' : 'white') },
                    '& label.Mui-focused': { color: isCorrect ? 'green' : (error ? 'red' : 'white') },
                    '& .MuiInput-underline:before': { borderBottomColor: isCorrect ? 'green' : (error ? 'red' : 'grey') },
                    '& .MuiInput-underline:after': { borderBottomColor: isCorrect ? 'green' : (error ? 'red' : 'white') },
                    '& .MuiInputLabel-root': { color: isCorrect ? 'green' : (error ? 'red' : 'grey') }, //Input Text Color
                    // '&:hover': { borderBottom: '1px solid grey' },
                }}
                onChange={handleInputChange}
            />
        </Box >
    )
}

export default Answer_Box