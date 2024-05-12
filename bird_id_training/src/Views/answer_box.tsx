import { Box, TextField } from '@mui/material/';

function Answer_Box() {
    const classes = {
        input: {
            color: "white"
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }


    return (
        < Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="Answer_Box"
                label="Your Answer"
                variant="standard"
                inputProps={{ className: classes.input.color }}
                sx={{ input: { color: 'grey' } }}
                onChange={handleInputChange}
            />
        </Box >
    )
}

export default Answer_Box