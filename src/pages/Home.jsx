import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const CATEGORY_CARDS = [
  {
    label: "Outerwear",
    to: "/shop",
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Knitwear",
    to: "/shop",
    image:
      "https://images.pexels.com/photos/15040299/pexels-photo-15040299.jpeg?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Accessories",
    to: "/shop",
    image:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=80",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home() {
  const newArrivals = products.filter((p) => p.isNew).slice(0, 8);
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const subscribe = (e) => {
    e.preventDefault();
    if (email.includes("@")) setSubscribed(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[560px] overflow-hidden bg-ink">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src="/hero_Bg_video1.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-ink/30" />

        <div className="relative h-full flex flex-col justify-end px-5 md:px-10 pb-16 md:pb-24 max-w-[1600px] mx-auto">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-bone text-[13vw] leading-[0.95] md:text-[6.5vw] max-w-4xl"
            >
              Dress with intent.
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-5 max-w-md text-bone/85 text-sm md:text-base"
          >
            The Autumn '26 collection — considered outerwear and knitwear, built
            in small runs and made to outlast the season.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-8"
          >
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 bg-bone text-ink px-7 py-4 text-sm tracking-wide hover:bg-clay hover:text-bone transition-colors"
            >
              Shop the collection
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <section className="max-w-[1600px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-end justify-between mb-10"
        >
          <h2 className="font-display text-3xl md:text-5xl">
            Shop by category
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CATEGORY_CARDS.map((cat, i) => (
            <motion.div
              key={cat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={cat.to}
                className="group block relative overflow-hidden aspect-[3/4]"
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                <span className="absolute bottom-6 left-6 font-display text-2xl text-bone">
                  {cat.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="max-w-[1600px] mx-auto px-5 md:px-10 py-10 md:py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-end justify-between mb-10"
        >
          <h2 className="font-display text-3xl md:text-5xl">New arrivals</h2>
          <Link
            to="/shop?filter=new"
            className="text-sm underline underline-offset-4 hidden sm:block"
          >
            View all
          </Link>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
          {newArrivals.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* EDITORIAL BANNER */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative h-[70vh] min-h-[420px] my-10 md:my-20 overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=80"
          alt="Editorial: the Overcoat, in detail"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/30" />
        <div className="relative h-full flex flex-col items-start justify-end px-5 md:px-16 pb-14 max-w-[1600px] mx-auto">
          <span className="font-mono text-bone/80 text-xs tracking-wide mb-3">
            VST-OC-014
          </span>
          <h3 className="font-display text-bone text-4xl md:text-6xl max-w-xl">
            The Overcoat, reconsidered.
          </h3>
          <Link
            to="/product/p01"
            className="mt-6 inline-flex items-center gap-3 border border-bone text-bone px-6 py-3 text-sm tracking-wide hover:bg-bone hover:text-ink transition-colors"
          >
            Discover the piece
            <ArrowRight size={16} />
          </Link>
        </div>
      </motion.section>

      {/* NEWSLETTER */}
      <section className="border-t border-line">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-[1600px] mx-auto px-5 md:px-10 py-20 text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl max-w-lg mx-auto">
            Be first to know what's next.
          </h2>
          <p className="mt-3 text-muted text-sm">
            Join the list for early access to new drops and restocks.
          </p>
          {subscribed ? (
            <p className="mt-8 text-pine font-body text-sm">
              You're on the list — welcome to Vestaire.
            </p>
          ) : (
            <form
              onSubmit={subscribe}
              className="mt-8 max-w-md mx-auto flex items-center border-b border-ink"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 min-w-0 bg-transparent py-3 px-3 text-sm border-b border-ink/40 outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 focus:border-ink transition-colors placeholder:text-muted"
                style={{ outline: "none", boxShadow: "none" }}
              />
              <button
                type="submit"
                className="shrink-0 bg-ink text-bone px-5 py-3 text-sm tracking-wide transition-all duration-200 hover:bg-clay hover:text-bone"
              >
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </section>
    </motion.div>
  );
}
