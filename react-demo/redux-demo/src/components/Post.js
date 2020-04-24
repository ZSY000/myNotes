import React, { Component } from 'react'
import './Post.css'
import Postform from './PostForm'

export default class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount () {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((res) => {
      this.setState({
        data: res
      })
    })
  }
  render() {
    const dataList = this.state.data.splice(0,10).map((item) => (
        <div key={item.id} className='box'>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      )
    )
    
    return (
      <div>
        <h1>Datalist</h1>
        <Postform />
        {dataList}
      </div>
    )
  }
}
