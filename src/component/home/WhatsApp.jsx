import React from "react";
import Container from "../ui/Container";

const WHATSAPP_NUMBER = "8801XXXXXXXXX";

const WhatsApp = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to know more about your products."
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
  const callUrl = `tel:+${WHATSAPP_NUMBER}`;

  return (
    <section className="bg-[#f7f5ee] py-10 sm:py-12 md:py-14 lg:py-16">
    <Container>
        <div className="mx-auto w-full  px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-6 rounded-md bg-[#074E37] px-5 py-8 text-center sm:px-8 md:flex-row md:text-left lg:px-12 lg:py-10">

            {/* Content */}
        <div>
              <p className="mb-2 font-jost text-xs font-semibold uppercase tracking-[2px] text-[#86BC42] sm:text-sm">
              Need Help?
              </p>

              <h2 className="font-jost text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
              Chat With Us on WhatsApp
              </h2>

              <p className="mx-auto mt-3 max-w-[520px] font-jost text-sm leading-6 text-white/75 sm:text-[15px] md:mx-0">
              Have a question about our products or your order? Contact our
              support team anytime.
              </p>
          </div>

            {/* Contact Actions */}

       <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#86BC42] px-6 py-3 font-jost text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#6fa52e] sm:w-auto sm:text-[15px]"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.48 0 .13 5.35.13 11.92c0 2.1.55 4.15 1.6 5.96L.03 24l6.26-1.64a11.86 11.86 0 0 0 5.76 1.48h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.46-8.44ZM12.06 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.87 9.87 0 0 1-1.51-5.27C2.19 6.48 6.61 2.06 12.05 2.06c2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.44-4.42 9.85-9.86 9.85Zm5.41-7.38c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                </svg>

                WhatsApp Us
              </a>

              <a
                href={callUrl}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/30 px-6 py-3 font-jost text-sm font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10 sm:w-auto sm:text-[15px]"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"
                  />
        </svg>

         Call Us
        </a>
        </div>
        </div>
        </div>
     </Container>
    </section>
  );
};

export default WhatsApp;