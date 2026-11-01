import { z } from "zod";
const CommentSchema = z.object({
    score:z.string({error:'امتیاز خود را باید وارد کنید'}),
    Comment: z
        .string()
        .trim()
        .min(3, {
            error: "کامنت باید حداقل 3 کاراکتر باشد.",
        })
        .max(150, {
            error: "کامنت نمی‌تواند بیشتر از 150 کاراکتر باشد.",
        }),
});
export default CommentSchema;
