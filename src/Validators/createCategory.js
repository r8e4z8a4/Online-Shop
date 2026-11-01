import { z } from "zod";
const createCategorySchema = z.object({
    title: z
        .string()
        .trim()
        .min(2, {
            error: " عنوان باید حداقل 2 کاراکتر باشد.",
        })
        .max(50, {
            error: "عنوان نمی‌تواند بیشتر از 50 کاراکتر باشد.",
        }),
    slug: z
        .string()
        .trim()
        .min(1, {
            error: "پر کردن فیلد لینک الزامی است.",
        })
        .regex(/^[A-Za-z0-9-]+$/, {
            error: "لینک باید شامل حروف انگلیسی و اعداد و - باشد",
        }),
    description: z
        .string()
        .trim()
        .min(2, {
            error: "توضیحات باید حداقل 2 کاراکتر باشد.",
        })
        .max(150, {
            error: "توضیحات نمی‌تواند بیشتر از 150 کاراکتر باشد.",
        }),
});
export default createCategorySchema;
