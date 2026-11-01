import { z } from "zod";
const validateDoubleArray = (ctx, isCompledRow, { key, value }, messageType) => {
    for (let index = 0; index < key.length; index++) {
        const currentkey = key[index]?.trim();
        const currentvalue = value[index]?.trim();
        if (!currentkey && !currentvalue) {
            continue;
        }
        if (currentkey) {
            if (currentkey.trim().length < 2) {
                ctx.addIssue({
                    message: `کلید ${messageType} ${!index ? "" : index + 1} باید حداقل 2 کاراکتر باشد.`,
                });
            }
            if (currentkey.trim().length > 30) {
                ctx.addIssue({
                    error: `مقدار ${messageType} ${!index ? "" : index + 1} نمی‌تواند بیشتر از 30 کاراکتر باشد.`,
                });
            }
        }
        if (currentvalue) {
            if (currentvalue.trim().length > 30) {
                ctx.addIssue({
                    error: `مقدار ${messageType} ${!index ? "" : index + 1} نمی‌تواند بیشتر از 30 کاراکتر باشد.`,
                });
            }
        }
        if (!currentkey) {
            ctx.addIssue({
                message: `کلید ${messageType} ${!index ? "" : index + 1} الزامی است.`,
            });
        }
        if (!currentvalue) {
            ctx.addIssue({
                message: `مقدار ${messageType} ${!index ? "" : index + 1} الزامی است.`,
            });
        }
        if (currentkey && currentvalue) {
            isCompledRow = true;
        }
    }
    if (!isCompledRow) {
        ctx.addIssue({
            message: ` حداقل یک ${messageType} را به‌صورت کامل وارد کنید.`,
        });
    }
};
const Add_EditProductSchema = (categories) =>
    z.object({
        title: z
            .string()
            .trim()
            .min(2, {
                error: "عنوان محصول باید حداقل 2 کاراکتر باشد.",
            })
            .max(15, {
                error: "عنوان محصول نمی‌تواند بیشتر از 15 کاراکتر باشد.",
            }),
        slug: z.string().trim().min(1, {
            error: "پر کردن فیلد لینک الزامی است.",
        }).regex(/^[A-Za-z0-9-]+$/,{
            error:'لینک باید شامل حروف انگلیسی و اعداد و - باشد'
        }),
        categories: z
            .array(z.string())
            .min(1, {
                error: "انتخاب دسته‌بندی الزامی است.",
            })
            .superRefine((path, ctx) => {
                let currentCategories = categories;
                for (const id of path) {
                    const category = currentCategories?.find((item) => item._id === id);
                    currentCategories = category.subCategories || [];
                }
                if (currentCategories.length > 0) {
                    ctx.addIssue({
                        message: "لطفاً آخرین سطح دسته‌بندی را انتخاب کنید.",
                    });
                }
            }),
        price: z.array(z.string()),
        stock: z.array(z.string()),
        seller: z.array(z.string()),
        filterValuesKey: z.array(z.string()),
        filterValuesValue: z.array(z.string()),
        customFieldsKey: z.array(z.string()),
        customFieldsValue: z.array(z.string()),
        images: z.array(z.file()),
        description: z.string(),
    })
    .superRefine((data, ctx) => {
        const { price, stock, seller, description, filterValuesKey, filterValuesValue, customFieldsKey, customFieldsValue, images } = data;
        let hasCompleteSellerRow = false;
        let hasCompleteFilterValueRow = false;
        let hasCompleteCustomFieldRow = false;
        for (let index = 0; index < price.length; index++) {
            const currentkey = price[index]?.trim();
            const currentvalue = stock[index]?.trim();
            const currentSeller = seller[index]?.trim();
            if (!currentkey && !currentvalue && !currentSeller) {
                continue;
            }
            if (currentkey) {
                if (!/^\d+$/.test(currentkey) || Number(currentkey) <= 0) {
                    ctx.addIssue({
                        message: `قیمت فروشگاه ${!index ? "" : index + 1} باید یک عدد مثبت باشد.`,
                    });
                }
            }
            if (currentvalue) {
                if (!/^\d+$/.test(currentvalue) || Number(currentvalue) <= 0) {
                    ctx.addIssue({
                        message: `موجودی فروشگاه ${!index ? "" : index + 1} باید یک عدد صحیح مثبت باشد.`,
                    });
                }
            }
            if (!currentkey) {
                ctx.addIssue({
                    message: `قیمت فروشگاه ${!index ? "" : index + 1} الزامی است.`,
                });
            }
            if (!currentvalue) {
                ctx.addIssue({
                    message: `موجودی فروشگاه ${!index ? "" : index + 1} الزامی است.`,
                });
            }
            if (!currentSeller) {
                ctx.addIssue({
                    message: ` انتخاب فروشگاه ${!index ? "" : index + 1} الزامی است.`,
                });
            }
            if (currentkey && currentvalue && currentSeller) {
                hasCompleteSellerRow = true;
            }
        }
        if (!hasCompleteSellerRow) {
            ctx.addIssue({
                message: "حداقل یک فروشگاه را به‌صورت کامل وارد کنید.",
            });
        }
        validateDoubleArray(ctx, hasCompleteFilterValueRow, { key: filterValuesKey, value: filterValuesValue }, "ویژگی فیلتری");
        validateDoubleArray(ctx, hasCompleteCustomFieldRow, { key: customFieldsKey, value: customFieldsValue }, "ویژگی سفارشی");
        if (!images.length) {
            ctx.addIssue({
                message: "حداقل یک عکس برای محصول انتخاب کنید .",
            });
        }
        if (description.trim().length < 10) {
            ctx.addIssue({
                message: "توضیحات باید حداقل 10 کاراکتر باشد.",
            });
        }
        if (description.trim().length > 1000) {
            ctx.addIssue({
                error: "توضیحات نمی‌تواند بیشتر از 1000 کاراکتر باشد.",
            });
        }
    });
export default Add_EditProductSchema;
