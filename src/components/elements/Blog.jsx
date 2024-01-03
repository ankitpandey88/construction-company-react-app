import user from "../../assets/img/user.jpg";
export default function Blog({ blog }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="bg-light">
        <img className="img-fluid" src={blog.img} alt="" />
        <div className="p-4">
          <div className="d-flex justify-content-between mb-4">
            <div className="d-flex align-items-center">
              <img
                className="rounded-circle me-2"
                src={user}
                width="35"
                height="35"
                alt=""
              />
              <span>{blog.username}</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="ms-3">
                <i className="far fa-calendar-alt text-primary me-2"></i>
                {blog.date}
              </span>
            </div>
          </div>
          <h4 className="text-uppercase mb-3">{blog.title}</h4>
          <a className="text-uppercase fw-bold" href="">
            Read More <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}