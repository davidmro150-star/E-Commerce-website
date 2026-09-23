import React from "react";
import { Link } from "react-router-dom";
import {
  Truck,
  Clock,
  MapPin,
  Package,
  ArrowRight,
} from "lucide-react";
import Container from "../ui/Container";

const ShippingPolicy = () => {
  return (
    <section className="bg-[#F7F6F2] py-10 sm:py-14 lg:py-20">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E8EFE8] text-[#074E37]">
            <Truck size={26} />
          </div>

          <p className="mt-5 font-jost text-sm font-medium uppercase tracking-[0.2em] text-[#86BC42]">
            Shipping Policy
          </p>

          <h1 className="mt-3 font-jost text-3xl font-semibold text-[#252A27] sm:text-4xl lg:text-5xl">
            Shipping made simple
          </h1>

          <p className="mt-4 font-jost text-sm leading-6 text-[#252A27]/60 sm:text-base">
            We work to make sure your order reaches you safely and on time.
          </p>
        </div>

        {/* Shipping Features */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6">
            <Clock className="text-[#074E37]" size={25} />

            <h2 className="mt-5 font-jost text-lg font-semibold text-[#252A27]">
              Delivery Time
            </h2>

            <p className="mt-2 font-jost text-sm leading-6 text-[#252A27]/60">
              Orders are normally delivered within 2–5 business days,
              depending on your location.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <MapPin className="text-[#074E37]" size={25} />

            <h2 className="mt-5 font-jost text-lg font-semibold text-[#252A27]">
              Delivery Areas
            </h2>

            <p className="mt-2 font-jost text-sm leading-6 text-[#252A27]/60">
              We deliver products to customers across Bangladesh through our
              delivery partners.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <Package className="text-[#074E37]" size={25} />

            <h2 className="mt-5 font-jost text-lg font-semibold text-[#252A27]">
              Safe Packaging
            </h2>

            <p className="mt-2 font-jost text-sm leading-6 text-[#252A27]/60">
              Every order is carefully packed before being handed over for
              delivery.
            </p>
          </div>
        </div>

        {/* Policy Content */}
        <div className="mx-auto mt-8 max-w-5xl rounded-2xl bg-white p-5 sm:p-8 lg:mt-10 lg:p-10">
          <div className="space-y-8">
            <div>
              <h2 className="font-jost text-xl font-semibold text-[#252A27] sm:text-2xl">
                Order Processing
              </h2>

              <p className="mt-3 font-jost text-sm leading-7 text-[#252A27]/65 sm:text-base">
                Orders are processed after confirmation. Please make sure
                your delivery address and contact information are correct
                before completing your order.
              </p>
            </div>

            <div>
              <h2 className="font-jost text-xl font-semibold text-[#252A27] sm:text-2xl">
                Delivery Delays
              </h2>

              <p className="mt-3 font-jost text-sm leading-7 text-[#252A27]/65 sm:text-base">
                Delivery times may occasionally change because of weather,
                holidays, traffic or other circumstances outside our control.
              </p>
            </div>

            <div>
              <h2 className="font-jost text-xl font-semibold text-[#252A27] sm:text-2xl">
                Incorrect Address
              </h2>

              <p className="mt-3 font-jost text-sm leading-7 text-[#252A27]/65 sm:text-base">
                Customers are responsible for providing accurate delivery
                information. Contact us as soon as possible if you need to
                update your address.
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
            Contact Us
            <ArrowRight size={17} />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ShippingPolicy;
