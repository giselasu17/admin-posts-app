import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPosts } from '../actions/actions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.fetchPosts()
        }
    }
   
    renderPosts() {
        if (this.props.posts.length == 0) {
            return <p className="well well-sm"> Empty list</p>
        }
        return this.props.posts.map((post) => {
            return (
                <li className = "list-group-item" key = {post.id}>
                    <Link to = {"posts/" + post.id}>
                        <span className = "pull-xs-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                    </Link>
                </li>
            )
        });
    }

    render() {
        return (
            <div>
                <div className = "text-xs-right">
                    <Link to = "/posts/add" className = "btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                <h3>List of Posts</h3>
                <ul className = "list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        posts: state.posts.all
    };
}

export default connect(mapStateToProps, {fetchPosts: fetchPosts})(Home);