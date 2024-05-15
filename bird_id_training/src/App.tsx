import { useState, useEffect } from 'react'
import './App.css'
import Answer_Box from './views/answer_box'
import Image_Box from './views/image_box'
import { ImageAndTextData } from './controllers/answer_box_controller'

/**
 * App for Bird ID training
 * @returns ReactElement
 */
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
  //State management for showing the right answer
  const [showAnswer, setShowAnswer] = useState("")
  //State management for disabling textfield
  const [disable, setDisable] = useState(false)


  const handleNextBird = () => {
    setNext(!next)
    setShowAnswer("")
    setAnswer("")
    setIsCorrect(false)
    setAnswer("")
    setDisable(false)
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
      <Image_Box isCorrect={isCorrect} birdIdObject={birdIdObject} handleNextBird={handleNextBird} showAnswer={showAnswer} setShowAnswer={setShowAnswer} disable={disable} setDisable={setDisable} error={error} setError={setError} />
      <Answer_Box birdIdObject={birdIdObject} isCorrect={isCorrect} setIsCorrect={setIsCorrect} answer={answer} setAnswer={setAnswer} error={error} setError={setError} disable={disable} setDisable={setDisable} showAnswer={showAnswer} setShowAnswer={setShowAnswer} />
    </div>
  )
}
export default App
