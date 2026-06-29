import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { analysisSections, navItems } from './data/siteData'
import { theorySections } from './data/theoryContent'
import GlassCard from './components/GlassCard'
import TheorySection from './components/TheorySection'
import QASection from './components/QASection'
import BoardgameSection from './components/BoardgameSection'
import BoardgamePlay from './components/BoardgamePlay'
import TabStage from './components/TabStage'

const theoryOrder = theorySections.map((item) => item.id)
const analysisOrder = analysisSections.map((item) => item.id)
const BOARDGAME_PLAY_PATH = '/boardgame-play'
const mainSectionIds = new Set(navItems.map((item) => item.id))

function readLocationState() {
  if (typeof window === 'undefined') {
    return { route: 'main', section: 'hero' }
  }

  const { pathname, search } = window.location
  if (pathname === BOARDGAME_PLAY_PATH) {
    return { route: 'boardgame-play', section: 'boardgame' }
  }

  const section = new URLSearchParams(search).get('section')
  return {
    route: 'main',
    section: mainSectionIds.has(section) ? section : 'hero',
  }
}

function App() {
  const initialLocation = readLocationState()
  const [route, setRoute] = useState(initialLocation.route)
  const [activeSection, setActiveSection] = useState(initialLocation.section)
  const [activeTheory, setActiveTheory] = useState('1.1')
  const [theoryMotion, setTheoryMotion] = useState('left')
  const [activeAnalysis, setActiveAnalysis] = useState('3.1')
  const [analysisMotion, setAnalysisMotion] = useState('left')

  const activeAnalysisSection = analysisSections.find((item) => item.id === activeAnalysis)
  const isHero = route === 'main' && activeSection === 'hero'

  useEffect(() => {
    const handlePopState = () => {
      const nextLocation = readLocationState()
      setRoute(nextLocation.route)
      setActiveSection(nextLocation.section)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const goSection = (id) => {
    setRoute('main')
    setActiveSection(id)

    if (typeof window !== 'undefined') {
      const nextUrl = id === 'boardgame' ? '/?section=boardgame' : '/'
      window.history.pushState({ route: 'main', section: id }, '', nextUrl)
    }
  }

  const goBoardgamePlay = () => {
    setRoute('boardgame-play')

    if (typeof window !== 'undefined') {
      window.history.pushState({ route: 'boardgame-play' }, '', BOARDGAME_PLAY_PATH)
    }
  }

  const moveTheory = (id) => {
    const nextIndex = theoryOrder.indexOf(id)
    const currentIndex = theoryOrder.indexOf(activeTheory)
    setTheoryMotion(nextIndex >= currentIndex ? 'left' : 'right')
    setActiveTheory(id)
  }

  const moveAnalysis = (id) => {
    const nextIndex = analysisOrder.indexOf(id)
    const currentIndex = analysisOrder.indexOf(activeAnalysis)
    setAnalysisMotion(nextIndex >= currentIndex ? 'left' : 'right')
    setActiveAnalysis(id)
  }

  const hero = (
    <section className="relative h-[100svh] w-[100vw] overflow-hidden bg-[#071018]">
      <div className="absolute inset-0 bg-[url('/assets/hero-city-1.jpg')] bg-cover bg-center" />
      <video
        className="absolute inset-0 h-full w-full object-cover object-center opacity-82 saturate-110 contrast-105"
        src="/assets/hero-loop.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/hero-city-1.jpg"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.80)_0%,rgba(0,0,0,0.56)_26%,rgba(0,0,0,0.18)_58%,rgba(0,0,0,0.42)_82%,rgba(0,0,0,0.72)_100%),linear-gradient(0deg,rgba(0,0,0,0.56)_0%,rgba(0,0,0,0.16)_36%,rgba(0,0,0,0)_58%,rgba(0,0,0,0.40)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_38%,rgba(255,204,92,0.30),rgba(255,180,0,0.12)_18%,transparent_48%),radial-gradient(circle_at_18%_24%,rgba(255,176,0,0.16),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(255,255,255,0.10),transparent_18%)] mix-blend-screen" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_18%,rgba(0,0,0,0)_34%,rgba(0,0,0,0.16)_70%,rgba(0,0,0,0.28)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,236,180,0.14),transparent_18%)] blur-3xl" />

      <div className="relative h-full w-full">
        <div className="absolute left-6 top-1/2 max-w-[720px] -translate-y-[35%] px-0 sm:left-10 md:left-[72px]">
          <h1 className="max-w-[720px] font-[family-name:var(--font-heading)] text-[44px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[52px] md:text-[76px] xl:text-[92px]">
            <span className="block">
              Từ <span className="text-[#ffb000]">cạnh tranh tự do</span>
            </span>
            <span className="block">
              đến <span className="text-[#ffb000]">độc quyền</span>
            </span>
          </h1>

          <div className="mt-7 flex max-w-[620px] items-start gap-4">
            <span className="mt-2 h-16 w-[2px] shrink-0 bg-[#ffb000]" />
            <p className="max-w-[620px] text-[18px] leading-[1.45] text-white/95 sm:text-[20px] md:text-[22px]">
              Lý luận của V.I. Lênin về các đặc điểm kinh tế của Chủ nghĩa tư bản độc quyền và bài
              học lịch sử sâu sắc.
            </p>
          </div>

          <p className="mt-8 max-w-[680px] text-[11px] font-semibold uppercase tracking-[0.34em] text-white/74 sm:text-xs">
            BÀI THUYẾT TRÌNH NHÓM: <span className="text-[#ffb000]">SỐ BA</span> • ĐẠI HỌC FPT
          </p>

          <button
            type="button"
            onClick={() => goSection('theory')}
            className="mt-8 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.38em] text-white/75 transition-colors hover:text-[#ffb000] sm:text-xs"
          >
            <span>KHÁM PHÁ LÝ LUẬN</span>
            <span className="h-px w-10 bg-white/45" />
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  )

  const theory = (
    <TheorySection
      section={theorySections}
      activeId={activeTheory}
      direction={theoryMotion}
      onNavigate={goSection}
      onSelect={moveTheory}
    />
  )

  const caseStudy = (
    <section className="flex h-full flex-col gap-5 rounded-[28px] border border-slate-200 bg-[#fbf8f1] p-5 shadow-2xl shadow-black/5 md:p-7">
      <div>
        <span className="inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-amber-600">
          Phần II
        </span>
        <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-light tracking-tight text-slate-900 md:text-5xl">
          Case Study
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          Mục này đang phát triển. Hiện tạm giữ khung nội dung để không làm hỏng mạch điều hướng
          của bài thuyết trình.
        </p>
      </div>

      <GlassCard className="flex-1">
        <div className="flex h-full flex-col justify-center text-center">
          <p className="text-xs font-mono uppercase tracking-[0.28em] text-amber-600">
            Đang phát triển
          </p>
          <h3 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            Nội dung case study sẽ được cập nhật sau
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
            Trang này chỉ giữ vị trí trong luồng trình bày. Khi hoàn thiện, phần ví dụ sẽ được bổ
            sung theo cấu trúc học thuật riêng.
          </p>
        </div>
      </GlassCard>

      <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-xs">
        <button
          type="button"
          onClick={() => goSection('theory')}
          className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Quay lại Phần I
        </button>
        <div className="hidden font-mono uppercase tracking-[0.22em] text-amber-600 md:block">
          Mục 2
        </div>
        <button
          type="button"
          onClick={() => goSection('analysis')}
          className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-3 py-2 font-bold text-black hover:bg-amber-400"
        >
          Tiếp tục phần III
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  )

  const analysis = (
    <section className="flex h-full flex-col gap-5 rounded-[28px] border border-slate-200 bg-[#fbf8f1] p-5 shadow-2xl shadow-black/5 md:p-7">
      <div>
        <span className="inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-amber-600">
          Phần III
        </span>
        <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-light tracking-tight text-slate-900 md:text-5xl">
          Đánh giá & Liên hệ thực tế
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          Phân tích biện chứng về mối quan hệ giữa độc quyền và cạnh tranh cùng bài học lịch sử
          sâu sắc của đề tài.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
        <div className="flex gap-2 overflow-x-auto">
          {analysisSections.map((item) => {
            const active = item.id === activeAnalysis
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => moveAnalysis(item.id)}
                className={[
                  'whitespace-nowrap rounded-xl px-4 py-3 text-xs font-semibold transition-all md:text-sm',
                  active
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/10'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900',
                ].join(' ')}
              >
                {item.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        {activeAnalysisSection && (
          <TabStage activeKey={activeAnalysisSection.id} direction={analysisMotion} className="h-full">
            <div className="grid h-full gap-4 md:grid-cols-12">
              {activeAnalysisSection.layout === 'quote' ? (
                <>
                  <GlassCard className="md:col-span-7" delay={0}>
                    <p className="text-xs font-mono uppercase tracking-[0.22em] text-amber-600">
                      {activeAnalysisSection.eyebrow}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      {activeAnalysisSection.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {activeAnalysisSection.intro}
                    </p>
                    <div className="mt-5 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
                      <p className="text-base italic leading-relaxed text-slate-800">
                        {activeAnalysisSection.quote}
                      </p>
                    </div>
                  </GlassCard>
                  {activeAnalysisSection.panels.map((panel, index) => (
                    <GlassCard key={panel.title} className="md:col-span-5" delay={index * 70 + 30}>
                      <p className="text-xs font-mono uppercase tracking-[0.22em] text-amber-600">
                        {panel.title}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{panel.text}</p>
                    </GlassCard>
                  ))}
                </>
              ) : null}

              {activeAnalysisSection.layout === 'cards' ? (
                <>
                  <GlassCard className="md:col-span-12" delay={0}>
                    <p className="text-xs font-mono uppercase tracking-[0.22em] text-amber-600">
                      {activeAnalysisSection.eyebrow}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      {activeAnalysisSection.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {activeAnalysisSection.intro}
                    </p>
                  </GlassCard>
                  {activeAnalysisSection.cards.map((card, index) => {
                    const Icon = card.icon
                    return (
                      <GlassCard key={card.title} className="md:col-span-3" delay={index * 60}>
                        <div className="flex h-full flex-col">
                          <div className="mb-4 rounded-full border border-amber-500/20 bg-amber-500/10 p-2 text-amber-600">
                            <Icon className="h-4 w-4" />
                          </div>
                          <h4 className="text-base font-bold text-slate-900">{card.title}</h4>
                          <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.text}</p>
                        </div>
                      </GlassCard>
                    )
                  })}
                </>
              ) : null}

              {activeAnalysisSection.layout === 'timeline' ? (
                <>
                  <GlassCard className="md:col-span-12" delay={0}>
                    <p className="text-xs font-mono uppercase tracking-[0.22em] text-amber-600">
                      {activeAnalysisSection.eyebrow}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      {activeAnalysisSection.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {activeAnalysisSection.intro}
                    </p>
                  </GlassCard>
                  {activeAnalysisSection.timeline.map((item, index) => (
                    <GlassCard key={item.year} className="md:col-span-4" delay={index * 70}>
                      <p className="text-xs font-mono uppercase tracking-[0.22em] text-amber-600">
                        {item.year}
                      </p>
                      <h4 className="mt-2 text-lg font-bold text-slate-900">{item.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                    </GlassCard>
                  ))}
                </>
              ) : null}
            </div>
          </TabStage>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-xs">
        <button
          type="button"
          onClick={() => goSection('case-study')}
          className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Quay lại Phần II
        </button>
        <div className="hidden font-mono uppercase tracking-[0.22em] text-amber-600 md:block">
          Mục 3
        </div>
        <button
          type="button"
          onClick={() => goSection('closing')}
          className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-3 py-2 font-bold text-black hover:bg-amber-400"
        >
          Tiếp tục phần Q&A
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  )

  const closing = <QASection onNavigate={goSection} />
  const boardgame = <BoardgameSection onNavigate={goSection} onPlay={goBoardgamePlay} />

  const screen = {
    hero,
    theory,
    'case-study': caseStudy,
    analysis,
    boardgame,
    closing,
  }[activeSection]

  const header = (
    <header
      className={[
        'fixed inset-x-4 top-5 z-50 md:inset-x-16',
      ].join(' ')}
    >
      <div
        className={[
          'mx-auto flex h-[66px] w-full items-center justify-between gap-4 rounded-[18px] px-4 backdrop-blur-[14px] md:h-[70px] md:px-5',
          isHero
            ? 'border border-white/20 bg-[rgba(10,30,45,0.34)] shadow-[0_10px_32px_rgba(0,0,0,0.18)]'
            : 'border border-white/40 bg-[rgba(255,255,255,0.58)] shadow-[0_10px_28px_rgba(30,40,60,0.08)]',
        ].join(' ')}
      >
        <div className="flex items-center gap-3">
          <img
            src="/assets/FPT_Education_logo.svg"
            alt="FPT Education Logo"
            className="h-8 w-auto shrink-0"
          />
          <div
          className={[
            'border-l pl-3 leading-tight',
            isHero ? 'hidden border-white/20 sm:block' : 'hidden border-slate-200/70 sm:block',
          ].join(' ')}
          >
            <p
              className={[
                'text-[10px] font-semibold uppercase tracking-[0.28em]',
                isHero ? 'text-white/70' : 'text-amber-600',
              ].join(' ')}
            >
              Môn thuyết trình
            </p>
            <p className={isHero ? 'text-[12px] text-white/78' : 'text-[12px] text-slate-500'}>
              Kinh tế chính trị Mác - Lênin
            </p>
          </div>
        </div>

        <nav
          className={[
            'flex h-full items-center gap-1 overflow-x-auto whitespace-nowrap text-xs md:gap-2 md:text-sm',
            isHero
              ? 'no-scrollbar rounded-[12px] border border-white/10 bg-white/0 px-1 py-1 text-white/80'
              : 'rounded-[12px] bg-white/30 p-1 text-xs text-slate-600',
          ].join(' ')}
        >
          {navItems.map((item) => {
            const active = activeSection === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => goSection(item.id)}
                className={[
                  'relative whitespace-nowrap rounded-[10px] px-3 py-2 transition-all duration-300 md:px-4',
                  isHero
                    ? active
                      ? 'text-[#ffb000]'
                      : 'text-white/78 hover:text-white'
                    : active
                      ? 'font-semibold text-amber-600'
                      : 'text-slate-500 hover:text-slate-900',
                ].join(' ')}
              >
                {item.label}
                {active ? (
                  <span
                    className={[
                      'absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full',
                      isHero ? 'bg-[#ffb000]' : 'bg-amber-500',
                    ].join(' ')}
                  />
                ) : null}
              </button>
            )
          })}
        </nav>
      </div>
    </header>
  )

  if (route === 'boardgame-play') {
    return <BoardgamePlay />
  }

  if (isHero) {
    return (
      <div className="min-h-[100svh] overflow-hidden bg-black text-slate-900">
        {header}
        <main className="h-[100svh] w-[100vw]">{hero}</main>
      </div>
    )
  }

  return (
    <div
      className={[
        'flex min-h-[100svh] flex-col overflow-visible text-slate-900',
        isHero ? 'bg-[#05070a]' : 'bg-[#f5efe4]',
      ].join(' ')}
    >
      {header}

      <main className="flex-1 overflow-visible px-4 pb-4 pt-[118px] md:px-16 md:pb-8 md:pt-[132px]">
        <div className="mx-auto h-auto max-w-7xl">
          <div className="h-auto overflow-visible">
            {screen}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
