import { toast } from "sonner";
const ManageRequest = (data) => {
    toast.promise(data.promise, {
        loading: data.TextLoader,
        success: () => {
            data.successHandler && data.successHandler();
            return data.TextSuccess;
        },
        error: (err) => {
            data.errorHandler && data.errorHandler();
            if (data.TextError && err.message == "Request failed with status code 400" &&data.TextError=="خطا در آپدیت به سبد خرید") {
                return "تعداد انتخابی بیش از موجودی می‌باشد";
            } else if (data.TextError) {
                return data.TextError;
            } else if (err.message === "Network Error") {
                return "ارسال اطلاعات ناموفق بود، لطفاً دوباره تلاش کنید";
            } else {
                return "کد واردشده اشتباه است";
            }
        },
    });
};
export default ManageRequest;
