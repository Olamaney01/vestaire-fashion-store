import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useStore } from "../store/useStore";

export default function ProductCard({ product, index = 0 }) {
  const toggleWishlist = useStore((s) => s.toggleWishlist);
  const isWishlisted = useStore((s) => s.isWishlisted(product.id));
  const addToCart = useStore((s) => s.addToCart);

  const quickAdd = (e) => {
    e.preventDefault();
    addToCart(product, {
      color: product.colors[0],
      size: product.sizes[0],
      qty: 1,
    });
  };

  const wish = (e) => {
    e.preventDefault();
    toggleWishlist(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: (index % 4) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-paper aspect-[4/5]">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <img
            src={product.images[1] || product.images[0]}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            loading="lazy"
          />

          {product.isNew && (
            <span className="absolute top-3 left-3 bg-bone/90 text-ink text-[10px] tracking-wide px-2.5 py-1 font-mono">
              NEW
            </span>
          )}

          <button
            onClick={wish}
            aria-label={
              isWishlisted ? "Remove from wishlist" : "Add to wishlist"
            }
            aria-pressed={isWishlisted}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-bone/90 flex items-center justify-center"
          >
            <motion.span
              animate={isWishlisted ? { scale: [1, 1.3, 1] } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Heart
                size={15}
                strokeWidth={1.75}
                className={isWishlisted ? "fill-clay text-clay" : "text-ink"}
              />
            </motion.span>
          </button>

          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out p-2">
            <button
              onClick={quickAdd}
              className="w-full bg-ink text-bone text-xs tracking-wide py-3 hover:bg-pine transition-colors"
            >
              Quick Add
            </button>
          </div>
        </div>

        <div className="mt-3 flex items-start justify-between gap-2">
          <div>
            <h3 className="font-body text-sm text-ink">{product.name}</h3>
            <p className="text-xs text-muted mt-0.5 capitalize">
              {product.category}
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-sm">${product.price}</span>
            {product.compareAt && (
              <span className="block text-xs text-muted line-through">
                ${product.compareAt}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
