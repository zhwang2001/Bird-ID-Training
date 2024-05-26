import {IconButton} from "@mui/material";
import PropTypes from "prop-types";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ReplayIcon from '@material-ui/icons/Replay';
import {useEffect} from "react";

export default function SoundBox({isCorrect, isPlaying, setIsPlaying, birdSound, stop, next}) {

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

SoundBox.propTypes = {
    birdIdObject: PropTypes.shape({
        filepaths: PropTypes.string.isRequired,
    }).isRequired,
    isCorrect: PropTypes.bool.isRequired,
    setShowAnswer: PropTypes.func.isRequired,
};