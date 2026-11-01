import { z } from "zod";
const contactUsSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, {
            error: "نام و نام خانوادگی باید حداقل 2 کاراکتر باشد.",
        })
        .max(50, {
            error: "نام و نام خانوادگی نمی‌تواند بیشتر از 50 کاراکتر باشد.",
        }),
    phone: z
        .string()
        .trim()
        .regex(/^09\d{9}$/, {
            error: "شماره موبایل معتبر نیست.",
        }),
    subject: z
        .string()
        .trim()
        .min(3, {
            error: "موضوع باید حداقل 3 کاراکتر باشد.",
        })
        .max(150, {
            error: "موضوع نمی‌تواند بیشتر از 150 کاراکتر باشد.",
        }),
    content: z
        .string()
        .trim()
        .min(10, {
            error: "محتوا باید حداقل 10 کاراکتر باشد.",
        })
        .max(1000, {
            error: "محتوا نمی‌تواند بیشتر از 1000 کاراکتر باشد.",
        }),
});
export default contactUsSchema;
