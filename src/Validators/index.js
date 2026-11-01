import { toast } from "sonner";
export const validate=(schema,value)=>{
    const validation = schema.safeParse(value);
    if (!validation.success) {
        toast.error(validation.error.issues[0].message)
        return false
    }
    return true
}