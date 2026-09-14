import React from "react";
import { Link } from "react-router-dom";

import BlogCards from "./BlogCards";
import blogData from "../../api/blogs";
import Container from "../ui/Container";

const LatestBlogs = () => {
  // Show latest 5 blogs on homepage
  const latestBlogs = blogData.slice(0, 5);

  return (
    <section className="bg-white py-12 sm:py-14 md:py-16 lg:py-20">
    <Container>
        <div className="mx-auto w-full px-5 sm:px-6 md:px-8 lg:px-10">

          {/* Section Header */}
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between md:mb-12">

            {/* Heading */}
        <div>
        <span className="mb-2 block font-jost text-xs font-semibold uppercase tracking-[2px] text-[#86BC42] sm:text-sm">
         Our Blog
        </span>

        <h2 className="font-jost text-2xl font-semibold leading-tight text-primary-black sm:text-3xl md:text-[34px] lg:text-4xl">
                Latest Blog
        </h2>

        <p className="mt-2 max-w-[550px] font-jost text-sm leading-6 text-third sm:text-[15px]">
                Discover helpful tips, healthy food ideas and useful information
                for your everyday lifestyle.
        </p>
        </div>

            {/* See All Blogs */}
        <Link
              to="/journal"
              className="group inline-flex w-fit items-center gap-2 border-b border-[#074E37] pb-1 font-jost text-sm font-semibold text-[#074E37] transition-all duration-200 hover:border-[#86BC42] hover:text-[#86BC42] sm:text-[15px]"
            >
              See All Blogs

        <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
        </span>
        </Link>
        </div>

          {/* Blog Grid */}
        <div
            className="grid grid-cols-1 gap-5  min-[400px]:grid-cols-2 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5 lg:gap-5 "
        >
            {latestBlogs.map((blog) => (
            <BlogCards
             key={blog.id}
            blog={blog}
             />
            ))}
            </div>

      </div>
      </Container>
       </section>
  );
};

export default LatestBlogs;