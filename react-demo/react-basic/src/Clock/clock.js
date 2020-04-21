import React from 'react'

class Clock extends React.Component {
  constructor (props) {
    super()
    this.state = { date: new Date() }
  }

  componentDidMount () {
    this.id = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.id)
  }

  tick () {
    this.setState({
      date: new Date()
    })
  }

  render () {
    return (
      <h5>现在是 {this.state.date.toLocaleTimeString()}</h5>
    )
  }
}

export default Clock