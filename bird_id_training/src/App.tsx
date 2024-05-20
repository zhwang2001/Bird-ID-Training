import { useState, useEffect } from 'react'
import './App.css'
import InputBox from './views/input_box.tsx'
import ImageBox from './views/image_box.tsx'
import DisplayAnswer from './views/display_answer.tsx'
import { ImageAndTextData } from './controllers/answer_box_controller'
import {Tilt} from "react-tilt";

/**
 * App for Bird ID training
 * @returns ReactElement
 */

const defaultOptions = {
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

function App() {
  // const [correct_answers, set_correct_answers] = useState(0)

  const [birdIdObject, setBirdIdObject] = useState([])
  //State management for showing either green or default color, used to move onto next flashcard
  const [isCorrect, setIsCorrect] = useState(false)
  //State management for showing the next bird
  const [next, setNext] = useState(false)
  //State management for storing user's answer
  const [answer, setAnswer] = useState('')
  //State management for showing either red or default color
  const [error, setError] = useState(false)
  //State management for controlling showing the correct answer
  const [showAnswer, setShowAnswer] = useState(false)


  const handleNextBird = () => {
    setNext(!next)
    setShowAnswer("")
    setAnswer("")
    setIsCorrect(false)
    setAnswer("")
    setError(false)
  }

  useEffect(() => {
    //Randomly select a bird from the condensed array of birds
    ImageAndTextData()
      .then(full_array => {
        const randomNumber = Math.floor(Math.random() * full_array?.length + 1)
        const IdObject = full_array[randomNumber]
        setBirdIdObject(IdObject)
      })
      .catch(error => console.log(error));
  }, [next])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', }}>
        <Tilt options={defaultOptions}>
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <ImageBox isCorrect={isCorrect} birdIdObject={birdIdObject}
                      handleNextBird={handleNextBird}
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
export default App
