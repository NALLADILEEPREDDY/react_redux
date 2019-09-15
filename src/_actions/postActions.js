import {FETCH_POST, ADD_POST ,DELETE_POST,FETCH_SINGLE_POST} from './actiontypes'


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
  export const addPost = postData => dispatch => {
    console.log(postData)
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
    
    export const deletePost = postId  => dispatch => {
      console.log('in delete')
      console.log(postId)
    fetch('https://jsonplaceholder.typicode.com/posts/postId', {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(post =>
        dispatch({
          type: DELETE_POST,
          payload: post
        })
      ).then(console.log('deleted'));
    }
   export  const fetchSinglePost =(postId)=> dispatch =>{
     fetch('https://jsonplaceholder.typicode.com/posts/'+postId,{
       method:'GET',
       headers: {
        'content-type': 'application/json'
      }
     })
     
      .then(res => res.json())
      .then(post =>
        dispatch({
          type: FETCH_SINGLE_POST,
          payload: post
        })
      ).then(post => console.log(post));
  };