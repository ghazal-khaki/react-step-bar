import React from 'react'
import styles from './styles.module.css'
import SingleProgress from './component/SingleProgress'

export const ExampleComponent = ({ levelOfProgresses, progressBarAlign }) => {
  return (
    <div>
      {levelOfProgresses && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${levelOfProgresses.length}, auto)`,
            justifyContent: progressBarAlign || 'left',
            gridGap: '5px'
          }}
          className={styles.test}
        >
          {levelOfProgresses.map((item, index) => {
            return (
              <SingleProgress
                countOfSteps={levelOfProgresses.length}
                index={index}
                align={progressBarAlign || 'left'}
                key={index}
                step={item}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
