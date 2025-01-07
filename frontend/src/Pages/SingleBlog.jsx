import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import SideBar from "../Components/SideBar";

const SingleBlog = () => {
  const data = useLoaderData();
  const { title, image, category, author, published_date, reading_time, content } = data[0];

  return (
    <div>
      {/* Header Section */}
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Single Blog Page</h2>
      </div>

      {/* Blog details */}
      <div className="max-w-7xl mx-auto my-12 flex flex-col-reverse md:flex-row gap-12 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Blog Content */}
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img
              src={image}
              alt="blog image"
              className="w-full mx-auto rounded mb-6 object-cover"
            />
          </div>
          <h2 className="text-3xl mt-4 font-bold mb-4 text-blue-500 cursor-pointer">{title}</h2>
          <p className="mb-1 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" />
            Author {author} || Published on {published_date}
          </p>
          <p className="mb-3 text-gray-600">
            <FaClock className="inline-flex items-center mr-2" />
            {reading_time} Reading Time
          </p>
          <p className="text-base text-gray-500 mb-6">{content}</p>

          {/* Additional Text */}
          <div className="text-base text-gray-500 mb-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolore earum cupiditate mollitia
              voluptate vitae recusandae distinctio soluta, illum iste, fuga dolorem fugiat, illo laudantium corporis
              delectus nihil culpa corrupti magnam repellendus ipsa at.
            </p>
            <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores optio possimus cum, autem laudantium
              natus recusandae magni error corrupti culpa?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita voluptatum dolor magnam. Nisi
              repellat itaque doloremque voluptas assumenda magni quis libero, est totam velit maiores nostrum voluptatem
              quibusdam. Quibusdam!
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
