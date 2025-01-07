import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((res) => res.json())
      .then((data) => setPopularBlogs(data.slice(0, 15)));
  }, []);

  return (
    <div>
      {/* Latest Blogs */}
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold sm:px-4 px-2">Latest Blogs</h3>
        <div>
          {popularBlogs.slice(0, 5).map((blog) => (
            <div
              key={blog.id}
              className="sm:my-3 my-5 border-b-2 border-spacing-1 sm:px-4 px-2"
            >
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link
                to="/"
                className="sm:text-sm text-base sm:pb-1 pb-2 hover:text-orange-500 inline-flex items-center py-1"
              >
                Learn More <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Blogs */}
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold sm:px-4 px-2 mt-10 sm:mt-20">Popular Blogs</h3>
        <div>
          {popularBlogs.slice(6, 10).map((blog) => (
            <div
              key={blog.id}
              className="sm:my-3 my-5 border-b-2 border-spacing-1 sm:px-4 px-2"
            >
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link
                to="/"
                className="sm:text-sm text-base sm:pb-1 pb-2 hover:text-orange-500 inline-flex items-center py-1"
              >
                Learn More <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
