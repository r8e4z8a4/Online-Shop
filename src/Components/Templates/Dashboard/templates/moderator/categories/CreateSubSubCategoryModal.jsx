import { useContext, useEffect, useMemo, useReducer, useState } from "react";
import FiltersEditor from "./FiltersEditor";
import { filtersReducer } from "@/lib/reducers/category/filterReducer";
import Modal from "@/Components/Templates/Dashboard/common/Modal";
import Input_1 from "@/Components/Common/Inputs/Input_1";
import { validate } from "@/Validators";
import { ThemeContext } from "@/Context/ThemeContext";
import Select from "react-select";
import { VscDebugRestart } from "react-icons/vsc";
import { useSubSubCategoryForm } from "@/Hooks/useSubSubCategoryForm";
import createSub_SubSubCategorySchema from "@/Validators/createSub_SuSubCategoty";
const getCategoryOptions = (categories = []) => {
    const options = [];
    categories.forEach(category=>{
        category.subCategories.map(sub=>{
            options.push({
                value: sub._id,
                label: sub.title,
            });
        })
    })
    return options;
};
const normalizeFilters = (filters) => {
    if (!Array.isArray(filters)) {
        return [];
    }
    return filters.map((filter) => ({
        name: filter?.name ?? "",
        slug: filter?.slug ?? "",
        type: filter?.type ?? "",
        description: filter?.description ?? "",
        options: Array.isArray(filter?.options) ? filter.options : [],
    }));
};
const CreateSubCategoryModal = ({ isOpen, onClose, onSuccess, subcategory, data, fetchcategory }) => {
    const { theme } = useContext(ThemeContext);
    const initialForm = {title: "",slug: "",description: "",parent: "",};
    const [form, setForm] = useState(initialForm);
    const [filters, dispatchFilters] = useReducer(filtersReducer, []);
    const options = useMemo(() => {
        return getCategoryOptions(data?.categories || []);
    }, [data?.categories]);
    const selectedParent = useMemo(() => {
        if (!form.parent) {
            return null;
        }
        return options.find((option) => String(option.value) === String(form.parent)) || null;
    }, [options, form.parent]);
    useEffect(() => {
        if (!isOpen) {
            return;
        }
        if (subcategory) {
            setForm({title: subcategory.title ?? "",slug: subcategory.slug ?? "",description: subcategory.description ?? "",parent: typeof subcategory.parent === "object" ? (subcategory.parent?._id ?? "") : (subcategory.parent ?? ""),});
            dispatchFilters({type: "filters/set",payload: normalizeFilters(subcategory.filters),});
            return;
        }
        setForm(initialForm);
        dispatchFilters({type: "filters/reset",});
    }, [isOpen, subcategory]);
    const { isSubmitting, submit } = useSubSubCategoryForm(() => {
        resetForm();
        onClose();
        onSuccess();
        Boolean(subcategory)&&fetchcategory(true);
    }, subcategory);
    const resetForm = () => {
        setForm(initialForm);
        dispatchFilters({type: "filters/reset",});
    };
    const handleClose = () => {
        resetForm();
        onClose();
    };
    const handleCategoryChange = (selectedOption) => {
        setForm({...form,parent: selectedOption?.value ?? "",});
    };
    const handleSubmit = () => validate(createSub_SubSubCategorySchema, { title: form.title, slug: form.slug,selectedParent, description: form.description }) && submit({ title: form.title, slug: form.slug, description: form.description, filters, parentID: form.parent });
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
        <Modal onOpenChange={handleClose} title={subcategory ? "ویرایش زیر دسته بندی" : "زیر دسته‌بندی جدید"} isOpen={isOpen}>
            <div className="space-y-4 px-3 py-5">
                <div>
                    <label className="text-sm block mb-1">عنوان</label>
                    <Input_1 className="dark:bg-[#0a2332]!" value={form.title} onChange={(e) =>setForm({...form,title: e.target.value,})}
                    />
                </div>
                <div>
                    <label className="text-sm block mb-1">Slug</label>
                    <Input_1 className="dark:bg-[#0a2332]!" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
                </div>
                <div>
                    <label className="text-sm block mb-1">برای دسته بندی</label>
                    {data?.isLoading ? (
                        <p className="text-sm">درحال بارگذاری ...</p>
                    ) : data?.error ? (
                        <div className="flex-between">
                            <p className="text-sm text-red-600">خطا در دریافت دسته بندی ها</p>
                            <VscDebugRestart className="cursor-pointer" onClick={() => fetchcategory(true)} />
                        </div>
                    ) : (
                        <Select options={options} styles={selectStyles(theme === "dark")} value={selectedParent} onChange={handleCategoryChange} noOptionsMessage={() => "دسته بندی یافت نشد"} placeholder="جستجوی دسته بندی" isClearable isSearchable />
                    )}
                </div>
                <div>
                    <label className="text-sm block mb-1">توضیحات</label>
                    <textarea value={form.description} onChange={(e) =>setForm({...form,description: e.target.value,})} className=" w-full text-sm rounded-md outline-none primary-border dark:border-dark-border bg-[#ededef] px-3 mt-2 min-h-30 pt-2 dark:bg-[#0a2332]"
                    />
                </div>
                <FiltersEditor filters={filters} dispatch={dispatchFilters} />
                <div className="flex items-center justify-end gap-2 pt-2">
                    <button type="button" onClick={handleClose} className=" px-4 py-2 rounded-md bg-red-500 text-white text-sm">
                        انصراف
                    </button>
                    <button type="button" onClick={handleSubmit} disabled={isSubmitting} className=" px-4 py-2 rounded-md bg-blue-500 text-white text-sm disabled:opacity-50 disabled:cursor-not-allowe">
                        {isSubmitting ? "در حال ثبت ..." : "ثبت"}
                    </button>
                </div>
            </div>
        </Modal>
    );
};
export default CreateSubCategoryModal;
