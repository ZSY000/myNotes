import { FETCH_POSTS, NEW_POSTS } from './types'
export const fetchPosts = () =>
  dispatch => {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: FETCH_POSTS,
          payload: res
        })
      }
    )
  }

export const createPost = data => 
  dispatch => {
    fetch('http://jsonplaceholder.typicode.com/posts', {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: NEW_POSTS,
          payload: res
        })
      }
    )
  }