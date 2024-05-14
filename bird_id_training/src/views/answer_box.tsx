import { Box, TextField } from '@mui/material/';
import { useState } from 'react'

/**
 * React component for inputing answers
 * @returns ReactElement
 */
function Answer_Box() {
    const [answer, setAnswer] = useState('')

    const classes = {
        input: {
            color: "white"
        }
    }

    /**
     * Event handler for input
     * @param e InputElement
     */
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(e.target.value)
    }


    return (
        < Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="Answer_Box"
                label="What's The Bird's Name?"
                variant="standard"
                inputProps={{ className: classes.input.color }}
                sx={{
                    input: { color: 'white' },
                    '& label.Mui-focused': { color: 'white' },
                    '& .MuiInput-underline:before': { borderBottomColor: 'grey', },
                    '& .MuiInput-underline:after': { borderBottomColor: 'white', },
                    '& .MuiInputLabel-root': { color: 'grey', }, //Input Text Color
                    // '&:hover': { borderBottom: '1px solid grey' },
                }}
                onChange={handleInputChange}
            />
        </Box >
    )
}

export default Answer_Box