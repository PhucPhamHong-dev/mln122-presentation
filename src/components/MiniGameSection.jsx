import { useState } from 'react'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import GlassCard from './GlassCard'

export default function MiniGameSection({ onNavigate }) {
  const [notice, setNotice] = useState('')

  const handleDevelopingClick = () => {
    setNotice('Mini game đang được phát triển.')
    window.clearTimeout(handleDevelopingClick.timer)
    handleDevelopingClick.timer = window.setTimeout(() => {
      setNotice('')
    }, 2400)
  }

  return (
    <section className="flex h-full flex-col gap-5 rounded-[28px] border border-slate-200 bg-[#fbf8f1] p-5 shadow-2xl shadow-black/5 md:p-7">
      <div>
        <span className="inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-amber-600">
          Phần IV
        </span>
        <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-light tracking-tight text-slate-900 md:text-5xl">
          Mini game tương tác
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          Hoạt động tương tác nhanh dùng trong phần thuyết trình.
        </p>
      </div>

      <GlassCard className="flex-1 overflow-hidden">
        <div className="flex h-full flex-col justify-between gap-6">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-600">
              Sản phẩm đang hoàn thiện
            </p>
            <h3 className="max-w-2xl font-[family-name:var(--font-heading)] text-[34px] font-bold leading-[1.02] tracking-tight text-slate-900 md:text-[44px]">
              Mini game đang được phát triển
            </h3>
            <p className="max-w-2xl text-[15px] leading-[1.75] text-slate-600 md:text-[17px]">
              Nhóm sẽ triển khai hoạt động tương tác này trong phần thuyết trình trực tiếp.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleDevelopingClick}
              className="inline-flex items-center gap-2 rounded-[16px] bg-[#ff9800] px-5 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#f59e0b]"
            >
              <Sparkles className="h-4 w-4" />
              Đang phát triển
            </button>
            {notice ? (
              <div className="rounded-[14px] border border-[#E8CFCF] bg-[#FFF7ED] px-4 py-3 text-sm font-semibold text-[#8B4F4F] shadow-sm">
                {notice}
              </div>
            ) : null}
          </div>
        </div>
      </GlassCard>

      <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-xs">
        <button
          type="button"
          onClick={() => onNavigate('analysis')}
          className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Quay lại Đánh giá
        </button>
        <div className="hidden font-mono uppercase tracking-[0.22em] text-amber-600 md:block">
          Mục 4
        </div>
        <button
          type="button"
          onClick={() => onNavigate('closing')}
          className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-3 py-2 font-bold text-black hover:bg-amber-400"
        >
          Tiếp tục phần Q&A
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  )
}
