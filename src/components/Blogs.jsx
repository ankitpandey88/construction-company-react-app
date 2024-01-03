import blog1 from "../assets/img/blog-1.jpg";
import blog2 from "../assets/img/blog-2.jpg";
import blog3 from "../assets/img/blog-3.jpg";
import user from "../assets/img/user.jpg";

import Blog from "./elements/Blog";
export default function Blogs() {
  const blogs = [
    {
      username: "Ali Raza",
      date: "04 Feb 2021",
      img: blog1,
      title: "What are our basic rules for work?",
    },
    {
      username: "Tayyab Arshad",
      date: "14 Feb 2023",
      img: blog2,
      title: "is Study importand or not?",
    },
    {
      username: "Saran Zafar",
      date: "23 Jan 2024",
      img: blog3,
      title: "Need of worker if required",
    },
  ];
  return (
    <div className="container-fluid py-6 px-5">
      <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
        <h1 className="display-5 text-uppercase mb-4">
          Latest <span className="text-primary">Articles</span> From Our Blog
          Post
        </h1>
      </div>
      <div className="row g-5">
        {blogs.map((blog, index) => (
          <Blog blog={blog} key={index} />
        ))}
      </div>
    </div>
  );
}
