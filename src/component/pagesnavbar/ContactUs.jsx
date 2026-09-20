import React, { useState } from "react";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import Container from "../ui/Container";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <Container>

        {/* Hero */}
        <div className="rounded-3xl bg-[#252A27] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#86BC42]">
            Contact Us
          </p>

          <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Let's talk.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#D1D5D2] sm:text-base">
            Have a question about our products, orders, delivery, or
            anything else? Send us a message and our team will be happy
            to help.
          </p>
        </div>

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-3xl bg-[#E8EFE8] p-6 sm:p-8 lg:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#074E37]">
              Get In Touch
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-[#252A27] sm:text-3xl">
              We would love to hear from you.
            </h2>

            <div className="mt-8 space-y-6">

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#074E37] text-white">
                  <Mail size={19} />
                </div>

                <div>
                  <p className="font-medium text-[#252A27]">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-[#626A65]">
                    support@example.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#074E37] text-white">
                  <Phone size={19} />
                </div>

                <div>
                  <p className="font-medium text-[#252A27]">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-[#626A65]">
                    +880 1234 567890
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#074E37] text-white">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="font-medium text-[#252A27]">
                    Address
                  </p>

                  <p className="mt-1 text-sm text-[#626A65]">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-[#F7F6F2] p-6 sm:p-8 lg:p-10"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              <div>
                <label className="text-sm font-medium text-[#252A27]">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="mt-2 w-full rounded-xl border border-[#D9DED9] bg-white px-4 py-3 text-sm outline-none focus:border-[#86BC42]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#252A27]">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="mt-2 w-full rounded-xl border border-[#D9DED9] bg-white px-4 py-3 text-sm outline-none focus:border-[#86BC42]"
                />
              </div>

            </div>

            <div className="mt-5">
              <label className="text-sm font-medium text-[#252A27]">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What can we help you with?"
                required
                className="mt-2 w-full rounded-xl border border-[#D9DED9] bg-white px-4 py-3 text-sm outline-none focus:border-[#86BC42]"
              />
            </div>

            <div className="mt-5">
              <label className="text-sm font-medium text-[#252A27]">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="6"
                required
                className="mt-2 w-full resize-none rounded-xl border border-[#D9DED9] bg-white px-4 py-3 text-sm outline-none focus:border-[#86BC42]"
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#074E37] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#86BC42] hover:text-[#252A27]"
            >
              Send Message
              <Send size={17} />
            </button>
          </form>

        </div>

      </Container>
    </section>
  );
};

export default ContactUs;