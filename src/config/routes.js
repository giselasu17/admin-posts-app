import React from 'react';
import { Router, Route, IndexRoute, hashHistory  } from 'react-router';

import Main from '../components/main';
import Home from '../components/home';
import AddPost from '../components/addPost';
import ShowPost from '../components/showPost';

const Routes = () => (
    <Router history = {hashHistory}>
        <Route path = "/" component = {Main}>
            <IndexRoute component = {Home}/>
            <Route path = "posts/add" component = {AddPost}/>
            <Route path = "posts/:id" component = {ShowPost} />
        </Route>
    </Router>
)

export default Routes;
