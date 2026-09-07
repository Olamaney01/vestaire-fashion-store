import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bone">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <span className="font-display text-2xl">VESTAIRE</span>
          <p className="mt-4 max-w-xs text-sm text-muted leading-relaxed">
            Considered pieces for people who dress with intent. Designed in
            small batches, made to last past one season.
          </p>
        </div>

        <div>
          <h4 className="font-body text-xs tracking-wide text-muted mb-4">Shop</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/shop" className="hover:text-clay transition-colors">All Products</Link></li>
            <li><Link to="/shop?filter=new" className="hover:text-clay transition-colors">New Arrivals</Link></li>
            <li><Link to="/wishlist" className="hover:text-clay transition-colors">Wishlist</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-body text-xs tracking-wide text-muted mb-4">Support</h4>
          <ul className="space-y-3 text-sm text-muted">
            <li>Shipping &amp; Returns</li>
            <li>Size Guide</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-body text-xs tracking-wide text-muted mb-4">Follow</h4>
          <ul className="space-y-3 text-sm text-muted">
            <li>Instagram</li>
            <li>Pinterest</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted">
          <span>&copy; {new Date().getFullYear()} Vestaire. All rights reserved.</span>
          <span>Portfolio project — not a real store.</span>
        </div>
      </div>
    </footer>
  )
}
