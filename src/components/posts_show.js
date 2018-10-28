import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick = () => {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  };

  render() {
    const { post } = this.props;
    if (!post) return <div>Loading...</div>;

    const { title, categories, content } = post;
    return (
      <div>
        <Link to="/">All Posts</Link>
        <button
          onClick={this.onDeleteClick}
          className="btn btn-danger pull-xs-right">
          Delete Post
        </button>
        <h3>{title}</h3>
        <h6>Categories: {categories}</h6>
        <p>{content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  const { id } = ownProps.match.params;
  return { post: posts[id] };
}

export default connect(
  mapStateToProps,
  { fetchPost, deletePost }
)(PostsShow);
