// import { useState } from 'react'
import './App.css'
import Answer_Box from './views/answer_box'
import Image_Box from './views/image_box'

/**
 * App for Bird ID training
 * @returns ReactElement
 */
function App() {
  // const [correct_answers, set_correct_answers] = useState(0)

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', }}>
      <Image_Box />
      <Answer_Box />
    </div>
  )
}
export default App
