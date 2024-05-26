import {Tilt} from "react-tilt";
import ImageBox from "../components/image_box.tsx";
import DisplayAnswer from "../components/display_answer.tsx";
import InputBox from "../components/input_box.tsx";
import * as React from "react";

const defaultTiltOptions = {
    reverse: false,  // reverse the tilt direction
    max: 10,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.05,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}
/**
 * Visual Mode
 * @param isCorrect
 * @param setIsCorrect
 * @param birdIdObject
 * @param error
 * @param setError
 * @param answer
 * @param setAnswer
 * @param showAnswer
 * @param setShowAnswer
 * @param handleNextBird
 * @constructor
 */
export default function BirdVisualMode({
                                           isCorrect, setIsCorrect,
                                           birdIdObject,
                                           error, setError,
                                           answer, setAnswer,
                                           showAnswer, setShowAnswer,
                                           handleNextBird
                                       }): React.ReactElement {
    return (
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column',}}>
            <Tilt options={defaultTiltOptions}>
                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <ImageBox isCorrect={isCorrect} birdIdObject={birdIdObject}
                              setShowAnswer={setShowAnswer}
                    />
                    {showAnswer
                        ? <DisplayAnswer birdIdObject={birdIdObject} handleNextBird={handleNextBird}/>
                        : ""}
                </div>
            </Tilt>
            <InputBox birdIdObject={birdIdObject}
                      isCorrect={isCorrect} setIsCorrect={setIsCorrect}
                      answer={answer} setAnswer={setAnswer}
                      error={error} setError={setError}
                      showAnswer={showAnswer} setShowAnswer={setShowAnswer}
            />
        </div>
    )
}

