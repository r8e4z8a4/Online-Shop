import Button_7 from "@/Components/Common/Buttons/Button_7";
import { AuthContext } from "@/Context/AuthContext";
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
const TAX_RATE = 0.09;
const Checkout = ({items}) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const subTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = Math.round(subTotal * TAX_RATE);
    const totalPrice = subTotal + tax;
    const handleCheckout = () => {
        if (!user) {
            toast.error("برای تکمیل سفارش ابتدا وارد حساب کاربری خود شوید", {
                action: {
                    label: "ورود به حساب",
                    onClick: () => navigate(`/auth`),
                },
            });
            return;
        }
        navigate("/checkout");
    };
    return (
        <div className="col-span-4 min-[555px]:col-span-2 lg:col-span-1 space-y-4 sticky top-4 max-h-max">
            <p className="text-lg font-bold text-slate-700 dark:text-zinc-400">
                <strong>صورتحساب</strong>
            </p>
            <div className="p-5 border *:flex-between *:grow rounded-lg border-slate-200 dark:bg-dark-bg2 bg-pink-500 dark:border-dark-border space-y-4">
                <div>
                    <p className="font-bold text-slate-300 text-sm">قیمت محصولات</p>
                    <p className="font-medium flex-ic gap-1 text-sm ">
                        {Number(subTotal).toLocaleString("fa-IR")}
                        <span className="text-sm">تومان</span>
                    </p>
                </div>
                <div>
                    <p className="font-bold  text-xs text-blue-300!">مالیات برافزوده {"(9%)"}</p>
                    <p className="font-medium flex-ic gap-1 text-xs text-blue-300! ">
                        {Number(tax).toLocaleString("fa-IR")}
                        <span className="text-sm">تومان</span>
                    </p>
                </div>
                <div className="w-full h-px border border-slate-100 dark:border-dark-border" />
                <div className="text-slate-800! dark:text-zinc-400!">
                    <p className="font-bold text-sm">قیمت محصولات</p>
                    <p className="flex-ic gap-1 font-black! ">
                        <strong>{Number(totalPrice).toLocaleString("fa-IR")}</strong>
                        <span className="text-xs">تومان</span>
                    </p>
                </div>
                <div className="*:mx-auto">
                    <Button_7 handler={handleCheckout}>تکمیل سفارش</Button_7>
                </div>
            </div>
        </div>
    );
};
export default Checkout;
