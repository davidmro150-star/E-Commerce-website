import React from "react";
import { Link } from "react-router-dom";
import {
  User,
  Package,
  Heart,
  MapPin,
  Settings,
  ShoppingBag,
} from "lucide-react";
import Container from "../ui/Container";

const MyAccount = () => {
  const accountItems = [
    {
      icon: Package,
      title: "My Orders",
      description: "View your recent orders and order history.",
      link: "/orders",
    },
    {
      icon: Heart,
      title: "Wishlist",
      description: "View and manage products you have saved.",
      link: "/wishlist",
    },
    {
      icon: MapPin,
      title: "My Addresses",
      description: "Manage your shipping and billing addresses.",
      link: "#",
    },
    {
      icon: Settings,
      title: "Account Settings",
      description: "Update your personal account information.",
      link: "#",
    },
  ];

  return (
    <section className="bg-[#F7F6F2] py-10 sm:py-14 lg:py-20">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E8EFE8] text-[#074E37]">
            <User size={26} />
          </div>

          <p className="mt-5 font-jost text-sm font-medium uppercase tracking-[0.2em] text-[#86BC42]">
            My Account
          </p>

          <h1 className="mt-3 font-jost text-3xl font-semibold text-[#252A27] sm:text-4xl lg:text-5xl">
            Welcome to your account
          </h1>

          <p className="mx-auto mt-4 max-w-2xl font-jost text-sm leading-6 text-[#252A27]/60 sm:text-base">
            Manage your orders, wishlist, addresses and account preferences
            from one place.
          </p>
        </div>

        {/* Account Cards */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {accountItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                to={item.link}
                className="group rounded-2xl border border-[#E5E5DF] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#86BC42] hover:shadow-md sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8EFE8] text-[#074E37] transition group-hover:bg-[#074E37] group-hover:text-white">
                  <Icon size={22} />
                </div>

                <h2 className="mt-5 font-jost text-lg font-semibold text-[#252A27]">
                  {item.title}
                </h2>

                <p className="mt-2 font-jost text-sm leading-6 text-[#252A27]/60">
                  {item.description}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-8 flex max-w-5xl flex-col items-center justify-between gap-4 rounded-2xl bg-[#074E37] px-5 py-6 sm:flex-row sm:px-7">
          <div>
            <h3 className="font-jost text-lg font-semibold text-white">
              Ready to continue shopping?
            </h3>

            <p className="mt-1 font-jost text-sm text-white/60">
              Explore our latest products and collections.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#86BC42] px-6 py-3 font-jost text-sm font-semibold text-[#252A27] transition hover:bg-white"
          >
            <ShoppingBag size={17} />
            Shop Now
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default MyAccount;