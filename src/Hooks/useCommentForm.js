import ManageRequest from "@/API/ManageRequest";
import POSThandler from "@/API/POSThandler";
import { AuthContext } from "@/Context/AuthContext";
import { validate } from "@/Validators";
import CommentSchema from "@/Validators/Comment";
import { useActionState, useContext } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
export const useCommentForm = (productId) => {
  const navigate=useNavigate()
    const {user}=useContext(AuthContext)
  const handler = async (_, formData) => {
    if (!user) {
      toast.error('برای ثبت کامنت باید لاگین کنید',{
        action:{
          label:'ورود به حساب',
          onClick:()=>navigate('/auth')
        }
      })
      return { Comment: "" }
    }
      const form = { score: formData.get("rate"), Comment: formData.get("Comment") };
      if (!validate(CommentSchema, form)) {
          return form;
      }
      const promise = POSThandler("comments", { productId, content: form.Comment, rating: Number(form.score) }, { withCredentials: true });
      ManageRequest({ promise, TextLoader: "درحال ثبت کامنت ..." ,TextSuccess:'کامنت با موفقیت ثبت شد',TextError:'خطا در ثبت کامنت مجدد تلاش کنید'});
      try {
          await promise;
          return { Comment: "" };
      } catch (error) {
          return form;
      }
  };
    const [form, action, isPending] = useActionState(handler, { Comment: "" });
    return { action, isPending, form };
};
