import {IconButton, Typography} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import React from 'react'
import {useEffect} from "react";
import {displayAnswerProps} from "../birdTypes/birdTypes.ts";

/**
 * Displays the bird's common and scientific name, as well as a button to cycle to the next bird
 * @param birdIdObject
 * @param handleNextBird
 * @param setIsPlaying
 * @constructor
 */
export default function DisplayAnswer({birdIdObject, handleNextBird}: displayAnswerProps) {

    const handleEnterPress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        //Evaluate expression on enter press and modify error state
        if (e.key === 'Enter') {
            e.preventDefault();
            // Your code to execute when Enter is pressed
            console.log("Enter");

        }
    };

    useEffect(() => {
        //global event listener that can cycle to next bird on tab press
        if (handleNextBird) {
            //Stop the current audio from being played
            //Cycle to the next bird after getting the right answer
            const handleTabPress = (e: KeyboardEvent) => {
                if (e.key === 'Tab') {
                    e.preventDefault();
                    handleNextBird();
                }
            };

            window.addEventListener('keydown', handleTabPress);

            return () => {
                window.removeEventListener('keydown', handleTabPress);
            };
        }

    }, [handleNextBird, birdIdObject]);

    return (
        <div style={{display: 'flex', justifyContent: 'column'}}>
            <div style={{marginTop: '5px', display: 'flex', flexDirection: 'column'}}>
                <Typography variant={"h5"} color={"darkgray"}>{birdIdObject.labels}</Typography>
                <Typography color={"grey"}>
                    {birdIdObject["scientific name"][0].toUpperCase() +
                        birdIdObject["scientific name"].slice(1).toLowerCase()}
                </Typography>
            </div>
            <IconButton onKeyDown={(e) => handleEnterPress(e)} onClick={handleNextBird}>
                <KeyboardDoubleArrowRightIcon sx={{color: 'grey'}}/>
            </IconButton>
        </div>
    )
}