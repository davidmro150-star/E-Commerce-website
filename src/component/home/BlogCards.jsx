import React from "react";
import { Link } from "react-router-dom";

const BlogCards = ({ blog }) => {
  return (
    <article className="group overflow-hidden rounded-sm border border-[#eeeeee] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      {/* Image */}
    <Link
        to={`/blogs/${blog.id}`}
        className="block overflow-hidden"
    >
    <div className="relative aspect-[16/10] w-full bg-[#f7f5ee]">
    <img
    src={blog.image}
    alt={blog.title}
    loading="lazy"
    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
     />

          {/* Category */}
    <span className="absolute left-4 top-4 rounded-full bg-[#86BC42] px-3 py-1 text-xs font-medium text-white">
    {blog.category}
    </span>
    </div>
    </Link>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {/* Meta */}
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#777777] sm:text-sm">
        <span>{blog.author}</span>

        <span className="h-1 w-1 rounded-full bg-[#86BC42]" />

        <span>{blog.date}</span>
        </div>

        {/* Title */}
        <Link to={`/blogs/${blog.id}`}>
          
        <h3 className="font-jost text-lg font-semibold leading-6 text-primary-black transition-colors duration-200 group-hover:text-[#86BC42] sm:text-xl sm:leading-7">
        {blog.title}
        </h3>
        </Link>

        {/* Description */}
        <p className="mt-3 line-clamp-2 font-jost text-sm leading-6 text-third sm:text-[15px]">
          {blog.excerpt}
        </p>

        {/* Read More */}
        <Link
          to={`/blogs/${blog.id}`}
          className="mt-5 inline-flex items-center gap-2 font-jost text-sm font-semibold text-[#074E37] transition-all duration-200 hover:gap-3 hover:text-[#86BC42]"
        >
          Read More
          <span aria-hidden="true">→</span>
        </Link>

    </div>
    </article>
  );
};

export default BlogCards;