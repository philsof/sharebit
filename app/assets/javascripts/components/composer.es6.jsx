function Composer(props) {
  return(
    <form onSubmit={props.handleSubmit}>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title"><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span> Create a Post</h4>
        </div>
        <div className="panel-body">
          <div className="media">
            <div className="media-left">
              <a href="#">
                <img className="media-object" src="..." alt="..." />
              </a>
            </div>
            <div className="media-body">
              <div className="form-group">
                <textarea onChange={props.handleStatusUpdate} className="form-control" rows="3" placeholder={`What's up, ${props.current_user}?`} value={props.composerContent} />
              </div>
            </div>
          </div>
        </div>
        <div className="panel-footer">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <div className="pull-left">
                  <span className="btn btn-success btn-sm btn-file">
                    <span className="glyphicon glyphicon-picture" aria-hidden="true"></span> <input onChange={props.handleFileUpload} type="file" />
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <div className="pull-right">
                  <input type="submit" className="btn btn-primary btn-sm" value="Post"></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
