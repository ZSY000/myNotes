import React, { Component } from 'react'
import './PostForm.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { createPost } from '../actions/postAction'

class PostForm extends Component {
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

      // 触发action
      this.props.createPost(data)
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

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}

// View不需要改变，所以第一个参数为null
export default connect(null, { createPost })(PostForm)