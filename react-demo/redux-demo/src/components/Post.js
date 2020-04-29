import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction'
import './Post.css'
import Postform from './PostForm'

class Post extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  componentWillReceiveProps(nextProp) {
    if (nextProp.newPost) {
      this.props.posts.unshift(nextProp.newPost)
    }
  }

  render() {
    const dataList = this.props.posts.splice(0,10).map((item) => (
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

// 定义属性类型
Post.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.data,
  newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Post)