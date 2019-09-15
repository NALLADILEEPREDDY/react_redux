import React, { Component } from 'react'
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'
import {addPost} from '../_actions/postActions'

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:101,
            title :'',
            body :''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e) {
        this.setState(
           { [e.target.name] : e.target.value }
        )
    }
    onSubmit(e) {
        e.preventDefault();
        const post = {
         id: this.state.id,
         title: this.state.title,
         body: this.state.body
    };
    this.props.addPost(post)
    this.props.history.push('/postsdisplay')
}

    
    render() {
        const inputText = {
             width: '100%',
             padding: '12px 20px',
             margin:' 8px 0',
             display: 'inline-block',
             border: '1px solid #ccc',
             borderRadius: '4px',
             boxSizing: 'borderBox'
        }
        const inputSubmit = {
            width: '100%',
            backgroundColor: '#4CAF50',
            color: 'white',
            padding:'14px 20px',
            margin: '8px 0',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
        }
    
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Id</label>
                    <input style={inputText}
                    type="text" 
                    name="id" 
                    value={this.state.id} 
                    onChange={this.onChange} />

                    <label>Title</label>
                    <input style={inputText}
                    type="text"
                    name="title" 
                    value={this.state.title} 
                    onChange={this.onChange}/>

                    <label>Body</label>
                    <input style={inputText}
                    type="text" 
                    name="body" 
                    value={this.state.body} 
                    onChange={this.onChange}/>

                    <button style ={inputSubmit} type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
PostForm.propTypes = {
    addPost: PropTypes.func.isRequired
  };
export default connect(null,{addPost})(PostForm)