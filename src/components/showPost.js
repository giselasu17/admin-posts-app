import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { Link } from 'react-router';
import { fetchPost, deletePost } from '../actions/actions';

class ShowPost extends Component {
   constructor(props) {
        super(props);
        this.state = {
            post: this.props.fetchPost(this.props.params.id)
        }
    }
   
    onDeleteClick = () => {
        this.props.deletePost(this.props.params.id)
            .then(() => {
                this.context.router.push('/');
            });
    }
    
    render () {
        if (!this.props.post) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <Link to = "/">Back To Index</Link>
                <button 
                    className = "btn btn-danger pull-xs-right"
                    onClick = {this.onDeleteClick}>
                    Delete Post
                </button>
                <h3>{this.props.post.title}</h3>
                <h6>Categories: {this.props.post.categories}</h6>
                <p>{this.props.post.content}</p>
            </div>
        )
    }
}

ShowPost.contextTypes = {
    router: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        post: state.posts.post
    };
}

export default connect(mapStateToProps, {fetchPost: fetchPost, deletePost: deletePost})(ShowPost);