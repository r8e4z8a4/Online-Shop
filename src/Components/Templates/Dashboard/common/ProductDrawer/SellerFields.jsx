import GEThandler from "@/API/GEThandler";
import Input_1 from "@/Components/Common/Inputs/Input_1";
import { ThemeContext } from "@/Context/ThemeContext";
import { useContext, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { HiX } from "react-icons/hi";
import AsyncSelect from "react-select/async";
const SellerFields = ({ sellers, onchange }) => {
    const [selectedSellers, setSelectedSellers] = useState({});
    const { theme } = useContext(ThemeContext);
    const loadSellersOptions = async (inputValue) => {
        try {
            const { data } = await GEThandler("sellers/search", {
                withCredentials: true,
                params: {
                    q: inputValue,
                },
            });
            return data.sellers.map((seller) => ({
                value: seller._id,
                label: seller.name,
            }));
        } catch (error) {
            console.error(error);
            return [];
        }
    };
    const handleSellerChange = (selectedOption, sellerId) => {
        setSelectedSellers((prev) => ({...prev,[sellerId]: selectedOption,}));
    };
    const handleRemove = (id) => {
        setSelectedSellers((prev) => {
            const next = { ...prev };
            delete next[id];
            return next;
        });
        onchange('remove','sellerRows',id);
    };
    const selectStyles = (isDark) => ({
        control: (base) => ({
            ...base,
            backgroundColor: isDark ? "#0a2332" : "#ededef",
            borderWidth: 0,
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
    return (
        <div className="mt-4 space-y-7">
            <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-400">فروشندگان</label>
                <button type="button" onClick={()=>onchange('add','sellerRows',undefined,{ id: crypto.randomUUID(), seller: null, price: "", stock: "" })} className="text-green-500 text-xs flex items-center gap-1">
                    <BiPlus />
                    افزودن فروشنده
                </button>
            </div>
            {sellers.map((seller) => {
                const selectedSeller = selectedSellers[seller.id] ?? null;
                return (
                    <div key={seller.id} className="flex-ic gap-2">
                        <div className="flex-1">
                            <div className="*:w-full flex gap-2 mb-2">
                                <Input_1 name="price" placeholder="قیمت (تومان)" type="text" defaultValue={seller.price} />
                                <Input_1 name="stock" placeholder="موجودی (عدد)" type="text" defaultValue={seller.stock} />
                            </div>
                            <div className="flex-between">
                                <AsyncSelect cacheOptions defaultOptions loadOptions={loadSellersOptions} styles={selectStyles(theme == "dark" ? true : false)} className="grow " value={selectedSeller} onChange={(option) => handleSellerChange(option, seller.id)} loadingMessage={() => "در حال جستجو ..."} noOptionsMessage={() => "فروشنده‌ای یافت نشد"} placeholder="جستجوی فروشنده" isClearable />
                                <input type="hidden" name="seller" value={selectedSeller?.value ?? ""} />
                            </div>
                        </div>
                        {sellers.length > 1 && (
                            <button type="button" onClick={() => handleRemove(seller.id)} className="text-red-500 shrink-0">
                                <HiX className="size-6" />
                            </button>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
export default SellerFields;