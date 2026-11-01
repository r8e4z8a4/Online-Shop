import Drawer from "../Drawer";
import CascadeCategories from "./CascadeCategories";
import ProductDrawerInput from "./ProductDrawerInput";
import { VscDebugRestart } from "react-icons/vsc";
import SellerFields from "@/Components/Templates/Dashboard/common/ProductDrawer/SellerFields";
import useProductMyForm from "@/Hooks/useProductMyForm";
import DynamicKeyValueFields from "@/Components/Templates/Dashboard/common/ProductDrawer/DynamicKeyValueFields";
import ImageUploadField from "@/Components/Templates/Dashboard/common/ProductDrawer/ImageUploadField";
import clsx from "clsx";
const ProductDrawer = ({ isOpen, onToggle, isLoading, categories, error, fetchData ,Edit,product,fetchProducts}) => {
    const { form, action, isPending,changeFormControlle,formControlle} = useProductMyForm(categories,onToggle,fetchProducts,product);
    return (
        <Drawer action={action} isOpen={isOpen} onClose={onToggle} title={Edit?'ویرایش محصول':"ایجاد محصول"}>
            <div className="space-y-4 mt-5 px-6">
                <ProductDrawerInput label="عنوان محصول" placeholder="مثلا : آیفون 17 پرومکس" type="text" name="title" defaultValue={form.title} />
                <ProductDrawerInput label="لینک" placeholder="مثلا : iphone-17-promax" type="text" name="slug" defaultValue={form.slug} />
                <div>
                    <label htmlFor="category" className="text-sm font-medium text-zinc-700 dark:text-zinc-400 mb-2 block">
                        دسته‌بندی
                    </label>
                    <div className="flex-between">
                        {isLoading ? <p className="text-xs text-zinc-400">در حال بارگذاری ...</p> : error ? <p className="text-xs text-zinc-400">{error}</p> : <CascadeCategories categories={categories} defaultPath={form.categories} />}
                        {error && <VscDebugRestart onClick={() => fetchData(true)} className="cursor-pointer" />}
                    </div>
                    <SellerFields sellers={formControlle.sellerRows} onchange={changeFormControlle} />
                    <DynamicKeyValueFields type='filterValues' title="ویژگی های فیلتری" items={formControlle.filterValues} onchange={changeFormControlle} />
                    <DynamicKeyValueFields type='customFields' title="ویژگی های سفارشی" items={formControlle.customFields} onchange={changeFormControlle} />
                    <ImageUploadField files={formControlle.images} onChange={changeFormControlle} 
                    />
                </div>
                <div>
                    <label htmlFor="product-details" className="text-sm font-medium text-zinc-700 dark:text-zinc-400">
                        توضیحات محصول
                    </label>
                    <textarea defaultValue={form.description} id="product-details" name="description" className="w-full h-10 text-sm rounded-md outline-none primary-border dark:border-dark-border px-3 mt-2 min-h-30 pt-2 dark:bg-[#0a2332]" placeholder="آیفون - ارزان - تخفیف دار" />
                </div>
                <div className="mt-5 flex items-center justify-end gap-2">
                    <button onClick={onToggle} type="button" className="px-4 py-2 rounded-md bg-red-500/10 text-red-500 hover:bg-red-500/15">
                        انصراف
                    </button>
                    <button type="submit" disabled={isPending} className={clsx('px-4 py-2 rounded-md bg-linear-to-t from-blue-600 text-sm to-blue-500 text-white',isPending?'opacity-40 cursor-not-allowed':'')}>
                        {isPending ? "در حال ثبت ..." :Edit?'تایید ویرایش':"ایجاد محصول"}
                    </button>
                </div>
            </div>
        </Drawer>
    );
};
export default ProductDrawer;
