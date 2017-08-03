class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
    this.addPost = this.addPost.bind(this);
  }

  componentDidMount() {
    this.setState({ posts: this.props.posts });
  }

  addPost(post) {
    this.setState(prevState => ({
      posts: [post, ...prevState.posts],
    }));
  }

  render () {
    const { posts } = this.state;
    return(
      <div className="container-fluid">
        <div className="row">
          <Navbar />
        </div>

        <Dashboard
          posts={posts}
          handleNewPost={this.addPost}
          current_user={this.props.current_user}
        />
      </div>
    );
  }
}
