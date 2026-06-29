import { useState } from 'react'
import { ArrowLeft, ArrowRight, Sparkles, Target, Users } from 'lucide-react'
import { FaAndroid, FaWindows } from 'react-icons/fa'
import GlassCard from './GlassCard'

const gameCards = [
  {
    icon: Users,
    title: 'Nhập vai doanh nghiệp',
    body: 'Mỗi người chơi đại diện cho một chủ thể cạnh tranh trên thị trường.',
  },
  {
    icon: Target,
    title: 'Ra quyết định chiến lược',
    body: 'Lựa chọn đầu tư, giảm giá, đổi mới công nghệ hoặc mở rộng sản xuất.',
  },
  {
    icon: Sparkles,
    title: 'Quan sát độc quyền hình thành',
    body: 'Kết quả mô phỏng cho thấy cạnh tranh có thể dẫn tới tích tụ và tập trung tư bản.',
  },
]

const downloadOptions = [
  {
    id: 'windows',
    label: 'Tải Windows',
    href: '/downloads/TheLastShop-Windows.zip',
    icon: FaWindows,
    enabled: false,
    message: 'Bản tải Windows đang được cập nhật.',
  },
  {
    id: 'android',
    label: 'Tải Android',
    href: '/downloads/TheLastShop-Android.apk',
    icon: FaAndroid,
    enabled: false,
    message: 'Bản tải Android đang được cập nhật.',
  },
]

export default function CreativeProductSection({ onNavigate, onPlay }) {
  const [downloadMessage, setDownloadMessage] = useState(null)

  const handleUnavailableDownload = (message) => {
    setDownloadMessage(message)
    window.clearTimeout(handleUnavailableDownload.timer)
    handleUnavailableDownload.timer = window.setTimeout(() => {
      setDownloadMessage(null)
    }, 2500)
  }

  return (
    <section className="flex h-full flex-col gap-5 rounded-[28px] border border-slate-200 bg-[#fbf8f1] p-5 shadow-2xl shadow-black/5 md:p-7">
      <div>
        <span className="inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-amber-600">
          Sản phẩm sáng tạo
        </span>
        <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-light tracking-tight text-slate-900 md:text-5xl">
          GAME: The Last Shop
        </h2>
        <h2 className="mt-1 text-lg font-semibold tracking-tight text-slate-700 md:text-xl">
          Mô phỏng quá trình cạnh tranh tự do dẫn đến độc quyền
        </h2>
      </div>

      <GlassCard className="flex-1">
        <div className="grid h-full gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="flex h-full flex-col gap-4">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-600">
                HƯỚNG DẪN
              </p>
              <p className="max-w-2xl text-base leading-[1.75] text-slate-600 md:text-[17px]">
                Người chơi nhập vai doanh nghiệp trên thị trường, đưa ra quyết định về giá, sản
                xuất, đổi mới công nghệ và mở rộng thị phần. Qua nhiều vòng chơi, thị trường dần
                xuất hiện xu hướng tích tụ, tập trung và hình thành độc quyền.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {gameCards.map((card) => {
                const Icon = card.icon
                return (
                  <div
                    key={card.title}
                    className="rounded-[20px] border border-[#e3d8c8] bg-white/75 p-4 shadow-[0_10px_24px_rgba(30,40,60,0.04)]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-600">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="mt-4 text-[17px] font-bold leading-tight text-[#162033]">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-[1.65] text-[#5d6b82]">{card.body}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-1 flex flex-wrap items-center gap-3">
              {downloadOptions.map((item) => {
                const Icon = item.icon
                const className =
                  'inline-flex items-center gap-2 rounded-[16px] border border-[#E8CFCF] bg-white px-5 py-3 font-bold text-[#4B2E2E] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFF1DF] hover:text-[#FF8A00]'

                if (item.enabled) {
                  return (
                    <a key={item.id} href={item.href} download className={className}>
                      <Icon className="text-lg" />
                      {item.label}
                    </a>
                  )
                }

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleUnavailableDownload(item.message)}
                    className={className}
                  >
                    <Icon className="text-lg" />
                    {item.label}
                  </button>
                )
              })}
            </div>

            {downloadMessage ? (
              <div className="mt-1 rounded-[16px] border border-[#E8CFCF] bg-[#FFF7ED] px-4 py-3 text-sm font-semibold text-[#8B4F4F] shadow-sm animate-tab-content">
                {downloadMessage}
              </div>
            ) : null}
          </div>

          <div className="flex h-full flex-col rounded-[28px] border border-[#E8CFCF] bg-white/80 p-6 shadow-sm">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#7c8798]">
                Preview
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[22px] border border-[#E8CFCF] bg-[#f7f0e8]">
              <img
                src="/game-preview/the-last-shop-background.png"
                alt="The Last Shop preview"
                className="h-[260px] w-full object-cover object-center sm:h-[290px] lg:h-[320px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0.02)_55%,rgba(0,0,0,0.22)_100%)]" />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onPlay}
                className="inline-flex items-center gap-2 rounded-[16px] bg-[#ff9800] px-4 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#f59e0b]"
              >
                Chơi Game
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </GlassCard>

      <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-xs">
        <button
          type="button"
          onClick={() => onNavigate('closing')}
          className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Quay lại Q&A
        </button>
        <div className="hidden font-mono uppercase tracking-[0.22em] text-amber-600 md:block">
          Mục 4
        </div>
        <button
          type="button"
          onClick={() => onNavigate('hero')}
          className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-3 py-2 font-bold text-black hover:bg-amber-400"
        >
          Về đầu trang ↑
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  )
}
