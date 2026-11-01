import { useContext, useEffect, useState } from "react";
import { CardContext } from "@/Context/CardContext.jsx";
import LocationPicker from "@/Components/Templates/Cart/Checkout/Map";
import GEThandler from "@/API/GEThandler";
import { VscDebugRestart } from "react-icons/vsc";
import Select from "react-select";
import { ThemeContext } from "@/Context/ThemeContext";
import { validate } from "@/Validators";
import CheckOutSchema from "@/Validators/checkOut";
import POSThandler from "@/API/POSThandler";
import { toast } from "sonner";
import Button_7 from "@/Components/Common/Buttons/Button_7";
const TAX_RATE = 0.09;
const CheckoutPage = () => {
    const [manageCities, setManageCities] = useState({ cities: [], isLoading: true });
    const { theme } = useContext(ThemeContext);
    const [isLoading, setIsLoading] = useState(false);
    const [location, setLocation] = useState(null);
    const { items } = useContext(CardContext);
    const subTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = Math.round(subTotal * TAX_RATE);
    const totalPrice = subTotal + tax + 100000;
    const [formData, setFormData] = useState({ address: "", postalCode: "", cityId: "" });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const fetchLocation = async (refetch = false) => {
        refetch && setManageCities({ ...manageCities, isLoading: true });
        try {
            const { data } = await GEThandler("location");
            const cities = data.cities.map((i) => {
                return { value: i.id, label: i.name };
            });
            setManageCities({ cities, isLoading: false });
        } catch (error) {
            setManageCities({ ...manageCities, isLoading: false });
        }
    };
    const handleCityChange = (selectedOption) => {
        setFormData({ ...formData, cityId: String(selectedOption?.value) });
    };
    const selectStyles = (isDark) => ({
        control: (base) => ({
            ...base,
            height: "50px",
            backgroundColor: isDark ? "#081e29" : "#e4e4e7",
            borderRadius: "10px",
            "&:hover": {
                border: `1px solid ${theme == "dark" ? "#0d4655" : "#99a1af"}`,
            },
            border: `1px solid ${theme == "dark" ? "#0d4655" : "#99a1af"}`,
        }),

        singleValue: (base) => ({
            ...base,
            color: isDark ? "#9ca3af" : "#6b7280",
        }),

        input: (base) => ({
            ...base,
            color: isDark ? "#f9fafb" : "#111827",
        }),

        placeholder: (base) => ({
            ...base,
            fontSize: "14px",
            color: isDark ? "#9ca3af" : "#6b7280",
        }),

        menu: (base) => ({
            ...base,
            backgroundColor: isDark ? "#1f2937" : "#ffffff",
            zIndex: 9999,
        }),

        menuList: (base) => ({
            ...base,
            backgroundColor: isDark ? "#1f2937" : "#ffffff",
        }),

        option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected ? (isDark ? "#2563eb" : "#3b82f6") : state.isFocused ? (isDark ? "#374151" : "#f3f4f6") : isDark ? "#1f2937" : "#ffffff",
            color: state.isSelected ? "#ffffff" : isDark ? "#f9fafb" : "#111827",
            cursor: "pointer",

            "&:active": {
                backgroundColor: isDark ? "#2563eb" : "#dbeafe",
            },
        }),

        noOptionsMessage: (base) => ({
            ...base,
            color: isDark ? "#9ca3af" : "#6b7280",
        }),

        loadingMessage: (base) => ({
            ...base,
            color: isDark ? "#9ca3af" : "#6b7280",
        }),

        dropdownIndicator: (base) => ({
            ...base,
            color: isDark ? "#9ca3af" : "#6b7280",

            "&:hover": {
                color: isDark ? "#f9fafb" : "#111827",
            },
        }),

        clearIndicator: (base) => ({
            ...base,
            color: isDark ? "#9ca3af" : "#6b7280",

            "&:hover": {
                color: isDark ? "#f87171" : "#ef4444",
            },
        }),

        indicatorSeparator: (base) => ({
            ...base,
            backgroundColor: isDark ? "#374151" : "#d1d5db",
        }),
    });
    const fetchUrl = async () => {
        const LoadingId=toast.loading('درحال انتقال به درگاه ...')
        setIsLoading(true)
        try {
            const paymentGateway = await POSThandler(
                "checkout",
                {
                    shippingAddress: {
                        address: formData.address,
                        postalCode: formData.postalCode,
                        coordinates: location,
                        cityId: Number(formData.cityId),
                    },
                },
                { withCredentials: true },
            );
            setIsLoading(false)
            toast.dismiss(LoadingId);
        } catch (error) {
            setIsLoading(false)
            toast.error('خطا در رفتن به درگاه',{id:LoadingId})
        }
    };
    useEffect(() => {
        fetchLocation();
    }, []);
    const handleSubmit = (event) => {
        event.preventDefault();
        validate(CheckOutSchema, { address: formData.address, cityId: formData.cityId, postalCode: formData.postalCode, location })&&fetchUrl()
    };
    return (
        <div className="min-h-screen px-4 py-10">
            <div className="mx-auto max-w-6xl">
                <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-zinc-400">تکمیل سفارش</h1>
                <div className="grid gap-4 grid-cols-4">
                    <form onSubmit={handleSubmit} className="rounded-2xl bg-zinc-100 dark:bg-dark-bg2 p-6 shadow-sm col-span-4 max-[530px]:order-2 min-[530px]:col-span-2 min-[1020px]:col-span-3">
                        <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-zinc-400">آدرس ارسال</h2>
                        <div className="space-y-5 mb-8">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-zinc-200">آدرس</label>
                                <textarea name="address" value={formData.address} onChange={handleChange} placeholder="آدرس کامل خود را وارد کنید..." rows={4} className="w-full bg-zinc-200 dark:bg-dark-bg1 resize-none rounded-xl border border-gray-400 dark:border-dark-border px-4 py-3 outline-none transition" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="col-span-2 min-[1020px]:col-span-1">
                                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-zinc-200">شناسه شهر</label>
                                    {manageCities.isLoading ? (
                                        <p>درحال بارگذاری ...</p>
                                    ) : !manageCities.cities.length && !manageCities.isLoading ? (
                                        <div className="flex-ic gap-3">
                                            <p className="text-red-400"> خطا در دریافت شهر ها</p>
                                            <VscDebugRestart onClick={fetchLocation} className="text-green-500 cursor-pointer" />
                                        </div>
                                    ) : (
                                        <Select options={manageCities.cities} styles={selectStyles(theme === "dark")} onChange={handleCityChange} noOptionsMessage={() => "شهری یافت نشد"} placeholder="جستجوی شهر" isClearable isSearchable />
                                    )}
                                </div>
                                <div className="col-span-2 min-[1020px]:col-span-1">
                                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-zinc-200">کد پستی</label>
                                    <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} placeholder="مثلاً : 1234567890" className="w-full bg-zinc-200 dark:bg-dark-bg1 rounded-xl border border-gray-400 dark:border-dark-border px-4 py-3 outline-none transition" />
                                </div>
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-zinc-200">موقعیت روی نقشه</label>
                                <p className="mb-3 text-sm text-gray-500">برای مشخص کردن محل ارسال، روی نقشه کلیک کنید.</p>
                                <LocationPicker position={location} setPosition={setLocation} />
                            </div>
                        </div>
                        <Button_7 className={'disabled:cursor-not-allowed! disabled:opacity-50! w-full! py-2.5!'} type="submit" disabled={isLoading}>
                            {isLoading ? "در حال پردازش..." : "ادامه و پرداخت"}
                        </Button_7>
                    </form>
                    <div className="h-fit col-span-4 sticky min-[530px]:top-34 max-[530px]:order-1 min-[530px]:col-span-2 min-[1020px]:col-span-1 rounded-2xl bg-zinc-100 dark:bg-dark-bg2 p-6 shadow-sm">
                        <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-zinc-400">خلاصه سفارش</h2>
                        <div className="space-y-4 border-b border-gray-200 dark:border-dark-border pb-5">
                            <div className="flex items-center justify-between text-gray-600">
                                <span>تعداد محصولات</span>
                                <span>{items?.length ?? 0} محصول</span>
                            </div>
                            <div className="flex items-center justify-between text-gray-600">
                                <span>هزینه ارسال</span>
                                <span>{Number(100000).toLocaleString("fa-IR")} تومان</span>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center justify-between">
                            <span className="font-bold text-gray-900 dark:text-zinc-400 text-xs xl:text-sm">مبلغ قابل پرداخت</span>
                            <span className="text-xs xl:text-sm font-bold text-blue-600">{totalPrice?.toLocaleString("fa-IR") ?? 0} تومان</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
