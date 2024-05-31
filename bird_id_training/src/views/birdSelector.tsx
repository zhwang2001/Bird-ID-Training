import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {Button, Dialog, DialogTitle, DialogContent, DialogActions, Box} from "@material-ui/core";
import {Tilt} from 'react-tilt';
import {birdSelectorProps} from "../birdTypes/birdTypes.ts";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


/**
 * Multi select components for selecting the types of birds you want to be tested on
 * @param birdNames
 * @param selectedBirds
 * @param setSelectedBirds
 * @param open
 * @param setOpen
 * @param setMode
 * @constructor
 */
export default function BirdSelector({
                                         birdNames,
                                         selectedBirds,
                                         setSelectedBirds,
                                         open,
                                         setOpen,
                                         setMode
                                     }: birdSelectorProps): React.ReactElement {


    /*** Handles the opening of the dialog box*/
    const handleClickOpen = () => {
        setOpen(true);
    };
    /**
     * Handles the mode selection by specifying file location
     * @param modeName the name of the mode (either visual or audio)
     */
    const handleSelectMode = (modeName: string) => {
        console.log(modeName)
        if (modeName === "visual") {
            setMode('visual')
        } else if (modeName === "audio") {
            setMode('audio')
        }
    }

    /**
     * handles the closing of the dialog box and state reset
     * @param event
     * @param reason different actions depending on which part of the component is pressed
     */
    const handleClose = (event: unknown, reason?: 'backdropClick' | 'cancel' | 'confirm') => {
        if (event) {
            if (reason === 'backdropClick') {
                setSelectedBirds([])
                setOpen(false);
            }
            if (reason === 'cancel') {
                setSelectedBirds([])
                setOpen(false)
            } else if (reason === 'confirm') {
                setOpen(false)
            }
        }
    };

    /**
     * Records the birds the user wishes to be tested on
     * @param event
     */
    const handleChange = (event: SelectChangeEvent<typeof birdNames>) => {
        const {target: {value},} = event;
        if (value[value.length - 1] === "--SELECT All--") {
            setSelectedBirds(selectedBirds.length === birdNames.length ? [] : birdNames.slice(1));
            return;
        }
        setSelectedBirds(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <Tilt>
                <Button style={{backgroundColor: 'white', color: 'black', margin: '30px'}}
                        onClick={() => {
                            handleClickOpen();
                            handleSelectMode('visual')
                        }}>
                    Bird Visual Training
                </Button>
            </Tilt>
            <Tilt>
                <Button style={{backgroundColor: 'darkgray', color: 'white', margin: '30px'}}
                        onClick={() => {
                            handleClickOpen();
                            handleSelectMode('audio')
                        }}>
                    Bird Audio Training
                </Button>
            </Tilt>
            <Dialog disableEscapeKeyDown disableEnforceFocus open={open}
                    onClose={(event) => handleClose(event, "backdropClick")}>
                <DialogTitle>Select Your Birds</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{display: 'flex', flexWrap: 'wrap'}}>
                        <FormControl sx={{m: 1, width: 300}}>
                            <InputLabel id="demo-multiple-checkbox-label">
                                Bird names
                            </InputLabel>
                            <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple
                                value={selectedBirds}
                                onChange={handleChange}
                                input={<OutlinedInput label="Bird Names"/>}
                                MenuProps={MenuProps}
                            >
                                {birdNames.map((birdName: string) => (
                                    <MenuItem
                                        key={birdName}
                                        value={birdName}
                                    >
                                        {birdName}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={(e) => handleClose(e, 'cancel')}>Cancel</Button>
                    <Button onClick={(e) => handleClose(e, 'confirm')}>Confirm</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}