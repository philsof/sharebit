class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      attachment: '',
    }
    this.handleStatusUpdate = this.handleStatusUpdate.bind(this);
    this.handleFileUpload   = this.handleFileUpload.bind(this);
    this.handleSubmit       = this.handleSubmit.bind(this);
  }

  handleStatusUpdate(e) {
    this.setState({content: e.target.value});
  }

  handleFileUpload(e) {
    this.setState({attachment: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const { handleNewPost } = this.props;

    $.post('/posts', { post: this.state }, (data) => {
      console.log(data);
      handleNewPost(data);
    });

    this.setState({
      content: '',
      attachment: '',
    });
  }

  render () {
    const { posts, current_user } = this.props;
    return(
      <div>
        <div className="row">
          <div className="container">
            <div className="col-md-3"></div>

            <Newsfeed
              handleStatusUpdate={this.handleStatusUpdate}
              handleSubmit={this.handleSubmit}
              handleFileUpload={this.handleFileUpload}
              composerContent={this.state.content}
              current_user={current_user}
              posts={posts}
            />

            <div className="col-md-4"></div>

          </div>
        </div>
      </div>
    );
  }
}
