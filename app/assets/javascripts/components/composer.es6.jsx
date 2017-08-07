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
                <textarea onChange={props.handleStatusUpdate} className="form-control" rows="3" placeholder={props.imagePreview ? 'Say something about this photo...' : `What's up, ${props.current_user}?`} value={props.composerContent} />
              </div>
            </div>
            { props.imagePreview && <img src={props.imagePreviewUrl} className="img-responsive" alt="" /> }
          </div>
        </div>
        <div className="panel-footer">
          <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <div className="pull-left">
                      { !props.imagePreview &&
                        <span className="btn btn-success btn-sm btn-file">
                          <span className="glyphicon glyphicon-picture" aria-hidden="true"></span>
                          <input onChange={props.handleImageChange} type="file" />
                        </span>
                      }
                      <input type="hidden" name="avatar_cache" />
                      { props.imagePreview &&
                        <button onClick={props.handlePreviewRemoval} className="btn btn-danger btn-sm">
                          {/* <span className="glyphicon glyphicon-remove" aria-hidden="true"> Remove Photo</span> */}
                          Remove Photo
                        </button>
                      }
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
