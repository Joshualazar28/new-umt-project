import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const TSPostList = ({ blogs,user }) => {
  const checkuser = (_id) => {
    if(user == "admin")
    {
      return (
        <Fragment>
        <Link  to={`/delete/${_id}`} className="posts_icons">
        <img  className="posts_img" src="data:image/png;base64,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" alt="delete icon" width="25" heigth="25" />
        </Link>
        <Link to={`/update/${_id}`} className="posts_icons">
        <img   className="posts_img" src="data:image/png;base64,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" alt="update icon" width="30" heigth="30" />
        </Link>
        </Fragment>)
    }
    else return null;
  }
  return (
    <div className="post-list">
      {blogs.map( blog => (
        <div className="blog-preview" key={blog._id} >
          <Link to={`/tsblogs/${blog._id}`}><h4>{blog.title.toUpperCase()}</h4>
          <p><b>Publish Date:</b> {blog.date}</p>
          </Link>
          <div className="check">
              {checkuser(blog._id)}
          </div>
        </div>
      )
      )}
    </div>
  );
}
 
export default TSPostList;