class Posts extends React.Component {
  render () {
    const { posts } = this.props;
    
    return(
      <div>
        {posts.map((post) => {
          return(
            <Post key={post.id} content={post.content} owner={post.user.name} created={post.created_at} />
          );
        })}
      </div>
    );
  }
}
