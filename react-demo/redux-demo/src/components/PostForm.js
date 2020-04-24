import React, { Component } from 'react'
import './PostForm.css'

export default class PostForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
    this.titleChange = (e) => {
      
      this.setState({
        title: e.target.value
      })
    }
    this.bodyChange = (e) => {
      this.setState({
        body: e.target.value
      })
    }
    this.submitFn = (e) => {
      e.preventDefault() // 阻止默认行为
      const data = {
        title: this.state.title,
        body: this.state.body
      }
      fetch('http://jsonplaceholder.typicode.com/posts', {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: data
      }).then((res) => res.json()).then((res) => {
        console.log(res)
      })
    }
  }
  render() {
    return (
      <form className="formStyle">
        <label>Title: </label>
        <input type="text" name="title" onChange={this.titleChange}/> <br/>
        <label>Content: </label>
        <textarea name="body" onChange={this.bodyChange}/> <br/>
        <input type="submit" value="Submit" onSubmit={this.submitFn}/>
      </form>
    )
  }
}
