import React from 'react'
import {Switch,Route} from 'react-router'
import Home from '../_components/home'
import PostDisplay from '../_components/PostsDisplay';
import PostForm from '../_components/AddPost';

const Routes = () =>{
    return (
            <Switch>
                <Route path="/" exact component = {Home}/>
                <Route path="/postsdisplay" exact component = {PostDisplay}/>
                <Route path="/addpost" exact  component = {PostForm}/>
            </Switch>
    )
}
export default Routes