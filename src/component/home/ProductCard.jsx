
import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  // ================= DISCOUNT =================
  const discount = product?.discountPercentage
    ? Math.round(product.discountPercentage)
    : 0;

  // ================= PRICE =================
  const price = Number(product?.price || 0);

  const oldPrice =
    discount > 0
      ? price / (1 - discount / 100)
      : null;

  // ================= RATING =================
  const rating = Number(product?.rating || 0);

  // ================= ADD TO CART =================
  const handleAddToCart = () => {
    if (onAddToCart && product) {
      onAddToCart(product);
    }
  };

  return (
    <article
      className="
        group
        flex
        min-w-0
        flex-col
        overflow-hidden
        rounded-sm
        border
        border-[#eeeeee]
        bg-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]
      "
    >
      {/* ================= PRODUCT IMAGE ================= */}
      <div
        className="
          relative
          flex
          h-[145px]
          w-full
          shrink-0
          items-center
          justify-center
          overflow-hidden
          bg-[#f7f7f7]

          sm:h-[155px]

          md:h-[165px]

          lg:h-[175px]

          xl:h-[185px]
        "
      >
        {/* DISCOUNT */}
        {discount > 0 && (
          <span
            className="
              absolute
              left-2
              top-2
              z-10
              rounded-sm
              bg-[#86BC42]
              px-2
              py-1
              text-[9px]
              font-semibold
              text-white

              sm:text-[10px]
            "
          >
            -{discount}%
          </span>
        )}

        {/* PRODUCT IMAGE */}
        <img
          src={product?.thumbnail}
          alt={product?.title || "Product"}
          loading="lazy"
          className="
            h-full
            w-full
            object-contain
            p-3
            transition-transform
            duration-500
            group-hover:scale-105

            sm:p-4
          "
        />
      </div>

      {/* ================= PRODUCT INFORMATION ================= */}
      <div
        className="
          flex
          min-h-[145px]
          flex-1
          flex-col
          p-2.5

          sm:min-h-[155px]
          sm:p-3
        "
      >
        {/* CATEGORY */}
        <p
          className="
            mb-1
            truncate
            text-[9px]
            font-medium
            uppercase
            tracking-wide
            text-[#86BC42]

            sm:text-[10px]
          "
          title={product?.category}
        >
          {product?.category || "Product"}
        </p>

        {/* TITLE */}
        <h3
          className="
            line-clamp-2
            min-h-[28px]
            text-[11px]
            font-medium
            leading-4
            text-[#333333]

            sm:min-h-[32px]
            sm:text-[12px]
            sm:leading-4
          "
          title={product?.title}
        >
          {product?.title || "Untitled Product"}
        </h3>

        {/* ================= RATING ================= */}
        <div
          className="
            mt-1
            flex
            items-center
            gap-1
          "
        >
          <span
            className="text-[10px] text-[#F5B301]"
            aria-hidden="true"
          >
            ★
          </span>

          <span className="text-[9px] text-[#777777]">
            {rating > 0 ? rating.toFixed(1) : "No rating"}
          </span>
        </div>

        {/* ================= PRICE ================= */}
        <div
          className="
            mt-auto
            flex
            flex-wrap
            items-center
            gap-1.5
            pt-2
          "
        >
          <span
            className="
              text-[12px]
              font-bold
              text-[#074E37]

              sm:text-[13px]
            "
          >
            ${price.toFixed(2)}
          </span>

          {/* OLD PRICE */}
          {oldPrice !== null && (
            <span
              className="
                text-[9px]
                text-[#999999]
                line-through

                sm:text-[10px]
              "
            >
              ${oldPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* ================= ADD TO CART ================= */}
        <button
          type="button"
          onClick={handleAddToCart}
          aria-label={`Add ${ product?.title || "product" } to cart`}
          className="
            mt-2
            w-full
            rounded-sm
            border
            border-[#86BC42]
            px-2
            py-1.5
            text-[9px]
            font-semibold
            text-[#074E37]
            transition-all
            duration-200
            hover:bg-[#86BC42]
            hover:text-white
            active:scale-[0.98]

            sm:py-2
            sm:text-[10px]
          "
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;

