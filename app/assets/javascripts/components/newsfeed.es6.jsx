class Newsfeed extends React.Component {
  render () {
    const { handleStatusUpdate, composerContent, handleSubmit, handleFileUpload, current_user } = this.props;
    return(
      <div className="col-md-5">
        <Composer
          handleStatusUpdate={handleStatusUpdate}
          composerContent={composerContent}
          handleSubmit={handleSubmit}
          handleFileUpload={handleFileUpload}
          current_user={current_user.name}
        />


      </div>
    );
  }
}
