import {Dispatch, SetStateAction} from "react";

type handleNextBirdType = () => void

type csvRow = {
    'class id': string,
    filepaths: string,
    labels: string,
    'data set': string,
    'scientific name': string,
}
export type birdIdObjectType = csvRow | unknown

export interface InputBoxProps {
    birdIdObject: birdIdObjectType
    isCorrect: boolean
    setIsCorrect: Dispatch<SetStateAction<boolean>>
    answer: string
    setAnswer: Dispatch<SetStateAction<string>>
    error: boolean
    setError: Dispatch<SetStateAction<boolean>>
    showAnswer: boolean
    setShowAnswer: Dispatch<SetStateAction<boolean>>
}

export interface soundBoxProps {
    isCorrect: boolean
    isPlaying: boolean
    setIsPlaying: Dispatch<SetStateAction<boolean>>
    birdSound: () => void
    stop: () => void
    next: boolean
}

export interface displayAnswerProps {
    birdIdObject: birdIdObjectType
    handleNextBird: handleNextBirdType
}

export interface birdAudioModeProps {
    isCorrect: boolean;
    setIsCorrect: Dispatch<SetStateAction<boolean>>
    error: boolean
    setError: Dispatch<SetStateAction<boolean>>
    birdIdObject: birdIdObjectType
    answer: string
    setAnswer: Dispatch<SetStateAction<string>>
    showAnswer: boolean
    setShowAnswer: Dispatch<SetStateAction<boolean>>
    handleNextBird: handleNextBirdType
    next: boolean
}

export interface birdVisualModeProps {
    isCorrect: boolean
    setIsCorrect: Dispatch<SetStateAction<boolean>>
    birdIdObject: birdIdObjectType
    error: boolean
    setError: Dispatch<SetStateAction<boolean>>
    answer: string
    setAnswer: Dispatch<SetStateAction<string>>
    showAnswer: boolean
    setShowAnswer: Dispatch<SetStateAction<boolean>>
    handleNextBird: handleNextBirdType
}

export interface birdSelectorProps {
    birdNames: string[]
    selectedBirds: string[]
    setSelectedBirds: Dispatch<SetStateAction<string[]>>
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    setMode: Dispatch<SetStateAction<string>>
}
