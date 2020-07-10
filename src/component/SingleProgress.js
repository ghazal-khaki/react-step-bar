import React from 'react'
import './single_progress.css'
class SingleProgress extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      progressSignStyle: {},
      progressNameStyle: {},
      borderStyle: {},
      stepStyle: {
        display: 'grid',
        gridTemplateRows: '1fr',
        gridTemplateColumns: 'repeat(3, auto)',
        alignItems: 'center',
        gridGap: '5px'
      }
    }
  }

  componentDidMount() {
    if (this.props.align === 'right') {
      document.body.style.direction = 'rtl'
    }
    this.setState((state, props) => {
      const userSetting = props.step
      return {
        progressSignStyle: {
          borderRadius: userSetting.borderRadiusOfSign
            ? userSetting.borderRadiusOfSign
            : '50%',
          border: userSetting.borderOfSign
            ? userSetting.borderOfSign
            : '2px solid black',
          width: userSetting.widthOfSign ? userSetting.widthOfSign : '50px',
          height: userSetting.heightOfSign ? userSetting.heightOfSign : '50px',
          display: 'grid',
          alignItems: 'center'
        },
        progressNameStyle: {
          color: userSetting.progressNameColor
            ? userSetting.progressNameColor
            : '',
          fontSize: userSetting.progressNameFontSize
            ? userSetting.progressNameFontSize
            : ''
        },
        borderStyle: {
          borderTop: userSetting.borderTopOfBorder
            ? userSetting.borderTopOfBorder
            : 'thick solid black',
          width: userSetting.widthOfBorder
            ? userSetting.widthOfBorder
            : '100px',
          height: '0'
        }
      }
    })
  }

  render() {
    const styles = {
      sign: this.state.progressSignStyle,
      progress: this.state.progressNameStyle,
      border: this.state.borderStyle,
      step: this.state.stepStyle
    }
    return (
      <div style={styles.step}>
        <div style={styles.sign}>{this.props.step.sign}</div>
        <div style={styles.progress}>{this.props.step.progressName}</div>
        {this.props.index !== this.props.countOfSteps - 1 && (
          <div style={styles.border} />
        )}
      </div>
    )
  }
}
export default SingleProgress
