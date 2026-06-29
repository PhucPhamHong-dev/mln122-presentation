import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function SectionFooter({ footer, onNavigate }) {
  return (
    <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-3">
      <button
        type="button"
        onClick={() => footer.back && onNavigate(footer.back)}
        className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-600 transition-all hover:bg-slate-50 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-40"
        disabled={!footer.back}
      >
        <ArrowLeft className="h-4 w-4" />
        <span>{footer.backLabel || 'Quay lại'}</span>
      </button>

      <div className="hidden sm:block font-mono text-xs font-bold uppercase tracking-[0.22em] text-amber-500">
        {footer.nextLabel}
      </div>

      <button
        type="button"
        onClick={() => footer.next && onNavigate(footer.next)}
        className="flex items-center gap-1.5 rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-bold text-black shadow-lg shadow-amber-500/10 transition-all hover:bg-amber-400"
      >
        <span>{footer.nextLabel}</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  )
}
