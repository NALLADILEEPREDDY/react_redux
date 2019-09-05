import {FETCH_POST, ADD_POST } from './actiontypes'

export const fetchPost = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts =>
        dispatch({
          type: FETCH_POST,
          payload: posts
        })
      );
  };
  export const AddPost = postData => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      .then(res => res.json())
      .then(post =>
        dispatch({
          type: ADD_POST,
          payload: post
        })
      );
    }