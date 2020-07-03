import React from 'react'
import styles from './styles.module.css'
import SingleProgress from './component/SingleProgress'

export const ExampleComponent = ({ levelOfProgresses, progressBarAlign }) => {
  return (
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
            align={progressBarAlign || 'left'}
            key={index}
            x={item}
          />
        )
      })}
    </div>
  )
}
