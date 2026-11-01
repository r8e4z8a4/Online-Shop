import Cantact from "@/Components/Common/Buttons/Contact";
export default function Footer() {
    return (
        <footer className="text-slate-200" dir="rtl">
            <div className="mx-auto dark:bg-dark-bg2 bg-slate-900 max-w-7xl px-4 py-12 sm:px-6 lg:px-8 rounded-t-4xl">
                <div className="grid grid-cols-1 gap-8 min-[380px]:grid-cols-2 min-[660px]:grid-cols-3 md:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">فروشگاه Novix</h3>
                        <p className="text-pretty text-sm leading-relaxed text-slate-400">ما بهترین محصولات را با کیفیت عالی و قیمت مناسب به شما ارائه می‌دهیم. خرید آنلاین آسان و ارسال سریع در سراسر کشور.</p>
                        <div className="flex gap-4">
                            <Cantact />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">خدمات مشتریان</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="text-slate-400 transition-colors hover:text-white">
                                    پیگیری سفارش
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-400 transition-colors hover:text-white">
                                    رویه‌های بازگرداندن کالا
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-400 transition-colors hover:text-white">
                                    شیوه‌های پرداخت
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-400 transition-colors hover:text-white">
                                    راهنمای خرید
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-400 transition-colors hover:text-white">
                                    سوالات متداول
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">دسترسی سریع</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/about-us" className="text-slate-400 transition-colors hover:text-white">
                                    درباره ما
                                </a>
                            </li>
                            <li>
                                <a href="/contact-us" className="text-slate-400 transition-colors hover:text-white">
                                    تماس با ما
                                </a>
                            </li>
                            <li>
                                <a href="/" className="text-slate-400 transition-colors hover:text-white">
                                    فرصت‌های شغلی
                                </a>
                            </li>
                            <li>
                                <a href="/" className="text-slate-400 transition-colors hover:text-white">
                                    قوانین و مقررات
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-400 transition-colors hover:text-white">
                                    حریم خصوصی
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">اطلاعات تماس</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <svg className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-slate-400 leading-relaxed">+989911871566</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-slate-400 leading-relaxed">info@sabzlearn.ir</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-slate-400 leading-relaxed text-pretty">تهران، خیابان ولیعصر، پلاک ۱۲۳</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="my-8 border-t dark:border-dark-border border-slate-800" />

                <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-slate-800 p-2">
                            <img src="/Photos/Electronic-Trust-Symbol.jpg" alt="نماد اعتماد الکترونیک" className="size-full rounded-lg" />
                        </div>
                        <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-slate-800 p-2">
                            <img src="/Photos/samandehi-logo.png" alt="نماد ساماندهی" className="size-full rounded-lg" />
                        </div>
                        <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-slate-800 p-2">
                            <img src="/Photos/thumb-up-like-icon.webp" alt="نماد رضایت" className="size-full rounded-lg" />
                        </div>
                    </div>

                    <div className="text-center text-sm text-slate-400 lg:text-right">
                        <p className="leading-relaxed">
                            تمامی حقوق این وب‌سایت متعلق به <span className="font-bold text-white">فروشگاه Novix</span> می‌باشد © 1405
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t-2 dark:border-dark-border border-slate-800 dark:bg-dark-bg1 bg-slate-900/95 py-4">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-xs leading-relaxed text-slate-500">خرید آنلاین با اطمینان کامل | ارسال رایگان برای سفارش‌های بالای ۵۰۰ هزار تومان | پشتیبانی ۲۴ ساعته</p>
                </div>
            </div>
        </footer>
    );
}
