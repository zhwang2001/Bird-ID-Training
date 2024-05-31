import {useState, useEffect} from 'react'
import './App.css'
import {ImageAndTextData} from './controllers/answer_box_controller.ts'
import {birdIdObjectType} from './birdTypes/birdTypes.ts'
import BirdSelector from "./views/birdSelector.tsx";
import * as React from "react";
import BirdVisualMode from "./views/bird_visual_mode.tsx";
import BirdAudioMode from "./views/bird_audio_mode.tsx";

//TODO

/**
 * App for Bird ID training
 * @returns ReactElement
 */

const birdNames: string[] = [
    '--SELECT All--', 'AMERICAN GOLDFINCH', 'AMERICAN REDSTART', 'GRAY CATBIRD', 'AMERICAN ROBIN', 'EUROPEAN STARLING',
    'RED WINGED BLACKBIRD', 'COMMON STARLING', 'NORTHERN CARDINAL',
    'MOURNING DOVE', 'BLACK THROATED WARBLER',
    'WINTER WREN', 'COMMON MERGANSER', 'BLUE JAY', 'COMMON GRACKLE', 'CEDAR WAXWING',
    'BLACK-CAPPED CHICKADEE', 'DOWNY WOODPECKER', 'HAIRY WOODPECKER', 'PILEATED WOODPECKER',
    'RED CROSSBILL', 'PINE GROSBEAK', 'WHITE-WINGED CROSSBILL', 'RED HEADED WOODPECKER', 'EVENING GROSBEAK',
    'PURPLE FINCH', 'HOUSE FINCH',
    'PINE SISKIN', 'CANADA GOOSE', 'GREEN HERON', 'RED BELLIED WOODPECKER', 'COMMON REDPOLL', 'BLUE-HEADED VIREO', 'CLIFF SWALLOW', 'HERMIT THRUSH', 'WHITE THROATED SPARROW', 'NASHVILLE WARBLER',
    'BANK SWALLOW', 'RED-BREASTED NUTHATCH', 'WHITE-BREASTED NUTHATCH', 'HOUSE WREN', 'SONG SPARROW', 'AMERICAN CROW', 'NORTHERN ROUGH-WINGED SWALLOW', 'MAGNOLIA WARBLER', 'COMMON YELLOWTHROAT', 'SHARP-SHINNED HAWK',
    'YELLOW WARBLER', 'BLACK-AND-WHITE WARBLER', 'YELLOW-RUMPED WARBLER', 'CHIMNEY SWIFT', 'RING-BILLED GULL', 'EASTERN PHOEBE', 'GREAT CRESTED FLYCATCHER', 'EASTERN KINGBIRD', 'WARBLING VIREO', 'RED-EYED VIREO', 'TENNESSEE WARBLER',
    'TURKEY VULTURE', 'KILLDEAR', 'NORTHERN FLICKER', 'BARN SWALLOW', 'NORTHERN PARULA', 'MALLARD DUCK', 'BLUE HERON', 'TREE SWALLOW', 'CHIPPING SPARROW', 'SCARLET TANAGER', 'GOLDEN CROWNED KINGLET',
    'ROSE BREASTED GROSBEAK', 'INDIGO BUNTING', 'RED TAILED WALK', 'BALTIMORE ORIOLE', 'BAY-BREASTED WARBLER', 'CAPE MAY WARBLER', 'BROWN HEADED COWBIRD'
]


function App() {

    //State management for selecting the visual or audio mode
    const [mode, setMode] = useState<string>("")
    //State management for storing a specific row of the CSV file
    const [birdIdObject, setBirdIdObject] = useState<birdIdObjectType | unknown>({})
    //State management for showing either green or default color, used to move onto next flashcard
    const [isCorrect, setIsCorrect] = useState(false)
    //State management for showing the next bird (rerender useEffect hook)
    const [next, setNext] = useState(false)
    //State management for storing user's answer
    const [answer, setAnswer] = useState('')
    //State management for showing either red or default color
    const [error, setError] = useState(false)
    //State management for controlling showing the correct answer
    const [showAnswer, setShowAnswer] = useState(false)
    //State management for storing the selected birds
    const [selectedBirds, setSelectedBirds] = useState<string[]>([])
    //State Management for dialog boxes
    const [open, setOpen] = React.useState(false);

    const handleNextBird = () => {
        setNext(!next)
        setShowAnswer(false)
        setAnswer("")
        setIsCorrect(false)
        setError(false)
    }

    useEffect(() => {
        //Randomly select a bird from the condensed array of birds
        ImageAndTextData({selectedBirds, mode})
            .then((fullArray: unknown[] | undefined | birdIdObjectType[]): void => {
                if (fullArray && fullArray.length > 0) {
                    const randomNumber: number = Math.floor(Math.random() * fullArray?.length)
                    const IdObject: unknown = fullArray[randomNumber]
                    setBirdIdObject(IdObject)
                }
            })
            .catch(error => console.log(error));
    }, [selectedBirds, next])

    return (
        //once at least 1 bird has been selected and the dialogue box is shown then show flashcards
        selectedBirds.length !== 0 && !open
            //Mode selector
            ? (mode === "visual"
                ? <BirdVisualMode
                    isCorrect={isCorrect} setIsCorrect={setIsCorrect}
                    error={error} setError={setError}
                    birdIdObject={birdIdObject}
                    answer={answer} setAnswer={setAnswer}
                    showAnswer={showAnswer} setShowAnswer={setShowAnswer}
                    handleNextBird={handleNextBird}
                />
                : <BirdAudioMode
                    isCorrect={isCorrect} setIsCorrect={setIsCorrect}
                    error={error} setError={setError}
                    birdIdObject={birdIdObject}
                    answer={answer} setAnswer={setAnswer}
                    showAnswer={showAnswer} setShowAnswer={setShowAnswer}
                    handleNextBird={handleNextBird}
                    next={next}
                />)
            : <BirdSelector birdNames={birdNames.sort()}
                            selectedBirds={selectedBirds} setSelectedBirds={setSelectedBirds}
                            open={open} setOpen={setOpen}
                            setMode={setMode}
            />
    )
}

export default App
