class Newsfeed extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { handleStatusUpdate, composerContent, handleSubmit,
            handleImageChange, handlePreviewRemoval, current_user, posts, imagePreview, imagePreviewUrl } = this.props;
    return(
      <div className="col-md-5">
        <Composer
          handleStatusUpdate={handleStatusUpdate}
          handleImageChange={handleImageChange}
          handleSubmit={handleSubmit}
          handlePreviewRemoval={handlePreviewRemoval}
          composerContent={composerContent}
          current_user={current_user.name}
          imagePreviewUrl={imagePreviewUrl}
          imagePreview={imagePreview}
        />

        <Posts posts={posts} />
      </div>
    );
  }
}
