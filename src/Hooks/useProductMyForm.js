import ManageRequest from "@/API/ManageRequest";
import POSThandler from "@/API/POSThandler";
import { validate } from "@/Validators";
import Add_EditProductSchema from "@/Validators/add_editProduct";
import { useActionState, useState } from "react";
const initialForm = {
    title: "",
    slug: "",
    description: "",
    categories: [],
};
const initialformControlle = {
    filterValues: [{ id: crypto.randomUUID(), key: "", value: "" }],
    customFields: [{ id: crypto.randomUUID(), key: "", value: "" }],
    sellerRows: [{ id: crypto.randomUUID(), seller: null, price: "", stock: "" }],
    images: [],
};
const useProductMyForm = (categories,onToggle,fetchProducts,product) => {
    const [formControlle, setFormControlle] = useState(product?{
    filterValues: Array.from({ length: Object.keys(product.filterValues).length}).map((_,index)=>{return{id:crypto.randomUUID(), key: Object.keys(product.filterValues)[index], value: Object.values(product.filterValues)[index]}}),
    customFields: Array.from({ length: Object.keys(product.customFields).length}).map((_,index)=>{return{id:crypto.randomUUID(), key: Object.keys(product.customFields)[index], value: Object.values(product.customFields)[index]}}),
    sellerRows:Array.from({ length: product.sellers.length}).map((_,index)=>{return{id:crypto.randomUUID(), price:product.sellers[index].price, stock:product.sellers[index].stock,seller:null}}),
    images: [],
}:initialformControlle);
    const handler = async (_, formData) => {
        const form = {
            title: formData.get("title"),
            slug: formData.get("slug"),
            categories: formData.getAll("category"),
            description: formData.get("description"),
        };
        const filterValuesKey = formData.getAll("filterValues-key");
        const filterValuesValue = formData.getAll("filterValues-value");
        const customFieldsKey = formData.getAll("customFields-key");
        const customFieldsValue = formData.getAll("customFields-value");
        const images = formControlle.images;
        const sellerData = {
            price: formData.getAll("price"),
            stock: formData.getAll("stock"),
            seller: formData.getAll("seller"),
        };
        const filterValuesNew = [];
        const customFieldsNew = [];
        Array.from({ length: filterValuesKey.length }).map((_, i) => {
            filterValuesNew.push({ id: crypto.randomUUID(), key: filterValuesKey[i], value: filterValuesValue[i] });
        });
        Array.from({ length: customFieldsValue.length }).map((_, i) => {
            customFieldsNew.push({ id: crypto.randomUUID(), key: customFieldsKey[i], value: customFieldsValue[i] });
        });
        if (!validate(Add_EditProductSchema(categories), { ...form, ...sellerData, filterValuesKey, filterValuesValue, customFieldsKey, customFieldsValue, images })) {
            setFormControlle({ ...formControlle, customFields: customFieldsNew, filterValues: filterValuesNew, sellerRows: formControlle.sellerRows.map((row, index) => ({ ...row, price: sellerData.price[index] ?? "", stock: sellerData.stock[index] ?? "" })) });
            return form;
        }
        const buildFormData = () => {
            const formData = new FormData();
            formData.append("name", form.title);
            formData.append("slug", form.slug);
            formData.append("description", form.description);
            formData.append("subCategory", form.categories.at(-1));
            const sellers = [];
            sellerData.seller.map((item, index) => {
                if (item) {
                    sellers.push({ id: item, price: Number(sellerData.price[index]), stock: Number(sellerData.stock[index]) });
                }
            });
            formData.append("sellers", JSON.stringify(sellers));
            const filterValues = {};
            filterValuesKey.map((item, index) => {
                if (item) {
                    filterValues[[item]] = filterValuesValue[index];
                }
            });
            formData.append("filterValues", JSON.stringify(filterValues));
            const customFields = {};
            customFieldsKey.map((item, index) => {
                if (item) {
                    customFields[[item]] = customFieldsValue[index];
                }
            });
            formData.append("customFields", JSON.stringify(customFields));
            images.forEach((image) => {
                formData.append("images", image);
            });
            product&&formData.append('discount',0)
            return formData;
        };
        const successHandler = () => {
            setFormControlle(initialformControlle);
            fetchProducts()
            onToggle();
        };
        const errorHandler = () => {
            setFormControlle({ ...formControlle, customFields: customFieldsNew, filterValues: filterValuesNew, sellerRows: formControlle.sellerRows.map((row, index) => ({ ...row, price: sellerData.price[index] ?? "", stock: sellerData.stock[index] ?? "" })) });
        };
        const promise = POSThandler("products", buildFormData(), { withCredentials: true });
        ManageRequest({ promise, TextLoader: "درحال ثبت محصول ...",errorHandler, successHandler, TextSuccess: "محصول با موفقیت ثبت شد .", TextError: "خطا در ثبت محصول لطفا دوباره تلاش کنید ." });
        try {
            await promise
            return {
                title: "",
                slug: "",
                description: "",
                categories: [],
            };
        } catch (error) {
            return form;
        }
    };
    const [form, action, isPending] = useActionState(handler, product?{
    title: product.name,
    slug: product.slug,
    description: product.description,
    categories: [],
}:initialForm);
    const changeFormControlle = (type, key, id, value) => {
        if (type == "remove") {
            setFormControlle({ ...formControlle, [key]: formControlle[[key]].filter((item) => item.id !== id) });
        } else if (type == "add") {
            setFormControlle({ ...formControlle, [key]: [...formControlle[[key]], value] });
        } else {
            setFormControlle({ ...formControlle, images: value });
        }
    };
    return {
        form,
        action,
        isPending,
        changeFormControlle,
        formControlle,
    };
};
export default useProductMyForm;
