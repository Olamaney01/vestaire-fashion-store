import { AnimatePresence, motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { useStore } from '../store/useStore'

export default function ToastStack() {
  const toasts = useStore((s) => s.toasts)
  const dismissToast = useStore((s) => s.dismissToast)

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[60] flex flex-col gap-2 items-center px-4 w-full sm:w-auto">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 10, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 bg-ink text-bone pl-4 pr-3 py-3 shadow-lg w-full sm:w-auto sm:min-w-[320px]"
          >
            <span className="w-5 h-5 rounded-full bg-pine flex items-center justify-center shrink-0">
              <Check size={12} strokeWidth={2.5} />
            </span>
            <span className="text-sm flex-1">{t.message}</span>
            <button
              onClick={() => dismissToast(t.id)}
              aria-label="Dismiss notification"
              className="p-1 opacity-70 hover:opacity-100"
            >
              <X size={14} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
