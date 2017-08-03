function Post(props) {
  const timeago = date => {
    return $.timeago(date);
  }

  return(
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="media">
          <div className="media-left">
            <a href="#">
              <img className="media-object" src="..." alt="..." />
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading"><a href="#">{props.owner}</a></h4>
            <small className="text-muted">{timeago(props.created)}</small>
          </div>
        </div>

        <p className="lead text-justify">{props.content}</p>
        <hr/>
        <ul className="list-inline">
          <li>
            <button type="button" className="btn btn-link">
              <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> Like
            </button>
          </li>
          <li>
            <button type="button" className="btn btn-link">
              <span className="glyphicon glyphicon-comment" aria-hidden="true"></span> Comment
            </button>
          </li>
        </ul>
      </div>

      <div className="panel-footer">
        <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> 1
        <hr/>
        <div className="media">
          <div className="media-left">
            <a href="#">
              <img className="media-object" src="..." alt="..." />
            </a>
          </div>
          <div className="media-body">
            <div className="form">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Write a comment..." />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">Comment</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
