import React,{Component}  from "react";
import {connect} from 'react-redux'
import {fetchPost} from '../_actions/postActions'
import {PropTypes} from 'prop-types'
class PostDisplay extends Component {
    
    componentWillMount() {
        this.props.fetchPost()
    }
    componentWillReceiveProps(nextProps) {
        console.log('hhh')
        if (nextProps.newPost) {
            console.log('kkkk')
          this.props.posts.unshift(nextProps.newPost);
        }
      }
    
    
    render() {
        const postData = this.props.posts.map(post=>(
            <div key={post.Id}>
               <table id="customers">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                    </tr>
                    <tr>
                        <td>{post.name}</td>
                        <td>{post.email}</td>
                        <td>{post.body}</td>
                    </tr>
                </table>
            </div>)
        )
        
        return (
            <div>
               {postData}
            </div>
        )
    }
}
PostDisplay.propTypes = {
    fetchPost: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
  };
const mapStateToProps = () => state => ({
    posts : state.posts.posts,
    newPost : state.posts.post
})
export default  connect(mapStateToProps, {fetchPost})(PostDisplay)