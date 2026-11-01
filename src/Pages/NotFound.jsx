import { Link, useLocation, useNavigate } from "react-router";
const stars = [
    { left: "7%", top: "14%", size: 3, delay: "-2.3s", duration: "4.4s" },
    { left: "13%", top: "71%", size: 2, delay: "-0.8s", duration: "5.8s" },
    { left: "19%", top: "33%", size: 2, delay: "-3.1s", duration: "4.9s" },
    { left: "26%", top: "84%", size: 3, delay: "-4.4s", duration: "6.2s" },
    { left: "31%", top: "9%", size: 2, delay: "-1.7s", duration: "4.1s" },
    { left: "39%", top: "58%", size: 2, delay: "-2.8s", duration: "5.3s" },
    { left: "48%", top: "18%", size: 3, delay: "-5.1s", duration: "6.6s" },
    { left: "58%", top: "80%", size: 2, delay: "-1.1s", duration: "4.7s" },
    { left: "67%", top: "11%", size: 2, delay: "-3.6s", duration: "5.9s" },
    { left: "74%", top: "49%", size: 3, delay: "-2.1s", duration: "4.5s" },
    { left: "82%", top: "78%", size: 2, delay: "-4.8s", duration: "6.1s" },
    { left: "88%", top: "25%", size: 3, delay: "-0.4s", duration: "5.1s" },
    { left: "94%", top: "61%", size: 2, delay: "-3.2s", duration: "4.3s" },
];
function HomeIcon() {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
            <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M9.5 21v-6h5v6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
    );
}
function ArrowIcon() {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
            <path d="M19 12H5m6 6-6-6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
export default function NotFound() {
    const location = useLocation();
    const navigate = useNavigate();
    const requestedPath = location.pathname + location.search;
    const displayedPath = requestedPath.length > 58 ? `${requestedPath.slice(0, 55)}…` : requestedPath;
    return (
        <main dir="rtl" className="not-found-page relative isolate grid min-h-dvh place-items-center overflow-hidden bg-[#050816] px-5 py-10 font-sans text-slate-100">
            <style>{`
        .nf-stars {
          background-image:
            radial-gradient(circle at 18% 22%, rgba(255,255,255,.72) 0 1px, transparent 1.5px),
            radial-gradient(circle at 70% 38%, rgba(125,211,252,.55) 0 1px, transparent 1.5px),
            radial-gradient(circle at 38% 78%, rgba(196,181,253,.45) 0 1px, transparent 1.5px);
          background-size: 190px 190px, 250px 250px, 320px 320px;
          animation: nf-drift 18s linear infinite alternate;
        }
        .nf-orbit { animation: nf-orbit 16s linear infinite; }
        .nf-orbit-reverse { animation-direction: reverse; animation-duration: 22s; }
        .nf-planet { animation: nf-float 6s ease-in-out infinite; }
        .nf-glitch-one { animation: nf-glitch-one 6.5s steps(1, end) infinite; }
        .nf-glitch-two { animation: nf-glitch-two 7.1s steps(1, end) infinite; }
        .nf-scan { animation: nf-scan 4.2s ease-in-out infinite; }
        .nf-twinkle { animation: nf-twinkle var(--twinkle-duration) ease-in-out var(--twinkle-delay) infinite; }
        @keyframes nf-drift { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(24px, -18px, 0); } }
        @keyframes nf-orbit { to { transform: rotate(360deg); } }
        @keyframes nf-float { 0%, 100% { transform: translateY(-8px); } 50% { transform: translateY(10px); } }
        @keyframes nf-twinkle { 0%, 100% { opacity: .2; transform: scale(.8); } 50% { opacity: 1; transform: scale(1.5); } }
        @keyframes nf-scan { 0%, 58%, 100% { transform: translateX(-130%) skewX(-18deg); opacity: 0; } 65% { opacity: .72; } 88% { transform: translateX(240%) skewX(-18deg); opacity: 0; } }
        @keyframes nf-glitch-one { 0%, 91%, 100% { transform: translate(0); clip-path: inset(0); } 92% { transform: translate(-5px, 1px); clip-path: inset(52% 0 22% 0); } 94% { transform: translate(4px, -1px); clip-path: inset(14% 0 62% 0); } 96% { transform: translate(-2px, 0); clip-path: inset(74% 0 7% 0); } }
        @keyframes nf-glitch-two { 0%, 84%, 100% { transform: translate(0); clip-path: inset(0); } 85% { transform: translate(5px, 1px); clip-path: inset(12% 0 62% 0); } 87% { transform: translate(-4px, -1px); clip-path: inset(68% 0 13% 0); } 89% { transform: translate(2px, 0); clip-path: inset(33% 0 42% 0); } }
        @media (prefers-reduced-motion: reduce) {
          .not-found-page *, .not-found-page *::before, .not-found-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
            <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_45%,#172554_0%,transparent_34%),radial-gradient(circle_at_4%_100%,#312e81_0%,transparent_32%),radial-gradient(circle_at_95%_6%,#164e63_0%,transparent_27%)]" />
            <div aria-hidden="true" className="nf-stars absolute inset-0 -z-10 opacity-80 motion-reduce:animate-none" />
            <div aria-hidden="true" className="absolute -left-28 top-1/4 size-80 rounded-full bg-cyan-400/15 blur-3xl animate-pulse motion-reduce:animate-none" />
            <div aria-hidden="true" className="absolute -right-20 bottom-0 size-96 rounded-full bg-violet-500/15 blur-3xl animate-pulse [animation-delay:-1.7s] motion-reduce:animate-none" />
            {stars.map((star) => (
                <span
                    aria-hidden="true"
                    className="nf-twinkle absolute rounded-full bg-white shadow-[0_0_12px_rgba(186,230,253,.95)] motion-reduce:animate-none"
                    key={`${star.left}-${star.top}`}
                    style={{
                        left: star.left,
                        top: star.top,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        "--twinkle-delay": star.delay,
                        "--twinkle-duration": star.duration,
                    }}
                />
            ))}
            <section className="relative w-full max-w-3xl text-center">
                <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-18 -z-10 size-72 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-[90px]" />
                <div aria-hidden="true" className="relative mx-auto mb-2 grid h-16 w-16 place-items-center">
                    <div className="nf-orbit absolute inset-0 rounded-full border border-cyan-200/30 motion-reduce:animate-none">
                        <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-cyan-200 shadow-[0_0_14px_4px_rgba(103,232,249,.55)]" />
                    </div>
                    <div className="nf-orbit nf-orbit-reverse absolute inset-2 rotate-45 rounded-full border border-violet-300/30 motion-reduce:animate-none">
                        <span className="absolute -bottom-1 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-violet-200 shadow-[0_0_14px_4px_rgba(196,181,253,.55)]" />
                    </div>
                    <div className="nf-planet size-6 rounded-full bg-linear-to-br from-cyan-100 via-sky-300 to-violet-500 shadow-[0_0_26px_8px_rgba(125,211,252,.33)] motion-reduce:animate-none" />
                </div>
                <p className="mb-3 text-sm font-medium tracking-[0.18em] text-cyan-100/75">خطای مسیریابی · ۴۰۴</p>
                <div className="relative mx-auto w-fit select-none" aria-label="404">
                    <span aria-hidden="true" className="nf-glitch-one absolute inset-0 bg-linear-to-b from-cyan-300 to-sky-500 bg-clip-text text-8xl font-black tracking-tighter text-transparent opacity-45 blur-[1px] sm:text-9xl md:text-[12rem] motion-reduce:animate-none">
                        404
                    </span>
                    <span aria-hidden="true" className="nf-glitch-two absolute inset-0 bg-linear-to-b from-violet-300 to-fuchsia-500 bg-clip-text text-8xl font-black tracking-tighter text-transparent opacity-40 blur-[1px] sm:text-9xl md:text-[12rem] motion-reduce:animate-none">
                        404
                    </span>
                    <h1 className="relative overflow-hidden bg-linear-to-b from-white via-sky-100 to-violet-300 bg-clip-text text-8xl font-black tracking-tighter text-transparent drop-shadow-[0_0_38px_rgba(125,211,252,.27)] sm:text-9xl md:text-[12rem]">
                        <span className="nf-scan pointer-events-none absolute inset-y-0 w-1/4 bg-linear-to-r from-transparent via-white/80 to-transparent mix-blend-screen motion-reduce:animate-none" />
                        404
                    </h1>
                </div>
                <div className="mx-auto mt-2 max-w-xl rounded-3xl border border-white/10 bg-slate-950/35 px-6 py-7 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl sm:px-10">
                    <h2 className="text-2xl font-bold text-white sm:text-3xl">اوه! این صفحه از مدار خارج شده.</h2>
                    <p className="mt-3 leading-8 text-slate-300">آدرسی که دنبالش هستی وجود ندارد، حذف شده یا شاید به جای دیگری منتقل شده است. از یکی از مسیرهای زیر دوباره شروع کنیم.</p>
                    <div className="mt-4 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-100/10 bg-white/5 px-4 py-2 text-xs text-cyan-100/75" dir="ltr">
                        <span className="size-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,.9)]" />
                        <code className="truncate" title={requestedPath}>
                            {displayedPath}
                        </code>
                    </div>
                    <div className="mt-7 flex flex-col-reverse justify-center gap-3 sm:flex-row">
                        <button type="button" onClick={()=>navigate(-1)} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/35 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">
                            <ArrowIcon />
                            بازگشت به صفحه قبل
                        </button>
                        <Link to="/" className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-l from-cyan-300 via-sky-300 to-violet-300 px-5 py-3 font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-cyan-400/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200">
                            <HomeIcon />
                            بازگشت به خانه
                            <span aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-x-1">
                                ←
                            </span>
                        </Link>
                    </div>
                </div>
                <p className="mt-6 text-xs text-slate-400/70">اگر فکر می‌کنی این آدرس باید وجود داشته باشد، با پشتیبانی در تماس باش.</p>
            </section>
        </main>
    );
}