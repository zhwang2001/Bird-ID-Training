import {IconButton} from "@mui/material";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ReplayIcon from '@material-ui/icons/Replay';
import {useEffect} from "react";
import {soundBoxProps} from "../birdTypes/birdTypes.ts";

export default function SoundBox({isCorrect, isPlaying, setIsPlaying, birdSound, stop, next}: soundBoxProps) {

    const handlePlaySound = () => {
        if (isPlaying) {
            stop();
            setIsPlaying(false);
        } else if (!isPlaying) {
            setIsPlaying(true);
            birdSound();
        }
    };

    useEffect(() => {
        // Stop the audio when answer is correct or when user moves to next item then stop playing the audio
        setIsPlaying(false)
        stop();
        // Cleanup when component unmounts
        return () => {
            stop();
        };
    }, [isCorrect, next]);

    return (
        <IconButton onClick={handlePlaySound}>
            {isPlaying
                ? <ReplayIcon style={{color: 'darkgrey'}} fontSize={"large"}/>
                : <PlayCircleFilledIcon style={{color: 'darkgrey'}} fontSize="large"/>}
        </IconButton>
    )
}
