import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSinglePost, deletePost } from '../_actions/postActions'
import { Container, Box, Button, Typography, makeStyles } from '@material-ui/core';


class Post extends Component {
 
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  }
  handleEdit = () => {
    console.log('in the edit component')
  }
  componentDidMount() {
    let id = this.props.match.params.postId
    console.log(id)
    this.props.fetchSinglePost(id)
  }
 render() {
            const classes = makeStyles(theme => ({
                button: {
                margin: theme.spacing(1),
            },
gi                 input: {
                  display: 'none',
            },
        }));
      const post = this.props.post ? (
      <Box      textAlign="center" 
                fontStyle="oblique" 
                fontFamily="Monospace"
                fontWeight="fontWeightBold">
        <Typography className="center">{this.props.post.title}</Typography>
        <Typography>{this.props.post.body.toString()}</Typography>
        <Button variant="contained" color="primary" className={classes.button} onClick={this.handleEdit}>
        Edit
      </Button>
      <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleClick}>
        Delete
      </Button>

      </Box>
    ) : (
      <div className="center">Loading post...</div>
    );

    return (
      <Container>
        {post}
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.posts.post
  }
}
export default connect(mapStateToProps,{fetchSinglePost, deletePost})(Post)