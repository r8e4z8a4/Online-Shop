import { useReducer, useState } from "react";
import FiltersEditor from "./FiltersEditor";
import { useCategoryForm } from "@/Hooks/useCategoryForm";
import { filtersReducer } from "@/lib/reducers/category/filterReducer";
import Modal from "@/Components/Templates/Dashboard/common/Modal";
import Input_1 from "@/Components/Common/Inputs/Input_1";
import { validate } from "@/Validators";
import createCategorySchema from "@/Validators/createCategory";
const CreateCategoryModal = ({ isOpen, onClose, onSuccess, category,CategoryData }) => {
    const [form, setForm] = useState(category ? { title: category.title, slug: category.slug, description: category.description, iconFile: category.icon } : { title: "", slug: "", description: "", iconFile: null });
    const [filters, dispatchFilters] = useReducer(filtersReducer, category?.filters || []);
    const { isSubmitting, submit } = useCategoryForm(() => {
        resetForm();
        onClose();
        onSuccess();
    }, category);
    const resetForm = () => {
        setForm({ title: "", slug: "", description: "", iconFile: null });
        dispatchFilters({ type: "filters/reset" });
    };
    const handleSubmit = () => validate(createCategorySchema, { title: form.title, slug: form.slug, description: form.description }) && submit({ title: form.title, slug: form.slug, description: form.description, iconFile: form.iconFile, filters });
    const handleClose = () => {
        resetForm();
        onClose();
    };
    const options=[]
    if (!CategoryData?.isLoading&&!CategoryData?.error) {
        CategoryData?.categories.map(category=>{
        options.push({value:category._id,label:category.title})
    })
    }
    return (
        <Modal onOpenChange={handleClose} title={category ? "ویرایش دسته بندی" : "دسته‌بندی جدید"} isOpen={isOpen}>
            <div className="space-y-4 px-3 py-5">
                <div>
                    <label className="text-sm block mb-1">عنوان</label>
                    <Input_1 className={"dark:bg-[#0a2332]!"} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
                </div>
                <div>
                    <label className="text-sm block mb-1">Slug</label>
                    <Input_1 className={"dark:bg-[#0a2332]!"} value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
                </div>
                <div>
                    <label className="text-sm block mb-1">توضیحات</label>
                    <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full h-10 text-sm rounded-md outline-none primary-border dark:border-dark-border bg-[#ededef] px-3 mt-2 min-h-30 pt-2 dark:bg-[#0a2332]" />
                </div>
                <div>
                    <label className="text-sm block mb-1">آیکون (اختیاری)</label>
                    <input type="file" accept="image/*" onChange={(e) => setForm({ ...form, iconFile: e.target.files[0] || null })} />
                </div>
                <FiltersEditor filters={filters} dispatch={dispatchFilters} />
                <div className="flex items-center justify-end gap-2 pt-2">
                    <button onClick={handleClose} className="px-4 py-2 rounded-md bg-red-500 text-white text-sm">
                        انصراف
                    </button>
                    <button onClick={handleSubmit} disabled={isSubmitting} className="px-4 py-2 rounded-md bg-blue-500 text-white text-sm disabled:opacity-50 disabled:cursor-not-allowed">
                        {isSubmitting ? "در حال ثبت ..." : "ثبت"}
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default CreateCategoryModal;
