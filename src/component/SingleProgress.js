import React from 'react'
import './single_progress.css'
class SingleProgress extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      progressSignStyle: {
        borderRadius: '0',
        border: '2px solid black',
        width: '100px',
        height: '100px',
        display: 'grid',
        alignItems: 'center'
      }
    }
  }

  componentDidMount() {
    this.setState((state, props) => {
      return {
        progressSignStyle: {
          borderRadius: props.x.borderRadius ? props.x.borderRadius : '50%',
          border: '2px solid black',
          width: '50px',
          height: '50px',
          display: 'grid',
          alignItems: 'center'
        }
      }
    })
    console.log(this.props)
  }

  render() {
    const styles = { sign: this.state.progressSignStyle }
    console.log(this.props.align)
    if (this.props.align === 'left') {
      return (
        <div
          style={{
            display: 'grid',
            gridTemplateRows: '1fr',
            gridTemplateColumns: 'repeat(3, auto)',
            alignItems: 'center',
            gridGap: '5px'
          }}
        >
          <div style={styles.sign}>{this.props.x.sign}</div>
          <div>{this.props.x.progressName}</div>
          <div
            style={{
              borderTop: 'thick solid black',
              width: '100px',
              height: '0'
            }}
          />
        </div>
      )
    } else {
      return (
        <div
          style={{
            display: 'grid',
            gridTemplateRows: '1fr',
            gridTemplateColumns: 'repeat(3, auto)',
            alignItems: 'center',
            gridGap: '5px'
          }}
        >
          <div
            style={{
              borderTop: 'thick solid black',
              width: '100px',
              height: '0'
            }}
          />
          <div>{this.props.x.progressName}</div>
          <div style={styles.sign}>{this.props.x.sign}</div>
        </div>
      )
    }
  }
}
export default SingleProgress
