import { z } from "zod";
const CheckOutSchema = z.object({
    address: z
        .string()
        .trim()
        .min(6, {
            error: "آدرس باید حداقل 6 کاراکتر باشد.",
        })
        .max(50, {
            error: "آدرس نمی‌تواند بیشتر از 50 کاراکتر باشد.",
        }),
    cityId: z.string().trim().min(1, {
        error: "لطفا شهر خود را انتخاب کنید",
    }),
    postalCode: z
        .string()
        .trim()
        .regex(/^[0-9۰-۹]{10}$/, { error: "کد پستی باید ۱۰ رقم باشد." }),
    location: z.object(
        {
            lat: z.number(),
            lng: z.number(),
        },
        {
            error: "لطفا نقطه ارسال را روی نقشه مشخص کنید",
        },
    ),
});
export default CheckOutSchema;
