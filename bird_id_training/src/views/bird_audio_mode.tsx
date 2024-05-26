import * as React from "react";
import SoundBox from "../components/sound_box.tsx";
import DisplayAnswer from "../components/display_answer.tsx";
import InputBox from "../components/input_box.tsx";
import HelpIcon from '@material-ui/icons/Help';
import {IconButton} from "@mui/material";
import {useState, useEffect} from "react";
import useSound from "use-sound";

/**
 * Audio mode component
 * @constructor
 */
export default function BirdAudioMode({
                                          isCorrect, setIsCorrect,
                                          error, setError,
                                          birdIdObject,
                                          answer, setAnswer,
                                          showAnswer, setShowAnswer,
                                          handleNextBird, next
                                      }): React.ReactElement {

    //tracks if audio is playing
    const [isPlaying, setIsPlaying] = useState(false);
    //stores birdSound function and stop play functionality
    const [birdSound, {stop}] = useSound(`/archive/bird_sounds/${birdIdObject.filepaths}`, {
        format: ['mp3'], volume: 0.5, onend: () => setIsPlaying(false),
    });

    const handleShowAnswer = () => {
        setShowAnswer(true);
        setIsCorrect(false);
        setIsPlaying(false);
        stop()
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column',}}>
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <SoundBox isCorrect={isCorrect} birdIdObject={birdIdObject}
                          isPlaying={isPlaying} setIsPlaying={setIsPlaying}
                          birdSound={birdSound} stop={stop} next={next}
                />
                {showAnswer
                    ? <DisplayAnswer birdIdObject={birdIdObject} handleNextBird={handleNextBird}/>
                    : <div style={{display: 'flex', flexDirection: 'row'}}>
                        <InputBox birdIdObject={birdIdObject}
                                  isCorrect={isCorrect} setIsCorrect={setIsCorrect}
                                  answer={answer} setAnswer={setAnswer}
                                  error={error} setError={setError}
                                  showAnswer={showAnswer} setShowAnswer={setShowAnswer}
                        />
                        {(isPlaying
                            ? <IconButton onClick={handleShowAnswer}>
                                <HelpIcon style={{color: 'darkgray'}} fontSize="medium" color={"action"}/>
                            </IconButton>
                            : "")}
                    </div>
                }
            </div>
        </div>
    )
}
