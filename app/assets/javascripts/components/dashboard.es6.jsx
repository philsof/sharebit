class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      attachment: '',
      imagePreviewUrl: '',
      imagePreview: false,
    }
    this.handleStatusUpdate   = this.handleStatusUpdate.bind(this);
    this.handleImageChange    = this.handleImageChange.bind(this);
    this.handleSubmit         = this.handleSubmit.bind(this);
    this.handlePreviewRemoval = this.handlePreviewRemoval.bind(this);
  }

  handleStatusUpdate(e) {
    this.setState({content: e.target.value});
  }

  handleImageChange(e) {
    e.preventDefault();

    const reader      = new FileReader();
    const attachment  = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        attachment: attachment,
        imagePreviewUrl: reader.result,
        imagePreview: !this.state.imagePreview,
      });
    }
    reader.readAsDataURL(attachment);
  }

  handlePreviewRemoval(e) {
    // e.preventDefault();
    this.setState({
      imagePreview: !this.state.imagePreview,
      attachment: '',
      imagePreviewUrl: '',
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.content.length < 1 && this.state.imagePreviewUrl.length < 1 ) {
      alert('This post appears to be blank. Please write something or attach a link or photo to post.');
      return
    }

    const { handleNewPost } = this.props;

    $.post('/posts', { post: {content: this.state.content, attachment: this.state.imagePreviewUrl} }, (data) => {
      console.log(data);
      handleNewPost(data);
    });

    this.state.imagePreviewUrl && this.setState({ imagePreview: !this.state.imagePreview });

    this.setState({
      content: '',
      attachment: '',
      imagePreviewUrl: '',
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
              handleImageChange={this.handleImageChange}
              handlePreviewRemoval={this.handlePreviewRemoval}
              composerContent={this.state.content}
              imagePreviewUrl={this.state.imagePreviewUrl}
              imagePreview={this.state.imagePreview}
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
