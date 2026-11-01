import { useNavigate } from 'react-router';
const particles = [
  'left-[11%] top-[17%] size-1 [animation-delay:-0.8s]',
  'left-[48%] top-[8%] size-1.5 [animation-delay:-1.8s]',
  'left-[83%] top-[14%] size-1 [animation-delay:-3s]',
  'left-[7%] top-[43%] size-1.5 [animation-delay:-2.3s]',
  'left-[26%] top-[75%] size-1 [animation-delay:-1.4s]',
  'left-[61%] top-[72%] size-1.5 [animation-delay:-3.7s]',
  'left-[91%] top-[65%] size-1 [animation-delay:-2.7s]',
  'left-[74%] top-[36%] size-1.5 [animation-delay:-.4s]',
  'left-[39%] top-[55%] size-1 [animation-delay:-4.2s]',
  'left-[17%] top-[91%] size-1.5 [animation-delay:-.7s]',
  'left-[96%] top-[39%] size-1 [animation-delay:-1.1s]',
  'left-[53%] top-[92%] size-1 [animation-delay:-2.9s]',
];
export default function Forbidden({userName = 'کاربر واردشده',}) {
  const navigate=useNavigate()
  return (
    <main dir="rtl" className={`relative isolate flex min-h-svh items-center justify-center overflow-hidden bg-[#121212] px-0 py-0 text-[#eee7da] selection:bg-[#ffb14d] selection:text-[#25150d] sm:px-6 sm:py-6`}>
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-75 bg-[linear-gradient(rgba(255,211,143,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,211,143,0.04)_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_at_center,black,transparent_67%)]" />
      <div className="pointer-events-none absolute -right-36 -top-40 -z-10 size-108 rounded-full bg-[radial-gradient(circle,rgba(255,101,52,0.16),transparent_66%)] blur-xl transform-[translate(calc(var(--pointer-x,0)*14px),calc(var(--pointer-y,0)*10px))]" />
      <div className="pointer-events-none absolute -bottom-52 -left-36 -z-10 size-112 rounded-full bg-[radial-gradient(circle,rgba(255,189,92,0.12),transparent_67%)] blur-xl transform-[translate(calc(var(--pointer-x,0)*-11px),calc(var(--pointer-y,0)*-8px))]" />
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {particles.map((particle, index) => (
          <i key={index} className={`absolute block rounded-full bg-[#ffc762] opacity-30 shadow-[0_0_12px_2px_rgba(255,173,77,0.35)] animate-pulse [animation-duration:2.8s] ${particle}`} />
        ))}
      </div>
      <section aria-labelledby="forbidden-title" className={`relative w-full max-w-280 overflow-hidden border border-[#ffeecb]/15 bg-[#211f1e]/80 shadow-[0_28px_85px_rgba(0,0,0,0.42),inset_0_1px_rgba(255,255,255,0.045)] backdrop-blur-xl transition-[opacity,transform,filter] duration-700 ease-out sm:rounded-sm translate-y-0 scale-100 opacity-100`}>
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#ffcc7a]/25 to-transparent" />
        <div className="flex items-center justify-between border-b border-[#ffeecb]/15 px-5 py-4 sm:px-9 lg:px-13">
          <a href="/" aria-label="بازگشت به خانه" className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.12em] text-[#eee7da] outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-[#ffc762] focus-visible:ring-offset-4 focus-visible:ring-offset-[#211f1e]">
            <span className="flex skew-x-[-16deg] gap-0.75" aria-hidden="true"><i className="block h-3.5 w-1 bg-[#ffc762]" /><i className="-mt-0.75 block h-4.75 w-1 bg-[#ff6c3b]" /><i className="block h-3.5 w-1 bg-[#f4e6c9]" /></span>
            <span dir="ltr">Novix Web</span>
          </a>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[.07] bg-white/4 px-2.5 py-1.5 text-[11px] text-[#c5beb2]">
            <span className="size-1.5 rounded-full bg-[#abcfb7] shadow-[0_0_0_3px_rgba(171,207,183,0.1)]" />
            <span>{userName}</span>
          </div>
        </div>
        <div className="grid min-h-125 items-center gap-8 px-5 py-12 sm:px-10 sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,.95fr)] lg:gap-20 lg:px-18 lg:py-22">
          <div className="relative z-10 text-center lg:text-right">
            <div className="mb-5 flex items-center justify-center gap-2 text-[13px] font-semibold tracking-[.045em] text-[#ffc762] lg:justify-start">
              <span className="relative flex size-1.75"><span className="absolute inline-flex size-full animate-ping rounded-full bg-[#ff4a3f] opacity-70" /><span className="relative inline-flex size-1.75 rounded-full bg-[#ff4a3f]" /></span>
              خطای دسترسی <b dir="ltr" className="mr-1 text-[11px] font-medium text-[#9d978e]">403</b>
            </div>
            <h1 id="forbidden-title" className="text-[clamp(2.45rem,5.1vw,4.3rem)] font-extrabold leading-[1.19] tracking-[-.06em] text-[#eee7da]">
              این بخش<br /><span className="text-transparent [-webkit-text-stroke:1px_rgba(255,213,151,0.75)] [text-shadow:0_0_27px_rgba(255,104,59,0.12)]">ورود ممنوع</span> است.
            </h1>
            <p className="mx-auto my-6 max-w-113.75 text-[15px] leading-[2.1] text-[#9d978e] lg:mx-0 lg:mb-8 lg:mt-6">
              شما وارد بخش مدیریت شده‌اید؛ اما سطح دسترسی حساب فعلی برای دیدن این صفحه کافی نیست.
            </p>
            <button type="button" onClick={()=>navigate('/')} className="group relative inline-flex min-h-12.25 w-full items-center justify-center gap-4 overflow-hidden bg-linear-to-l from-[#ff6c3b] to-[#ff8248] px-5 py-3 text-[13px] font-semibold text-[#211311] shadow-[0_9px_26px_rgba(255,90,45,0.2)] outline-none transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(255,90,45,0.3)] focus-visible:ring-2 focus-visible:ring-[#ffc762] focus-visible:ring-offset-4 focus-visible:ring-offset-[#211f1e] sm:w-auto">
              <span className="absolute -left-1/2 top-[-30%] h-[160%] w-7 rotate-26 bg-white/30 transition-transform duration-500 group-hover:translate-x-[600%]" />
              <span className="relative">بازگشت به صفحهٔ اصلی</span>
              <svg className="relative size-4.5 fill-none stroke-current stroke-[1.7]" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7-7-7 7 7 7" /></svg>
            </button>
            <p className="mt-6 text-[12px] text-[#79746c]">فکر می‌کنید باید به این صفحه دسترسی داشته باشید؟ <a className="text-[#d8b77c] underline decoration-[#d8b77c]/35 underline-offset-4 outline-none hover:text-[#ffc762] focus-visible:ring-2 focus-visible:ring-[#ffc762]" href="mailto:rezahoushmand8484@Email.com">با پشتیبانی تماس بگیرید</a></p>
          </div>
          <div aria-hidden="true" className="relative order-first mx-auto aspect-square w-full max-w-71.25 lg:order-0 lg:max-w-99">
            <div className="absolute inset-[9%] rounded-full bg-[radial-gradient(circle,rgba(255,116,60,0.20),rgba(255,152,62,0.05)_39%,transparent_69%)] animate-pulse [animation-duration:3.5s]" />
            <div className="absolute inset-[3%] animate-spin rounded-full border border-[#ffd892]/15 [animation-duration:17s]"><i className="absolute -top-0.75 right-[19%] size-1.5 rounded-full bg-[#ffc762] shadow-[0_0_13px_2px_rgba(255,174,79,0.42)]" /><i className="absolute bottom-[14%] left-[2%] size-1.5 rounded-full bg-[#ffc762] shadow-[0_0_13px_2px_rgba(255,174,79,0.42)]" /></div>
            <div className="absolute inset-[14%] animate-spin rounded-full border border-[#ff6c3b]/20 [animation-direction:reverse] [animation-duration:12s]"><i className="absolute left-[8%] top-[23%] size-2.5 rounded-full border border-[#ff6c3b]/50" /></div>
            <div className="absolute left-1/2 top-1/2 h-46.25 w-53.5 -translate-x-1/2 -translate-y-1/2 rotate-[-4deg] overflow-hidden border border-[#ffdfaa]/20 bg-linear-to-br from-[#3e3732] to-[#242222] shadow-[12px_20px_37px_rgba(0,0,0,0.35),inset_1px_1px_rgba(255,255,255,0.08)] animate-bounce [animation-duration:4.2s]">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent_0_35px,rgba(255,255,255,0.018)_35px_36px)]" />
              <div className="absolute inset-x-0 top-1/2 h-px bg-linear-to-r from-transparent via-[#ffcc7a]/10 to-transparent" />
              <i className="absolute left-2.75 top-2.75 size-3.75 border-l border-t border-[#ff6c3b]" /><i className="absolute right-2.75 top-2.75 size-3.75 border-r border-t border-[#ff6c3b]" /><i className="absolute bottom-2.75 left-2.75 size-3.75 border-b border-l border-[#ff6c3b]" /><i className="absolute bottom-2.75 right-2.75 size-3.75 border-b border-r border-[#ff6c3b]" />
              <div className="absolute left-1/2 top-7.75 z-10 -translate-x-1/2"><div className="mx-auto h-12.25 w-16.5 rounded-t-[26px] border-10 border-b-0 border-[#d1ba8f]" /><div className="relative -mt-px h-14 w-21 border border-[#f9deb1] bg-linear-to-br from-[#f0d49b] to-[#b89059] shadow-[0_6px_12px_rgba(0,0,0,0.25)]"><i className="absolute left-1/2 top-4.5 h-4.25 w-3.25 -translate-x-1/2 rounded-[50%_50%_42%_42%] bg-[#533827] before:absolute before:left-1.25 before:top-2.75 before:h-2.5 before:w-0.75 before:bg-[#533827]" /></div></div>
              <div className="absolute bottom-4.25 left-6.5 right-6.5 z-10 h-4.75 overflow-hidden border border-[#ffebc3]/15 bg-black/55"><i className="absolute inset-x-0 top-0 h-px bg-[#ffcd6e] shadow-[0_0_9px_#ff8b52] animate-bounce [animation-duration:1.75s]" /></div>
              <span className="absolute -bottom-2.75 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap text-[8px] tracking-[.15em] text-[#ff4a3f] [text-shadow:0_0_9px_rgba(255,74,63,0.65)]">ACCESS DENIED</span>
            </div>
            <div className="absolute right-[-2%] top-[10%] border border-[#ffe1b1]/15 bg-[#1b1918]/75 px-2.5 py-2 text-[10px] text-[#aaa198] backdrop-blur-sm"><i className="ml-1 inline-block size-1.25 rounded-full bg-[#abcfb7] align-[1px]" />سیستم محافظت‌شده</div>
            <div dir="ltr" className="absolute bottom-[10%] left-[-4%] border border-[#ffe1b1]/15 bg-[#1b1918]/75 px-2.5 py-2 text-[10px] tracking-[.06em] text-[#aaa198] backdrop-blur-sm"><b className="mr-1 text-[#ff6c3b]">●</b> AUTH / 403</div>
          </div>
        </div>
        <div dir="ltr" className="flex items-center justify-center border-t border-[#ffeecb]/15 px-5 py-5 text-[10px] tracking-[.08em] text-[#77736c] sm:justify-between sm:px-9 lg:px-13">
          <span className="hidden sm:inline">SECURE AREA <i className="mx-2 inline-block size-1.25 rounded-full bg-[#ff6c3b] align-[1px]" /> UNAUTHORIZED REQUEST</span>
          <span>© {new Date().getFullYear()} Novix Web</span>
        </div>
      </section>
    </main>
  );
}
