class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.timeAgo = this.timeAgo.bind(this);
  }

  timeAgo(date) {
    return $.timeago(date);
  }

  render () {
    const { posts } = this.props;

    return(
      <div>
        {posts.map((post) => {
          return(
            <Post
              key={post.id}
              content={post.content}
              image={post.attachment.url}
              owner={post.user.name}
              created={this.timeAgo(post.created_at)}
            />
          );
        })}
      </div>
    );
  }
}
