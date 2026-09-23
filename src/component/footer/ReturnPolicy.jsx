import React from "react";
import { Link } from "react-router-dom";
import {
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import Container from "../ui/Container";

const ReturnPolicy = () => {
  return (
    <section className="bg-[#F7F6F2] py-10 sm:py-14 lg:py-20">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E8EFE8] text-[#074E37]">
            <RotateCcw size={26} />
          </div>

          <p className="mt-5 font-jost text-sm font-medium uppercase tracking-[0.2em] text-[#86BC42]">
            Return Policy
          </p>

          <h1 className="mt-3 font-jost text-3xl font-semibold text-[#252A27] sm:text-4xl lg:text-5xl">
            Easy and transparent returns
          </h1>

          <p className="mt-4 font-jost text-sm leading-6 text-[#252A27]/60 sm:text-base">
            If something isn't right with your order, we're here to help.
          </p>
        </div>

        {/* Return Steps */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6">
            <CheckCircle2 className="text-[#074E37]" size={25} />

            <h2 className="mt-5 font-jost text-lg font-semibold text-[#252A27]">
              Eligible Products
            </h2>

            <p className="mt-2 font-jost text-sm leading-6 text-[#252A27]/60">
              Products must be unused, undamaged and returned with their
              original packaging where applicable.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <RotateCcw className="text-[#074E37]" size={25} />

            <h2 className="mt-5 font-jost text-lg font-semibold text-[#252A27]">
              Return Request
            </h2>

            <p className="mt-2 font-jost text-sm leading-6 text-[#252A27]/60">
              Contact our support team with your order details and the reason
              for your return.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <AlertCircle className="text-[#074E37]" size={25} />

            <h2 className="mt-5 font-jost text-lg font-semibold text-[#252A27]">
              Inspection
            </h2>

            <p className="mt-2 font-jost text-sm leading-6 text-[#252A27]/60">
              Returned products may be inspected before a replacement or
              refund is approved.
            </p>
          </div>
        </div>

        {/* Policy Details */}
        <div className="mx-auto mt-8 max-w-5xl rounded-2xl bg-white p-5 sm:p-8 lg:mt-10 lg:p-10">
          <div className="space-y-8">
            <div>
              <h2 className="font-jost text-xl font-semibold text-[#252A27] sm:text-2xl">
                Return Window
              </h2>

              <p className="mt-3 font-jost text-sm leading-7 text-[#252A27]/65 sm:text-base">
                Return requests should be submitted within the return period
                specified for the product or order.
              </p>
            </div>

            <div>
              <h2 className="font-jost text-xl font-semibold text-[#252A27] sm:text-2xl">
                Product Condition
              </h2>

              <p className="mt-3 font-jost text-sm leading-7 text-[#252A27]/65 sm:text-base">
                Products should be returned in their original condition.
                Products that have been used, damaged or altered may not be
                eligible for return.
              </p>
            </div>

            <div>
              <h2 className="font-jost text-xl font-semibold text-[#252A27] sm:text-2xl">
                Refunds
              </h2>

              <p className="mt-3 font-jost text-sm leading-7 text-[#252A27]/65 sm:text-base">
                Approved refunds are processed according to the original
                payment method and applicable store policies.
              </p>
            </div>

            <div>
              <h2 className="font-jost text-xl font-semibold text-[#252A27] sm:text-2xl">
                Damaged or Incorrect Items
              </h2>

              <p className="mt-3 font-jost text-sm leading-7 text-[#252A27]/65 sm:text-base">
                If you receive a damaged or incorrect product, please contact
                us as soon as possible with your order information.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 rounded-full bg-[#074E37] px-7 py-3.5 font-jost text-sm font-semibold text-white transition hover:bg-[#86BC42] hover:text-[#252A27]"
          >
            Contact Support
            <ArrowRight size={17} />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ReturnPolicy;