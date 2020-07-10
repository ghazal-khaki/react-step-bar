import React from 'react'

import { ExampleComponent } from 'react-progress-bar'
import 'react-progress-bar/dist/index.css'

const App = () => {
  return (
    <ExampleComponent
      levelOfProgresses={[
        { progressName: 'level one', sign: 1, borderRadiusOfSign: '20%' },
        { progressName: 'level two', sign: 2 },
        { progressName: 'level two', sign: 3 },
      ]}
      // progressBarAlign='right'
    />
  )
}

export default App
