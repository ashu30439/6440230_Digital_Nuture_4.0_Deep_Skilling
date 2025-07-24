
import React from 'react';

class Post extends React.Component {
  render() {
    const { title, body } = this.props;
    return (
      <div style={{ border: '1px solid #ccc', padding: '1em', margin: '1em 0' }}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;
