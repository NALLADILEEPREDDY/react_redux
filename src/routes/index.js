import React,{Component} from 'react'
import {Switch,Route} from 'react-router'
import NavBar from '../_components/navbar'
import Home from '../_components/home'
import PostDisplay from '../_components/PostsDisplay';
import PostForm from '../_components/AddPost';
import Page404 from '../_components/Page404';


export default class Routes extends Component{
    render() {
        return (
          <div>
              <NavBar/>
              <Switch>
                <Route exact component={Home} path= '/home'/>
                <Route exact component={PostForm} path= '/addpost' />
                <Route exact component={PostDisplay} path= '/postsdisplay' />
                <Route exact component={Home} path='/' />
                <Route component={Page404}/>
              </Switch>
          </div>
      );
    }
}