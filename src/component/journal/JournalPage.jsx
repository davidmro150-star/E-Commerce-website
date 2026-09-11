import React from "react";
import { Link } from "react-router-dom";
import BlogCards from "../home/BlogCards";
import blogData from "../../api/blogs";
import Container from "../ui/Container";


const JournalPage = () => {
  return (
    <main className="min-h-screen bg-white">

      <section className="bg-white">

        <Container>
          {/* ================= JOURNAL HEADER ================= */}
          <div className="bg-[#f7f5ee] py-12 sm:py-14 md:py-16 lg:py-20">
            <div className="mx-auto w-full max-w-[1200px] px-5 text-center sm:px-6 md:px-8 lg:px-10">

              <p className="mb-2 font-jost text-xs font-semibold uppercase tracking-[2px] text-[#86BC42] sm:text-sm">
                Our Journal
              </p>

              <h1 className="font-jost text-3xl font-semibold text-[#074E37] sm:text-4xl md:text-5xl">
                Latest Blogs
              </h1>

              <p className="mx-auto mt-3 max-w-[650px] font-jost text-sm leading-6 text-third sm:text-base">
                Explore our latest fashion trends, beauty tips, furniture guides,
                technology insights and shopping advice.
              </p>

              {/* Breadcrumb */}
            

            </div>
          </div>


          {/* ================= ALL BLOGS ================= */}
          <div className="py-12 sm:py-14 md:py-16 lg:py-20">

            <div className="mx-auto w-full  px-5 sm:px-6 md:px-8 lg:px-10">

              {/* Top */}
              <div className="mb-8 flex items-center justify-between sm:mb-10">

                <div>
                  <h2 className="font-jost text-xl font-semibold text-primary-black sm:text-2xl md:text-3xl">
                    All Articles
                  </h2>

                  <p className="mt-1 font-jost text-sm text-third">
                    Browse all our latest journal posts.
                  </p>
                </div>

                <span className="rounded-full bg-[#f7f5ee] px-3 py-2 font-jost text-xs text-[#074E37] sm:px-4 sm:text-sm">
                  {blogData.length} Articles
                </span>

              </div>


              {/* ALL BLOGS GRID */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">

                {blogData.map((blog) => (
                  <BlogCards
                    key={blog.id}
                    blog={blog}
                  />
                ))}

              </div>

            </div>

          </div>
     </Container>

      </section>

    </main>
  );
};

export default JournalPage;