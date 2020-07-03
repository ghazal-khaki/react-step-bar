import React from 'react'

import { ExampleComponent } from 'react-progress-bar'
import 'react-progress-bar/dist/index.css'

const App = () => {
  return (
    <ExampleComponent
      levelOfProgresses={[
        { progressName: 'aaa', sign: 1, borderRadius: '20%' },
        { progressName: 'bbb', sign: 2 }
      ]}
      progressBarAlign='right'
    />
  )
}

export default App
