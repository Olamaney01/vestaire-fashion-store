import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, CreditCard, Truck, ShieldCheck } from 'lucide-react'
import { useStore } from '../store/useStore'

const STEPS = ['Contact', 'Delivery', 'Payment', 'Review']

const DELIVERY_METHODS = [
  { id: 'standard', label: 'Standard Shipping', time: '5–7 business days', price: 0 },
  { id: 'express', label: 'Express Shipping', time: '2–3 business days', price: 25 },
  { id: 'overnight', label: 'Overnight', time: 'Next business day', price: 45 },
]

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="text-xs text-muted mb-1.5 block">{label}</span>
      {children}
      {error && <span className="text-xs text-clay mt-1 block">{error}</span>}
    </label>
  )
}

const inputClass = (error) =>
  `w-full border ${error ? 'border-clay' : 'border-line'} bg-transparent px-3.5 py-3 text-sm outline-none focus:border-ink transition-colors`

export default function Checkout() {
  const cart = useStore((s) => s.cart)
  const subtotal = useStore((s) => s.cartSubtotal())
  const clearCart = useStore((s) => s.clearCart)

  const [step, setStep] = useState(0)
  const [placed, setPlaced] = useState(false)
  const [orderNumber, setOrderNumber] = useState('')
  const [errors, setErrors] = useState({})

  const [contact, setContact] = useState({ email: '', phone: '' })
  const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
  })
  const [deliveryMethod, setDeliveryMethod] = useState('standard')
  const [payment, setPayment] = useState({ cardNumber: '', expiry: '', cvc: '', nameOnCard: '' })

  if (cart.length === 0 && !placed) {
    return <Navigate to="/shop" replace />
  }

  const shippingCost = DELIVERY_METHODS.find((d) => d.id === deliveryMethod)?.price || 0
  const total = subtotal + shippingCost

  const validateContact = () => {
    const e = {}
    if (!/^\S+@\S+\.\S+$/.test(contact.email)) e.email = 'Enter a valid email address'
    if (!/^[\d\s+()-]{7,}$/.test(contact.phone)) e.phone = 'Enter a valid phone number'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const validateAddress = () => {
    const e = {}
    if (!address.firstName.trim()) e.firstName = 'Required'
    if (!address.lastName.trim()) e.lastName = 'Required'
    if (!address.street.trim()) e.street = 'Required'
    if (!address.city.trim()) e.city = 'Required'
    if (!address.state.trim()) e.state = 'Required'
    if (!/^\d{4,10}$/.test(address.zip.trim())) e.zip = 'Enter a valid postal code'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const validatePayment = () => {
    const e = {}
    if (!/^\d{13,19}$/.test(payment.cardNumber.replace(/\s/g, ''))) e.cardNumber = 'Enter a valid card number'
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(payment.expiry)) e.expiry = 'Use MM/YY format'
    if (!/^\d{3,4}$/.test(payment.cvc)) e.cvc = 'Enter a valid CVC'
    if (!payment.nameOnCard.trim()) e.nameOnCard = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const goNext = () => {
    let valid = true
    if (step === 0) valid = validateContact()
    if (step === 1) valid = validateAddress()
    if (step === 2) valid = validatePayment()
    if (valid) {
      setErrors({})
      setStep((s) => Math.min(s + 1, STEPS.length - 1))
    }
  }

  const placeOrder = () => {
    setOrderNumber(`VST-${Math.floor(100000 + Math.random() * 900000)}`)
    setPlaced(true)
    clearCart()
  }

  if (placed) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mx-auto max-w-lg px-5 py-24 md:py-32 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
          className="w-16 h-16 rounded-full bg-pine mx-auto flex items-center justify-center"
        >
          <Check size={28} strokeWidth={2} className="text-bone" />
        </motion.div>
        <h1 className="font-display text-3xl md:text-4xl mt-8">Order Confirmed</h1>
        <p className="text-muted text-sm mt-3">
          Thank you. A confirmation has been sent to your email.
        </p>
        <p className="font-mono text-sm mt-6 tracking-wide">Order #{orderNumber}</p>
        <Link
          to="/shop"
          className="inline-block mt-10 bg-ink text-bone text-sm tracking-wide px-8 py-4 hover:bg-pine transition-colors"
        >
          Continue Shopping
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="mx-auto max-w-[1200px] px-5 md:px-10 py-10 md:py-14"
    >
      <h1 className="font-display text-3xl md:text-4xl mb-8">Checkout</h1>

      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-10 overflow-x-auto">
        {STEPS.map((label, i) => (
          <div key={label} className="flex items-center gap-2 shrink-0">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 ${
                i < step ? 'bg-pine text-bone' : i === step ? 'bg-ink text-bone' : 'bg-paper text-muted'
              }`}
            >
              {i < step ? <Check size={13} /> : i + 1}
            </div>
            <span className={`text-xs ${i === step ? 'text-ink' : 'text-muted'}`}>{label}</span>
            {i < STEPS.length - 1 && <div className="w-6 md:w-10 h-px bg-line" />}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_380px] gap-12">
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {step === 0 && (
                <div className="space-y-5 max-w-md">
                  <h2 className="font-display text-xl mb-1">Contact Information</h2>
                  <Field label="Email address" error={errors.email}>
                    <input
                      type="email"
                      value={contact.email}
                      onChange={(e) => setContact({ ...contact, email: e.target.value })}
                      className={inputClass(errors.email)}
                      placeholder="you@example.com"
                    />
                  </Field>
                  <Field label="Phone number" error={errors.phone}>
                    <input
                      type="tel"
                      value={contact.phone}
                      onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                      className={inputClass(errors.phone)}
                      placeholder="(555) 123-4567"
                    />
                  </Field>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-8 max-w-md">
                  <div>
                    <h2 className="font-display text-xl mb-4">Delivery Address</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <Field label="First name" error={errors.firstName}>
                        <input
                          value={address.firstName}
                          onChange={(e) => setAddress({ ...address, firstName: e.target.value })}
                          className={inputClass(errors.firstName)}
                        />
                      </Field>
                      <Field label="Last name" error={errors.lastName}>
                        <input
                          value={address.lastName}
                          onChange={(e) => setAddress({ ...address, lastName: e.target.value })}
                          className={inputClass(errors.lastName)}
                        />
                      </Field>
                    </div>
                    <div className="mt-4">
                      <Field label="Street address" error={errors.street}>
                        <input
                          value={address.street}
                          onChange={(e) => setAddress({ ...address, street: e.target.value })}
                          className={inputClass(errors.street)}
                        />
                      </Field>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <Field label="City" error={errors.city}>
                        <input
                          value={address.city}
                          onChange={(e) => setAddress({ ...address, city: e.target.value })}
                          className={inputClass(errors.city)}
                        />
                      </Field>
                      <Field label="State / Region" error={errors.state}>
                        <input
                          value={address.state}
                          onChange={(e) => setAddress({ ...address, state: e.target.value })}
                          className={inputClass(errors.state)}
                        />
                      </Field>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <Field label="Postal code" error={errors.zip}>
                        <input
                          value={address.zip}
                          onChange={(e) => setAddress({ ...address, zip: e.target.value })}
                          className={inputClass(errors.zip)}
                        />
                      </Field>
                      <Field label="Country">
                        <input
                          value={address.country}
                          onChange={(e) => setAddress({ ...address, country: e.target.value })}
                          className={inputClass(false)}
                        />
                      </Field>
                    </div>
                  </div>

                  <div>
                    <h2 className="font-display text-xl mb-4">Delivery Method</h2>
                    <div className="flex flex-col gap-3">
                      {DELIVERY_METHODS.map((m) => (
                        <button
                          key={m.id}
                          onClick={() => setDeliveryMethod(m.id)}
                          className={`flex items-center justify-between border px-4 py-3.5 text-left transition-colors ${
                            deliveryMethod === m.id ? 'border-ink' : 'border-line hover:border-muted'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                deliveryMethod === m.id ? 'border-ink' : 'border-line'
                              }`}
                            >
                              {deliveryMethod === m.id && <div className="w-2 h-2 rounded-full bg-ink" />}
                            </div>
                            <div>
                              <p className="text-sm">{m.label}</p>
                              <p className="text-xs text-muted">{m.time}</p>
                            </div>
                          </div>
                          <span className="text-sm">{m.price === 0 ? 'Free' : `$${m.price}`}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5 max-w-md">
                  <h2 className="font-display text-xl mb-1 flex items-center gap-2">
                    <CreditCard size={18} strokeWidth={1.5} /> Payment Method
                  </h2>
                  <Field label="Name on card" error={errors.nameOnCard}>
                    <input
                      value={payment.nameOnCard}
                      onChange={(e) => setPayment({ ...payment, nameOnCard: e.target.value })}
                      className={inputClass(errors.nameOnCard)}
                    />
                  </Field>
                  <Field label="Card number" error={errors.cardNumber}>
                    <input
                      value={payment.cardNumber}
                      onChange={(e) => setPayment({ ...payment, cardNumber: e.target.value })}
                      className={inputClass(errors.cardNumber)}
                      placeholder="1234 5678 9012 3456"
                    />
                  </Field>
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Expiry (MM/YY)" error={errors.expiry}>
                      <input
                        value={payment.expiry}
                        onChange={(e) => setPayment({ ...payment, expiry: e.target.value })}
                        className={inputClass(errors.expiry)}
                        placeholder="MM/YY"
                      />
                    </Field>
                    <Field label="CVC" error={errors.cvc}>
                      <input
                        value={payment.cvc}
                        onChange={(e) => setPayment({ ...payment, cvc: e.target.value })}
                        className={inputClass(errors.cvc)}
                        placeholder="123"
                      />
                    </Field>
                  </div>
                  <p className="text-xs text-muted flex items-center gap-1.5 pt-1">
                    <ShieldCheck size={14} strokeWidth={1.5} /> This is a demo checkout — no real payment is processed.
                  </p>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8 max-w-md">
                  <h2 className="font-display text-xl mb-1">Review Your Order</h2>

                  <div>
                    <p className="text-xs text-muted mb-1">Contact</p>
                    <p className="text-sm">{contact.email} · {contact.phone}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted mb-1">Ship to</p>
                    <p className="text-sm">
                      {address.firstName} {address.lastName}<br />
                      {address.street}, {address.city}, {address.state} {address.zip}<br />
                      {address.country}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted mb-1">Delivery</p>
                    <p className="text-sm flex items-center gap-1.5">
                      <Truck size={14} strokeWidth={1.5} />
                      {DELIVERY_METHODS.find((d) => d.id === deliveryMethod)?.label}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted mb-1">Payment</p>
                    <p className="text-sm">Card ending in {payment.cardNumber.replace(/\s/g, '').slice(-4)}</p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-4 mt-10 max-w-md">
            {step > 0 && (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="text-sm underline underline-offset-4 text-muted hover:text-ink"
              >
                Back
              </button>
            )}
            <button
              onClick={step === STEPS.length - 1 ? placeOrder : goNext}
              className="flex-1 bg-ink text-bone text-sm tracking-wide py-4 hover:bg-pine transition-colors"
            >
              {step === STEPS.length - 1 ? 'Place Order' : 'Continue'}
            </button>
          </div>
        </div>

        {/* Order summary */}
        <div className="border border-line p-6 h-fit">
          <h2 className="font-display text-lg mb-5">Order Summary</h2>
          <div className="flex flex-col gap-4 max-h-72 overflow-y-auto pr-1">
            {cart.map((line) => (
              <div key={line.key} className="flex gap-3">
                <div className="w-14 h-16 bg-paper shrink-0 overflow-hidden">
                  <img src={line.image} alt={line.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-sm">{line.name}</p>
                  <p className="text-xs text-muted capitalize">
                    {line.color} / {line.size} · Qty {line.qty}
                  </p>
                </div>
                <span className="text-sm shrink-0">${(line.price * line.qty).toFixed(0)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-line mt-5 pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted">Subtotal</span>
              <span>${subtotal.toFixed(0)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted">Shipping</span>
              <span>{shippingCost === 0 ? 'Free' : `$${shippingCost}`}</span>
            </div>
            <div className="flex justify-between text-base pt-2 border-t border-line mt-2">
              <span>Total</span>
              <span>${total.toFixed(0)}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
