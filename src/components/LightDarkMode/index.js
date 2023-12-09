// Write your code here
import './index.css'

import {Component} from 'react'

class LightDarkMode extends Component {
  state = {LightStatus: 'Light Mode'}

  changeMode = () => {
    const {LightStatus} = this.state
    if (LightStatus === 'Dark Mode') {
      this.setState({LightStatus: 'Light Mode'})
    } else {
      this.setState({LightStatus: 'Dark Mode'})
    }
  }

  render() {
    const {LightStatus} = this.state

    let status
    if (LightStatus === 'Light Mode') {
      status = (
        <div className="container1">
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button1" type="button" onClick={this.changeMode}>
            {LightStatus}
          </button>
        </div>
      )
    } else {
      status = (
        <div className="container2">
          <h1 className="heading1">Click To Change Mode</h1>
          <button className="button2" type="button" onClick={this.changeMode}>
            {LightStatus}
          </button>
        </div>
      )
    }

    return <div className="container">{status}</div>
  }
}

export default LightDarkMode
